import { parseTime, deparseTime } from "../../dist/esm/index.js";

console.log(`parseTime("1day5hour9min").ms parseTime("1day5hour9min").hours parseTime("1day5hour9min")._deparsed\n\t${parseTime("1day5hour9min").ms} ${parseTime("1day5hour9min").hours} ${parseTime("1day5hour9min")._deparsed}\n\t104940000 29.15 1d5h9m [correct]`);
console.log(`parseTime("") parseTime("ms") parseTime("0y") parseTime("99999999y")\n\t${parseTime("")} ${parseTime("ms")} ${parseTime("0y")} ${parseTime("99999999y")}\n\tnull null null null [correct]`);
console.log(`deparseTime(104940000)\n\t${deparseTime(104940000)}\n\t1d5h9m [correct]`);

/* RESULT:
parseTime("1day5hour9min").ms parseTime("1day5hour9min").hours parseTime("1day5hour9min")._deparsed
	104940000 29.15 1d5h9m
	104940000 29.15 1d5h9m [correct]
parseTime("") parseTime("ms") parseTime("0y") parseTime("99999999y")
	null null null null
	null null null null [correct]
deparseTime(104940000)
	1d5h9m
	1d5h9m [correct]
*/