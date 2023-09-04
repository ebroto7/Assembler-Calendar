"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Calendar_js_1 = require("./Views/Calendar.js");
console.log((0, Calendar_js_1.getToday)());
console.log((0, Calendar_js_1.getMonth)());
console.log((0, Calendar_js_1.getDay)());
console.log(Date.now());
console.log((0, Calendar_js_1.getDate)(Date.now()));
