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
import parseTime from "@easy-ds-bot/timeparser";
let unparsed = "1h5week";
let parsed = parseTime(unparsed);
console.log(parsed.ms); //3_027_600_000 ms
console.log(parsed.seconds); //3_027_600 sec
```

# Benchmarks
```
(cjs) parseTime("1s") x 298,020 ops/sec ±3.32% (79 runs sampled)
(cjs) parseTime("1s").ms x 305,508 ops/sec ±1.69% (85 runs sampled)
(cjs) parseTime("1s").years x 318,852 ops/sec ±1.09% (88 runs sampled)
(cjs) parseTime("1s")._deparsed x 180,819 ops/sec ±0.80% (85 runs sampled)
(cjs) parseTime("1y2mth3w4d5h6s7ms") x 113,347 ops/sec ±0.68% (92 runs sampled)
(cjs) parseTime("1y2mth3w4d5h6s7ms").ms x 112,755 ops/sec ±0.94% (93 runs sampled)
(cjs) parseTime("1y2mth3w4d5h6s7ms").years x 109,757 ops/sec ±0.82% (94 runs sampled)
(cjs) parseTime("1y2mth3w4d5h6s7ms")._deparsed x 78,401 ops/sec ±2.21% (85 runs sampled)

(esm) parseTime("1s") x 288,259 ops/sec ±3.17% (82 runs sampled)
(esm) parseTime("1s").ms x 326,667 ops/sec ±1.32% (89 runs sampled)
(esm) parseTime("1s").years x 326,308 ops/sec ±0.92% (85 runs sampled)
(esm) parseTime("1s")._deparsed x 183,746 ops/sec ±0.73% (91 runs sampled)
(esm) parseTime("1y2mth3w4d5h6s7ms") x 104,508 ops/sec ±0.70% (90 runs sampled)
(esm) parseTime("1y2mth3w4d5h6s7ms").ms x 103,322 ops/sec ±0.59% (91 runs sampled)
(esm) parseTime("1y2mth3w4d5h6s7ms").years x 101,831 ops/sec ±1.13% (88 runs sampled)
(esm) parseTime("1y2mth3w4d5h6s7ms")._deparsed x 73,778 ops/sec ±2.42% (82 runs sampled)
```

# [Source (git)](https://github.com/easy-ds-bot/timeparser)
# [Issues (git)](https://github.com/easy-ds-bot/timeparser/issues)