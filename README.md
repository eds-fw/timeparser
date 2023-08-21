<p align="center">
    <img src="https://avatars.githubusercontent.com/u/142582396?s=400&u=081f3176405a243f5090002723556c3e723089e3&v=4"/>
</p>

<b align="center">
    
    Simply string time converter (en/ru)
    
</b>
<hr>

# Requirements
- [NodeJS](https://nodejs.org/en) `v18` or newer
# Setup
1. Install `timeparser` via npm:
```bat
npm i @easy-ds-bot/timeparser
```
2. Use `timeparser`:
```js
// file.js, type: CommonJS
const { timeParse } = require("@easy-ds-bot/timeparser");
let unparsed = "1h5week";
let parsed = timeParse(unparsed);
console.log(parsed.ms); //3_027_600_000 ms
console.log(parsed.seconds); //3_027_600 sec
```
or...
```js
// file.js, type: ESM
import { timeParse } from "@easy-ds-bot/timeparser/esm";
let unparsed = "1h5week";
let parsed = timeParse(unparsed);
console.log(parsed.ms); //3_027_600_000 ms
console.log(parsed.seconds); //3_027_600 sec
```