import { parseTime } from "../../dist/esm/index.js";
import Benchmark from "benchmark";
const suite = new Benchmark.Suite;
let test;

suite
.add('(esm) parseTime("1s")', function() {
    test = parseTime("1s");
})
.add('(esm) parseTime("1s").ms', function() {
    test = parseTime("1s").ms;
})
.add('(esm) parseTime("1s").years', function() {
    test = parseTime("1s").years;
})
.add('(esm) parseTime("1s")._deparsed', function() {
    test = parseTime("1s")._deparsed;
})
.add('(esm) parseTime("1y2mth3w4d5h6s7ms")', function() {
    test = parseTime("1y2mth3w4d5h6s7ms");
})
.add('(esm) parseTime("1y2mth3w4d5h6s7ms").ms', function() {
    test = parseTime("1y2mth3w4d5h6s7ms").ms;
})
.add('(esm) parseTime("1y2mth3w4d5h6s7ms").years', function() {
    test = parseTime("1y2mth3w4d5h6s7ms").years;
})
.add('(esm) parseTime("1y2mth3w4d5h6s7ms")._deparsed', function() {
    test = parseTime("1y2mth3w4d5h6s7ms")._deparsed;
})



.on('cycle', function(event) {
    console.log(String(event.target));
})
.on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run({ 'async': true });

/* RESULT:
(esm) parseTime("1s") x 297,430 ops/sec ±3.12% (79 runs sampled)
(esm) parseTime("1s").ms x 319,093 ops/sec ±0.82% (85 runs sampled)
(esm) parseTime("1s").years x 327,453 ops/sec ±0.95% (89 runs sampled)
(esm) parseTime("1s")._deparsed x 180,199 ops/sec ±0.97% (94 runs sampled)
(esm) parseTime("1y2mth3w4d5h6s7ms") x 114,544 ops/sec ±0.50% (94 runs sampled)
(esm) parseTime("1y2mth3w4d5h6s7ms").ms x 112,932 ops/sec ±0.55% (94 runs sampled)
(esm) parseTime("1y2mth3w4d5h6s7ms").years x 109,972 ops/sec ±0.48% (89 runs sampled)
(esm) parseTime("1y2mth3w4d5h6s7ms")._deparsed x 85,896 ops/sec ±0.64% (94 runs sampled)
*/