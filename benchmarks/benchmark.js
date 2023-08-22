const { timeParse } = require("../dist/cjs/index");
const Benchmark = require("benchmark");
const suite = new Benchmark.Suite;
let test;

suite
.add('(cjs) timeParser("1s")', function() {
    test = timeParser("1s");
})
.add('(cjs) timeParser("1s").ms', function() {
    test = timeParser("1s").ms;
})
.add('(cjs) timeParser("1s").years', function() {
    test = timeParser("1s").years;
})
.add('(cjs) timeParser("1y2mth3w4d5h6s7ms")', function() {
    test = timeParser("1y2mth3w4d5h6s7ms");
})
.add('(cjs) timeParser("1y2mth3w4d5h6s7ms").ms', function() {
    test = timeParser("1y2mth3w4d5h6s7ms").ms;
})
.add('(cjs) timeParser("1y2mth3w4d5h6s7ms").years', function() {
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
(cjs) timeParser("1s") x 371,492 ops/sec ±0.97% (88 runs sampled)
(cjs) timeParser("1s").ms x 369,225 ops/sec ±0.86% (92 runs sampled)
(cjs) timeParser("1s").years x 372,001 ops/sec ±0.61% (95 runs sampled)
(cjs) timeParser("1y2mth3w4d5h6s7ms") x 116,745 ops/sec ±1.86% (89 runs sampled)
(cjs) timeParser("1y2mth3w4d5h6s7ms").ms x 102,950 ops/sec ±5.63% (79 runs sampled)
(cjs) timeParser("1y2mth3w4d5h6s7ms").years x 109,983 ops/sec ±2.64% (86 runs sampled)
*/