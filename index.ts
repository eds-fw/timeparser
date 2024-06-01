export interface ParsedTime
{
    get ms():           number;
    get seconds():      number;
    get minutes():      number;
    get hours():        number;
    get days():         number;
    get weeks():        number;
    get months():       number;
    get years():        number;

    _matches:           string[];
    get _deparsed():    string;
}

/** 316 centuries or 31600 years */
export const limitms = 999_999_999_999_999;
export const timeRegExp = {
                 1: /(\d)+(ms|msec(|s)|milli|millisecond(|s)|мс|мсек|миллисекунд(|а|ы))/gi,
             1_000: /(\d)+(s|sec(|s)|second(|s)|с|сек|секунд(|а|ы))/gi,
            60_000: /(\d)+(m|min(|s)|minute(|s)|м|мин|минут(|а|ы))/gi,
         3_600_000: /(\d)+(h|hr(|s)|hour(|s)|ч|чс|час(|а|ов))/gi,
        86_400_000: /(\d)+(d|day(|s)|д|день|дн(|и|ей))/gi,
       604_800_000: /(\d)+(w|wk(|s)|week(|s)|н|нд|нед|недел(ь|и|ей))/gi,
     2_592_000_000: /(\d)+(mth(|s)|mnth(|s)|month(|s)|мес|месяц(|ы|ев))/gi,
    22_118_400_000: /(\d)+(y|yr(|s)|year(|s)|г|гд|год(|ы|ов)|лет)/gi,
};
export const timeRegExpNames = {
    "ms":           /(\d)+(ms|msec(|s)|milli|millisecond(|s)|мс|мсек|миллисекунд(|а|ы))/gi,
    "s":            /(\d)+(s|sec(|s)|second(|s)|с|сек|секунд(|а|ы))/gi,
    "m":            /(\d)+(m|min(|s)|minute(|s)|м|мин|минут(|а|ы))/gi,
    "h":            /(\d)+(h|hr(|s)|hour(|s)|ч|чс|час(|а|ов))/gi,
    "d":            /(\d)+(d|day(|s)|д|день|дн(|и|ей))/gi,
    "w":            /(\d)+(w|wk(|s)|week(|s)|н|нд|нед|недел(ь|и|ей))/gi,
    "mon":          /(\d)+(mon|mth(|s)|mnth(|s)|month(|s)|мес|месяц(|ы|ев))/gi,
    "y":            /(\d)+(y|yr(|s)|year(|s)|г|гд|год(|ы|ов)|лет)/gi,
};
export const timeNamesMap = {
                 1: "ms",
             1_000: "s",
            60_000: "m",
         3_600_000: "h",
        86_400_000: "d",
       604_800_000: "w",
     2_592_000_000: "mon",
    22_118_400_000: "y",
};
//Ziggurat!!!
export const limitsMap = {
                 1:  Math.floor(limitms / 1),
             1_000:  Math.floor(limitms / 1_000),
            60_000:  Math.floor(limitms / 60_000),
         3_600_000:  Math.floor(limitms / 3_600_000),
        86_400_000:  Math.floor(limitms / 86_400_000),
       604_800_000:  Math.floor(limitms / 604_800_000),
     2_592_000_000:  Math.floor(limitms / 2_592_000_000),
    22_118_400_000:  Math.floor(limitms / 22_118_400_000),
};
const entriesRegExp = Object.entries(timeRegExp);

/**
 * Converts string time (e.g. `1d3h`) into milliseconds (`97_200_000`)
 * 
 * One month = 30 days, one year = 365 days
 * 
 * Returns `null` if `time > 31600 years` or if `time == 0 ms`
 */
export function parseTime(time: string): ParsedTime | null
{
    let result = 0;
    let result_matches: string[] = [];

    for (const [ms, rx] of entriesRegExp)
    {
        let matches = time.match(rx);
        if (matches === null) continue;

        for (let match of matches)
        time = time.replace(match, '');

        result_matches = result_matches.concat(...(matches as string[]));

        let matches_nums = matches.map($ => Number($.match(/(\d)/g)?.join('') ?? 0)).reduce((a, b) => a + b);
        if (matches_nums > limitsMap[Number(ms) as keyof typeof limitsMap])
        return null;

        result += matches_nums * Number(ms);
    }

    if (result == 0) return null;

    return {
        get _deparsed()     { return deparseTime(result) },
        _matches:           result_matches,

        ms:                 result,
        get seconds()       { return result /          1_000 },
        get minutes()       { return result /         60_000 },
        get hours()         { return result /      3_600_000 },
        get days()          { return result /     86_400_000 },
        get weeks()         { return result /    604_800_000 },
        get months()        { return result /  2_592_000_000 },
        get years()         { return result / 22_118_400_000 },
    };
}

/**
 * Converts milliseconds into string time
 * 
 * One month = 30 days, one year = 365 days
 */
export function deparseTime(ms: number, separator: string = ''): string
{
    let result: string[] = [];
    for (let remainder = ms; remainder > 0;)
        for (const [time, name] of Object.entries(timeNamesMap).reverse())
        {
            const count = Math.floor(remainder / Number(time));
            if (count)
            {
                remainder -= count * Number(time);
                result.push(`${count}${name}`);
            }
        }
    return result.join(separator);
}

export const timeParser = parseTime;
export const timeDeparser = deparseTime;
export default timeParser;