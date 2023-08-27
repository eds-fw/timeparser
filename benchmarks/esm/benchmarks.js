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
(esm) parseTime("1s") x 288,259 ops/sec ±3.17% (82 runs sampled)
(esm) parseTime("1s").ms x 326,667 ops/sec ±1.32% (89 runs sampled)
(esm) parseTime("1s").years x 326,308 ops/sec ±0.92% (85 runs sampled)
(esm) parseTime("1s")._deparsed x 183,746 ops/sec ±0.73% (91 runs sampled)
(esm) parseTime("1y2mth3w4d5h6s7ms") x 104,508 ops/sec ±0.70% (90 runs sampled)
(esm) parseTime("1y2mth3w4d5h6s7ms").ms x 103,322 ops/sec ±0.59% (91 runs sampled)
(esm) parseTime("1y2mth3w4d5h6s7ms").years x 101,831 ops/sec ±1.13% (88 runs sampled)
(esm) parseTime("1y2mth3w4d5h6s7ms")._deparsed x 73,778 ops/sec ±2.42% (82 runs sampled)
*/