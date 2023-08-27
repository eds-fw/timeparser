const { parseTime } = require("../dist/cjs/index");
const Benchmark = require("benchmark");
const suite = new Benchmark.Suite;
let test;

suite
.add('(cjs) parseTime("1s")', function() {
    test = parseTime("1s");
})
.add('(cjs) parseTime("1s").ms', function() {
    test = parseTime("1s").ms;
})
.add('(cjs) parseTime("1s").years', function() {
    test = parseTime("1s").years;
})
.add('(cjs) parseTime("1s")._deparsed', function() {
    test = parseTime("1s")._deparsed;
})
.add('(cjs) parseTime("1y2mth3w4d5h6s7ms")', function() {
    test = parseTime("1y2mth3w4d5h6s7ms");
})
.add('(cjs) parseTime("1y2mth3w4d5h6s7ms").ms', function() {
    test = parseTime("1y2mth3w4d5h6s7ms").ms;
})
.add('(cjs) parseTime("1y2mth3w4d5h6s7ms").years', function() {
    test = parseTime("1y2mth3w4d5h6s7ms").years;
})
.add('(cjs) parseTime("1y2mth3w4d5h6s7ms")._deparsed', function() {
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
(cjs) parseTime("1s") x 311,011 ops/sec ±3.58% (79 runs sampled)
(cjs) parseTime("1s").ms x 302,129 ops/sec ±1.53% (83 runs sampled)
(cjs) parseTime("1s").years x 322,713 ops/sec ±1.16% (88 runs sampled)
(cjs) parseTime("1s")._deparsed x 177,589 ops/sec ±1.03% (80 runs sampled)
(cjs) parseTime("1y2mth3w4d5h6s7ms") x 112,658 ops/sec ±0.88% (93 runs sampled)
(cjs) parseTime("1y2mth3w4d5h6s7ms").ms x 113,132 ops/sec ±0.44% (94 runs sampled)
(cjs) parseTime("1y2mth3w4d5h6s7ms").years x 110,092 ops/sec ±0.65% (91 runs sampled)
(cjs) parseTime("1y2mth3w4d5h6s7ms")._deparsed x 84,229 ops/sec ±0.53% (95 runs sampled)
*/