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
(cjs) parseTime("1s") x 298,020 ops/sec ±3.32% (79 runs sampled)
(cjs) parseTime("1s").ms x 305,508 ops/sec ±1.69% (85 runs sampled)
(cjs) parseTime("1s").years x 318,852 ops/sec ±1.09% (88 runs sampled)
(cjs) parseTime("1s")._deparsed x 180,819 ops/sec ±0.80% (85 runs sampled)
(cjs) parseTime("1y2mth3w4d5h6s7ms") x 113,347 ops/sec ±0.68% (92 runs sampled)
(cjs) parseTime("1y2mth3w4d5h6s7ms").ms x 112,755 ops/sec ±0.94% (93 runs sampled)
(cjs) parseTime("1y2mth3w4d5h6s7ms").years x 109,757 ops/sec ±0.82% (94 runs sampled)
(cjs) parseTime("1y2mth3w4d5h6s7ms")._deparsed x 78,401 ops/sec ±2.21% (85 runs sampled)
*/