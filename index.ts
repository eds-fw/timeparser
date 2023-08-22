export interface ParsedTime
{
    ms:         number;
    seconds:    number;
    minutes:    number;
    hours:      number;
    days:       number;
    weeks:      number;
    months:     number;
    years:      number;

    _matches:   string[];
}

/** 316 centuries or 31600 years */
export const limit_ms = 999_999_999_999_999;
export const time_RegExp = {
                 1: /([0-9])+(ms|msec(|s)|milli|millisecond(|s)|мс|мсек|миллисекунд(|а|ы))/gi,
             1_000: /([0-9])+(s|sec(|s)|second(|s)|с|сек|секунд(|а|ы))/gi,
            60_000: /([0-9])+(m|min(|s)|minute(|s)|м|мин|минут(|а|ы))/gi,
         3_600_000: /([0-9])+(h|hr(|s)|hour(|s)|ч|чс|час(|а|ов))/gi,
        86_400_000: /([0-9])+(d|day(|s)|д|день|дн(|и|ей))/gi,
       604_800_000: /([0-9])+(w|wk(|s)|week(|s)|н|нд|нед|недел(ь|и|ей))/gi,
     2_592_000_000: /([0-9])+(mth(|s)|mnth(|s)|month(|s)|мес|месяц(|ы|ев))/gi,
    22_118_400_000: /([0-9])+(y|yr(|s)|year(|s)|г|гд|год(|ы|ов)|лет)/gi,
};
export const limits_map = {
                 1: 997_198_860_799_837,
             1_000:     997_198_860_800,
            60_000:      16_619_981_013,
         3_600_000:         276_999_684,
        86_400_000:          11_534_000,
       604_800_000:           1_647_714,
     2_592_000_000:             379_200,
    22_118_400_000:              31_600,
};
const time_RegExp_entries = Object.entries(time_RegExp);

/**
 * Converts string time (e.g. `1d3h`) into milliseconds (`97_200_000`)
 * 
 * One month = 30 days, one year = 365 days
 * 
 * Returns `null` if `time > 31600 years`
 */
export function timeParser(time: string): ParsedTime | null
{
    let result = 0;
    let result_matches: string[] = [];

    for (const [ms, rx] of time_RegExp_entries)
    {
        let matches = time.match(rx);
        if (matches === null) continue;

        for (let match of matches)
        time = time.replace(match, '');

        result_matches = result_matches.concat(...(matches as string[]));

        let matches_nums = matches.map($ => Number($.match(/([0-9])/g)?.join('') ?? 0)).reduce((a, b) => a + b);
        if (matches_nums > limits_map[Number(ms) as keyof typeof time_RegExp])
        return null;

        result += matches_nums * Number(ms);
    }

    return {
        _matches:       result_matches,
        ms:             result,

        get seconds()   { return result /          1_000 },
        get minutes()   { return result /         60_000 },
        get hours()     { return result /      3_600_000 },
        get days()      { return result /     86_400_000 },
        get weeks()     { return result /    604_800_000 },
        get months()    { return result /  2_592_000_000 },
        get years()     { return result / 22_118_400_000 },
    };
}

export default timeParser;