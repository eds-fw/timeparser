<p align="center">
    <img src="https://avatars.githubusercontent.com/u/142582396?s=400&u=081f3176405a243f5090002723556c3e723089e3&v=4" width="200"/>
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
const { parseTime } = require("@easy-ds-bot/timeparser");
let unparsed = "1h5week";
let parsed = parseTime(unparsed);
console.log(parsed.ms); //3_027_600_000 ms
console.log(parsed.seconds); //3_027_600 sec
```
or...
```js
// file.js, type: ESM
import { parseTime } from "@easy-ds-bot/timeparser";
let unparsed = "1h5week";
let parsed = parseTime(unparsed);
console.log(parsed.ms); //3_027_600_000 ms
console.log(parsed.seconds); //3_027_600 sec
```

# Benchmarks
```
(cjs) parseTime("1s") x 311,011 ops/sec ±3.58% (79 runs sampled)
(cjs) parseTime("1s").ms x 302,129 ops/sec ±1.53% (83 runs sampled)
(cjs) parseTime("1s").years x 322,713 ops/sec ±1.16% (88 runs sampled)
(cjs) parseTime("1s")._deparsed x 177,589 ops/sec ±1.03% (80 runs sampled)
(cjs) parseTime("1y2mth3w4d5h6s7ms") x 112,658 ops/sec ±0.88% (93 runs sampled)
(cjs) parseTime("1y2mth3w4d5h6s7ms").ms x 113,132 ops/sec ±0.44% (94 runs sampled)
(cjs) parseTime("1y2mth3w4d5h6s7ms").years x 110,092 ops/sec ±0.65% (91 runs sampled)
(cjs) parseTime("1y2mth3w4d5h6s7ms")._deparsed x 84,229 ops/sec ±0.53% (95 runs sampled)

(esm) parseTime("1s") x 297,430 ops/sec ±3.12% (79 runs sampled)
(esm) parseTime("1s").ms x 319,093 ops/sec ±0.82% (85 runs sampled)
(esm) parseTime("1s").years x 327,453 ops/sec ±0.95% (89 runs sampled)
(esm) parseTime("1s")._deparsed x 180,199 ops/sec ±0.97% (94 runs sampled)
(esm) parseTime("1y2mth3w4d5h6s7ms") x 114,544 ops/sec ±0.50% (94 runs sampled)
(esm) parseTime("1y2mth3w4d5h6s7ms").ms x 112,932 ops/sec ±0.55% (94 runs sampled)
(esm) parseTime("1y2mth3w4d5h6s7ms").years x 109,972 ops/sec ±0.48% (89 runs sampled)
(esm) parseTime("1y2mth3w4d5h6s7ms")._deparsed x 85,896 ops/sec ±0.64% (94 runs sampled)
```