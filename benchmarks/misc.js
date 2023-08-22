const Benchmark = require("benchmark");
const suite = new Benchmark.Suite;
let test, test2, test_str = "abc1234567890xyz";

suite
.add('Strng#match with nums', function() {
    test = "123a456b789c".match(/([0-9])/g);
})
.add('String#replace', function() {
    test = test_str.replace("123", '');
})
.add('Number()', function() {
    test = Number("123");
})



.on('cycle', function(event) {
    console.log(String(event.target));
})
.on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run({ 'async': true });

/* RESULT:
Strng#match with nums x 3,648,857 ops/sec ±0.21% (94 runs sampled)
String#replace x 18,799,296 ops/sec ±0.26% (97 runs sampled)
Number() x 198,940,129 ops/sec ±0.21% (94 runs sampled)
*/