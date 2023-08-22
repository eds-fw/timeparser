import { timeParser } from "../../dist/esm/index.js";
import Benchmark from "benchmark";
const suite = new Benchmark.Suite;
let test;

suite
.add('(esm) timeParser("1s")', function() {
    test = timeParser("1s");
})
.add('(esm) timeParser("1s").ms', function() {
    test = timeParser("1s").ms;
})
.add('(esm) timeParser("1s").years', function() {
    test = timeParser("1s").years;
})
.add('(esm) timeParser("1y2mth3w4d5h6s7ms")', function() {
    test = timeParser("1y2mth3w4d5h6s7ms");
})
.add('(esm) timeParser("1y2mth3w4d5h6s7ms").ms', function() {
    test = timeParser("1y2mth3w4d5h6s7ms").ms;
})
.add('(esm) timeParser("1y2mth3w4d5h6s7ms").years', function() {
    test = timeParser("1y2mth3w4d5h6s7ms").years;
})



.on('cycle', function(event) {
    console.log(String(event.target));
})
.on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run({ 'async': true });

/* RESULT:
(esm) timeParser("1s") x 370,134 ops/sec ±1.45% (91 runs sampled)
(esm) timeParser("1s").ms x 377,191 ops/sec ±0.60% (94 runs sampled)
(esm) timeParser("1s").years x 372,549 ops/sec ±0.58% (94 runs sampled)
(esm) timeParser("1y2mth3w4d5h6s7ms") x 122,565 ops/sec ±0.22% (95 runs sampled)
(esm) timeParser("1y2mth3w4d5h6s7ms").ms x 123,687 ops/sec ±0.53% (97 runs sampled)
(esm) timeParser("1y2mth3w4d5h6s7ms").years x 114,201 ops/sec ±1.89% (87 runs sampled)
*/