const { timeParse } = require("../index");
const Benchmark = require("benchmark");
const suite = new Benchmark.Suite;
let test;

suite
.add('(cjs) timeParse("1s").ms', function() {
    test = timeParse("1s").ms;
})
.add('(cjs) timeParse("1y2mth3w4d5h6s7ms")', function() {
    test = timeParse("1y2mth3w4d5h6s7ms");
})



.on('cycle', function(event) {
    console.log(String(event.target));
})
.on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run({ 'async': true });