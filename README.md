<p align="center">
    <img src="https://avatars.githubusercontent.com/u/142582396?s=400&u=081f3176405a243f5090002723556c3e723089e3&v=4"/>
</p>

<b align="center">
    
    Simply string time converter (en/ru)
    From "5d2h" to 439200000 ms
    
</b>
<hr>

# Requirements
- [NodeJS](https://nodejs.org/en), recommended `v18` or newer
# Setup
1. Install `timeparser` via npm:
```bat
npm i @easy-ds-bot/timeparser
```
2. Use `timeparser`:
```js
// file.js, type: CommonJS
const { timeParser } = require("@easy-ds-bot/timeparser");
let unparsed = "1h5week";
let parsed = timeParser(unparsed);
console.log(parsed.ms); //3_027_600_000 ms
console.log(parsed.seconds); //3_027_600 sec
```
or...
```js
// file.js, type: ESM
import { timeParser } from "@easy-ds-bot/timeparser/esm";
let unparsed = "1h5week";
let parsed = timeParser(unparsed);
console.log(parsed.ms); //3_027_600_000 ms
console.log(parsed.seconds); //3_027_600 sec
```

# Benchmarks
```
(cjs) timeParser("1s") x 371,492 ops/sec ±0.97% (88 runs sampled)
(cjs) timeParser("1s").ms x 369,225 ops/sec ±0.86% (92 runs sampled)
(cjs) timeParser("1s").years x 372,001 ops/sec ±0.61% (95 runs sampled)
(cjs) timeParser("1y2mth3w4d5h6s7ms") x 116,745 ops/sec ±1.86% (89 runs sampled)
(cjs) timeParser("1y2mth3w4d5h6s7ms").ms x 102,950 ops/sec ±5.63% (79 runs sampled)
(cjs) timeParser("1y2mth3w4d5h6s7ms").years x 109,983 ops/sec ±2.64% (86 runs sampled)
(esm) timeParser("1s") x 370,134 ops/sec ±1.45% (91 runs sampled)
(esm) timeParser("1s").ms x 377,191 ops/sec ±0.60% (94 runs sampled)
(esm) timeParser("1s").years x 372,549 ops/sec ±0.58% (94 runs sampled)
(esm) timeParser("1y2mth3w4d5h6s7ms") x 122,565 ops/sec ±0.22% (95 runs sampled)
(esm) timeParser("1y2mth3w4d5h6s7ms").ms x 123,687 ops/sec ±0.53% (97 runs sampled)
(esm) timeParser("1y2mth3w4d5h6s7ms").years x 114,201 ops/sec ±1.89% (87 runs sampled)
```