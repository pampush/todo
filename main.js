/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 104:
/***/ ((module) => {

/* 
(The MIT License)
Copyright (c) 2014-2021 Halász Ádám <adam@aimform.com>
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

//  Unique Hexatridecimal ID Generator
// ================================================

//  Dependencies
// ================================================
var pid = typeof process !== 'undefined' && process.pid ? process.pid.toString(36) : '' ;
var address = '';
if(false){ var i, mac, networkInterfaces; } 

//  Exports
// ================================================
module.exports = module.exports.default = function(prefix, suffix){ return (prefix ? prefix : '') + address + pid + now().toString(36) + (suffix ? suffix : ''); }
module.exports.process = function(prefix, suffix){ return (prefix ? prefix : '') + pid + now().toString(36) + (suffix ? suffix : ''); }
module.exports.time    = function(prefix, suffix){ return (prefix ? prefix : '') + now().toString(36) + (suffix ? suffix : ''); }

//  Helpers
// ================================================
function now(){
    var time = Date.now();
    var last = now.last || time;
    return now.last = time > last ? time : last + 1;
}


/***/ }),

/***/ 782:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/img/4c0ab963bd09f34cbe97.svg";

/***/ }),

/***/ 66:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/img/dc39675e86f0cb9a6bad.svg";

/***/ }),

/***/ 207:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/img/da5c42223be72e07b420.svg";

/***/ }),

/***/ 378:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/img/e4efcb06407fde1458a5.svg";

/***/ }),

/***/ 890:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/img/55f837d5c172b2569c19.svg";

/***/ }),

/***/ 898:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/img/3c70b53795b8b86b5bd4.svg";

/***/ }),

/***/ 471:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/img/e0f252dc13d4c3cee042.svg";

/***/ }),

/***/ 306:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/img/6d4b3837ff3773845b35.svg";

/***/ }),

/***/ 182:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/img/77e8b4f3ec2509539990.svg";

/***/ }),

/***/ 606:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./add.svg": 782,
	"./calendar.svg": 66,
	"./cancel.svg": 207,
	"./delete.svg": 378,
	"./description.svg": 890,
	"./edit.svg": 898,
	"./flag.svg": 471,
	"./left-arrow.svg": 306,
	"./right-arrow.svg": 182
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 606;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "./";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./node_modules/uniqid/index.js
var uniqid = __webpack_require__(104);
var uniqid_default = /*#__PURE__*/__webpack_require__.n(uniqid);
;// CONCATENATED MODULE: ./src/model.js


class todoList {
  constructor() {
    
  }
}

class User {
  constructor({id, name, email, currentProject = 'home'} = {}) {
    this.id = id
    this.name = name
    this.email = email
    this.currentProject = currentProject
  }
}

class Todo {
  constructor({id = uniqid_default().time(), title, description = '', dueDate, priority} = {}) {
    this.id = id
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
  }
}

class Project { 
  constructor({id = uniqid_default().time(), name = 'today', counter = 0} = {}) {
    this.id = id
    this.name = name
    this.todos = []
    this.counter = counter
  }

  addTodo(todo) {
    this.todos.push(new Todo(todo))
  }
  deleteTodo(id) {
    this.todos = this.todos.filter(item => item.id != id)
  }
}

// for demo
class NullUser {
  constructor() {
    this.id = -1
    this.title = 'Guest'
  }
}


;// CONCATENATED MODULE: ./src/utils.js
class Utils { 
    static createIcon({url, alt = '', className = ''}) {
        const myImg = new Image()
        myImg.src = url
        myImg.alt = alt
        //myImg.classList.add(className)
        return myImg
        }
        updateIcon() {

        }
    // import all images in Map ['src path', 'dist path']
    static importAll(r) {
        return new Map(r.keys().map((value) => [value, r(value)] ))
    }

}

const utils_images = Utils.importAll(__webpack_require__(606))

  
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/requiredArgs/index.js
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/toDate/index.js

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  requiredArgs(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/startOfDay/index.js


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/toInteger/index.js
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/addDays/index.js



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the days added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var amount = toInteger(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/addMonths/index.js



/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */

function addMonths(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var amount = toInteger(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 months, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  var dayOfMonth = date.getDate(); // The JS Date object supports date math by accepting out-of-bounds values for
  // month, day, etc. For example, new Date(2020, 1, 0) returns 31 Dec 2019 and
  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
  // want except that dates will wrap around the end of a month, meaning that
  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
  // we'll default to the end of the desired month by adding 1 to the desired
  // month and using a date of 0 to back up one day to the end of the desired
  // month.

  var endOfDesiredMonth = new Date(date.getTime());
  endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
  var daysInMonth = endOfDesiredMonth.getDate();

  if (dayOfMonth >= daysInMonth) {
    // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
  } else {
    // Otherwise, we now know that setting the original day-of-month value won't
    // cause an overflow, so set the desired day-of-month. Note that we can't
    // just set the date of `endOfDesiredMonth` because that object may have had
    // its time changed in the unusual case where where a DST transition was on
    // the last day of the month and its local time was in the hour skipped or
    // repeated next to a DST transition.  So we use `date` instead which is
    // guaranteed to still have the original time.
    date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
    return date;
  }
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/add/index.js






/**
 * @name add
 * @category Common Helpers
 * @summary Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @description
 * Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Duration} duration - the object with years, months, weeks, days, hours, minutes and seconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 *
 * | Key            | Description                        |
 * |----------------|------------------------------------|
 * | years          | Amount of years to be added        |
 * | months         | Amount of months to be added       |
 * | weeks          | Amount of weeks to be added       |
 * | days           | Amount of days to be added         |
 * | hours          | Amount of hours to be added        |
 * | minutes        | Amount of minutes to be added      |
 * | seconds        | Amount of seconds to be added      |
 *
 * All values default to 0
 *
 * @returns {Date} the new date with the seconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add the following duration to 1 September 2014, 10:19:50
 * const result = add(new Date(2014, 8, 1, 10, 19, 50), {
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,
 *   minutes: 9,
 *   seconds: 30,
 * })
 * //=> Thu Jun 15 2017 15:29:20
 */
function add(dirtyDate, duration) {
  requiredArgs(2, arguments);
  if (!duration || typeof duration !== 'object') return new Date(NaN);
  var years = 'years' in duration ? toInteger(duration.years) : 0;
  var months = 'months' in duration ? toInteger(duration.months) : 0;
  var weeks = 'weeks' in duration ? toInteger(duration.weeks) : 0;
  var days = 'days' in duration ? toInteger(duration.days) : 0;
  var hours = 'hours' in duration ? toInteger(duration.hours) : 0;
  var minutes = 'minutes' in duration ? toInteger(duration.minutes) : 0;
  var seconds = 'seconds' in duration ? toInteger(duration.seconds) : 0; // Add years and months

  var date = toDate(dirtyDate);
  var dateWithMonths = months || years ? addMonths(date, months + years * 12) : date; // Add weeks and days

  var dateWithDays = days || weeks ? addDays(dateWithMonths, days + weeks * 7) : dateWithMonths; // Add days, hours, minutes and seconds

  var minutesToAdd = minutes + hours * 60;
  var secondsToAdd = seconds + minutesToAdd * 60;
  var msToAdd = secondsToAdd * 1000;
  var finalDate = new Date(dateWithDays.getTime() + msToAdd);
  return finalDate;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/startOfWeek/index.js



/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = toDate(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/startOfMonth/index.js


/**
 * @name startOfMonth
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * const result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
  return date;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/getDate/index.js


/**
 * @name getDate
 * @category Day Helpers
 * @summary Get the day of the month of the given date.
 *
 * @description
 * Get the day of the month of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the day of month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the month is 29 February 2012?
 * const result = getDate(new Date(2012, 1, 29))
 * //=> 29
 */

function getDate(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var dayOfMonth = date.getDate();
  return dayOfMonth;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/compareAsc/index.js


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */

function compareAsc(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var dateLeft = toDate(dirtyDateLeft);
  var dateRight = toDate(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}
;// CONCATENATED MODULE: ./src/view.js



class View {
    constructor() {
    }
    /**
     * 
     * @param {*} param0 
     */
    renderTodo({id, title, description, duedate, priority, projectid}) {
      const li = document.createElement('li'),
          input = document.createElement('input'),
          titleElem = document.createElement('div'),
          controls = document.createElement('div'),
          date = document.createElement('div'),
          dateCtrlContainer = document.createElement('div'),
          editButton = document.createElement('div'),
          delButton = document.createElement('div'),
          descriptionNode = document.createElement('div')

      li.classList.add(`${this.containerClass}__item`)
      li.dataset.id = id
      li.dataset.projectid = projectid
      input.setAttribute('type', 'checkbox')
      input.setAttribute('name', '')
      input.setAttribute('id', 'checkbox')
      titleElem.classList.add(`${this.containerClass}__item-title`)
      controls.classList.add(`${this.containerClass}__item-controls`)
      date.classList.add(`${this.containerClass}__item-date`)
      date.classList.add(`priority-${priority}`)
      dateCtrlContainer.classList.add(`${this.containerClass}__item-container`)
      editButton.classList.add(`${this.containerClass}__item-container__edit`)
      delButton.classList.add(`${this.containerClass}__item-container__del`)
      descriptionNode.classList.add(`${this.containerClass}__item-description`)
      descriptionNode.style.display = 'none'
      descriptionNode.textContent = description

      editButton.append(Utils.createIcon({
        url: utils_images.get('./edit.svg'), 
        alt: 'edit'
      }))
      delButton.append(Utils.createIcon({
        url: utils_images.get('./delete.svg'), 
        alt: 'delete'
      }))

      controls.append(editButton, delButton)
      titleElem.textContent = title
      date.textContent = duedate
      dateCtrlContainer.append(date, controls)
      li.append(input, titleElem, dateCtrlContainer, descriptionNode)

      this.container.append(li)
    }

  updateTodo({id, title, description, duedate, priority, projectid}) {
    let todo = document.querySelector(`[data-id="${id}"]`)
    todo.querySelector('.todos-container__item-title').textContent = title
    todo.querySelector('.todos-container__item-date').textContent = duedate
    todo.querySelector('.todos-container__item-description').textContent = description
    const priorityName = todo.querySelector('.todos-container__item-date').classList.item[1]
    todo.querySelector('.todos-container__item-date').classList.remove(priorityName)
    todo.querySelector('.todos-container__item-date').classList.add(`priority-${priority}`)
  }
  /**
   * 
   * @param {*} param0 
   */
  renderProject({id, title, counter = 0}) {
    if(id == 'home') {
      this.renderHomeProject({id, title, counter})
      return
    }
    let li = document.createElement('li'),
        span = document.createElement('span'),
        delButton = document.createElement('div'),
        projectsCounter = document.createElement('div')

    li.classList.add(`${this.containerClass}__subitem`)
    li.dataset.id = id
    span.textContent = title
    delButton.classList.add(`${this.containerClass}__subitem__del`)
    projectsCounter.classList.add(`${this.containerClass}__subitem-counter`)
    projectsCounter.textContent = counter
    delButton.append(Utils.createIcon({
      url: utils_images.get('./delete.svg'), 
      alt: 'delete'
    }))

    li.append(projectsCounter, span, delButton)
    this.container.append(li)
  }

  projectInc({projectid}) {
    const projectNode = document.querySelector(`[data-id="${projectid}"] .menu-container__subitem-counter`)
    projectNode.textContent = (+projectNode.textContent) + 1 
  }
  projectDec({projectid}) {
    const projectNode = document.querySelector(`[data-id="${projectid}"] .menu-container__subitem-counter`)
    projectNode.textContent = (+projectNode.textContent) - 1 
  }
  /**
   * 
   * @param {*} param0 
   */
  renderHomeProject({id, title, counter = 0}) {
    let container = document.querySelector('.menu-container__home'),
        li = document.createElement('li'),
        span = document.createElement('span'),
        projectsCounter = document.createElement('div')

    li.classList.add(`${this.containerClass}__subitem`)
    li.dataset.id = id
    span.textContent = title
    projectsCounter.classList.add(`${this.containerClass}__subitem-counter`)
    projectsCounter.textContent = counter

    li.append(projectsCounter, span)
    container.append(li)
  }
  /**
   * 
   * @param {*} param0 
   */
  renderButton({button, classList}) {
    button.classList.add(`${this.containerClass}__${classList}`)
    this.buttonsContainer.append(button)
  }

  renderForm({form, classList}) {
    form.classList.add(`${classList}`)
    this.container.append(form)
  }

  delElem({id}) {
    document.querySelector(`[data-id="${id}"]`).remove()
  }

  findRoot(node) {  
    while (!node.dataset.id)
        node = node.parentNode;
    return node;
  }

  scrollDown() {
    document.documentElement.scrollTop = document.documentElement.scrollHeight - document.documentElement.clientHeight
  }
}


/* or args (container, containerClass) in render functions? */ 
class UlTodo extends View {
  constructor() {
    super()
    this.container = this.buttonsContainer = document.querySelector('.todos-container')
    this.containerClass = 'todos-container' 
  }

  descriptionToggle(id) {
    let desc = document.querySelector(`[data-id="${id}"] .${this.containerClass}__item-description`)
    if(desc.style != '') {
      desc.style.display = (desc.style.display == 'none') ? 'flex' : 'none'
    }
    else 
      desc.style.display = 'none'
  }
}


class Aside extends View {
  constructor() {
    super()
    this.container = this.buttonsContainer = document.querySelector('.menu-container')
    this.containerClass = 'menu-container'
  }
}


class MainContent extends View {
  constructor() {
    super()
    this.container = this.buttonsContainer = document.querySelector('.main-content')
    this.containerClass = 'main-content'
  }
}

class EditForm extends View {
  constructor(todoid) {
    super()
    this.buttons = new Buttons()  // ??
    this.calendar = null
    this.todo = document.querySelector(`[data-id="${todoid}"]`)
    this.todoid = todoid
    this.projectid = this.todo.dataset.projectid
    this.titleNode = document.createElement('input')
    this.duedate = new Date(this.todo.querySelector(`.todos-container__item-date`).textContent)
    this.description = this.todo.querySelector('.todos-container__item-description').textContent
    this.priority = this.todo.querySelector(`.todos-container__item-date`).classList.contains('priority-0') ? 0 : 
    this.todo.querySelector(`.todos-container__item-date`).classList.contains('priority-1') ? 1 :
    this.todo.querySelector(`.todos-container__item-date`).classList.contains('priority-2') ? 2 : false
    this.descriptionNode = null
    this.priorityNode = null
  }

  renderEdit() {
    this.editTodo = document.createElement('li')
    const nodesConfig = {
      div: ['controls', 'inputs'],
    }
    const nodes = {}
    for(let [key, item] of Object.entries(nodesConfig)) {
      for(let value of item)
        nodes[value] = document.createElement(`${key}`)
    }

    this.todo.style.display = 'none' 
    this.editTodo.classList.add(`todos-container__item`)
    this.editTodo.classList.add(`todos-container__item-edit`)
    this.editTodo.dataset.id = this.todoid
    

    this.titleNode.type = 'text'
    this.titleNode.placeholder = 'add title'
    this.titleNode.required = 'true'
    this.titleNode.value = this.todo.querySelector('.todos-container__item-title').textContent

    nodes.controls.classList.add(`todos-container__item-edit__controls`)
    nodes.inputs.classList.add(`todos-container__item-edit__inputs`)

    this.buttons.createButton({name:'date', alt:'date', url: './calendar.svg'})
    this.buttons.date.classList.add('todos-container__item-edit__inputs-date')
  
    this.buttons.createButton({name:'submit', alt:'submit', url: './add.svg'})
    this.buttons.submit.classList.add('todos-container__item-edit__inputs-add')
  
    this.buttons.createButton({name:'cancel', alt:'cancel', url: './cancel.svg'})
    this.buttons.cancel.classList.add('todos-container__item-edit__inputs-cancel')
  
    this.buttons.createButton({name:'priority', alt:'priority', url: './flag.svg'})
    this.buttons.priority.classList.add('todos-container__item-edit__inputs-priority')
  
    this.buttons.createButton({name:'description', alt:'description', url: './description.svg'})
    this.buttons.description.classList.add('todos-container__item-edit__inputs-description')

    nodes.controls.append(this.buttons.submit, this.buttons.cancel)
    nodes.inputs.append(this.titleNode, this.buttons.description, this.buttons.date, this.buttons.priority)
    this.editTodo.append(nodes.inputs, nodes.controls)
    this.todo.after(this.editTodo)
  }

  removeEdit() {
    this.editTodo.remove()
    this.todo.style.display = 'flex'
  }

  toggleDescription() {
    if(this.descriptionNode) {
      this.description = this.descriptionNode.value
      this.descriptionNode.remove()
      this.descriptionNode = null
      return
    }
    const inputs = document.querySelector(`.todos-container__item-edit__inputs`)
    this.descriptionNode = document.createElement('textarea')
    this.descriptionNode.classList.add('todos-container__item-edit__description')
    this.descriptionNode.value = this.description
    inputs.after(this.descriptionNode)
  }

  toggleDate() {
    if(this.calendar) {
      this.duedate = this.calendar.todoDate
      this.calendar.dateContainer.remove()
      this.calendar = null
      return
    }

    this.calendar = new Calendar(this.duedate)
    // this.dateNode = document.createElement('input')
    // this.dateNode.type = 'date'
    // this.dateNode.min = (new Date()).toISOString().slice(0, 10)
    this.calendar.create()
    this.calendar.render()
    //inputs.after(this.dateNode)
  }

  togglePriority() {
    if(this.priorityNode) {
      this.pririty = this.priorityNode.selectedIndex
      this.priorityNode.remove()
      this.priorityNode = null
      return
    }
    const inputs = document.querySelector(`.todos-container__item-edit__inputs`),
          options = ['low', 'medium', 'high']
    this.priorityNode = document.createElement('select')
    
    for(let item of options) {
      let option = document.createElement('option')
      option.textContent = item
      this.priorityNode.append(option)
    }
    this.priorityNode.selectedIndex = this.priority
    inputs.after(this.priorityNode)
  }

  fetchForm() {
    return {
      id: this.todoid,
      projectid: this.projectid,
      title: this.titleNode.value,
      description: (this.descriptionNode) ? this.descriptionNode.value : this.description,
      priority: (this.priorityNode) ? this.priorityNode.selectedIndex : this.priority,
      duedate: (this.calendar) ? this.calendar.todoDate.toISOString().slice(0, 10) : this.duedate.toISOString().slice(0, 10)
    }
  }
}

class Calendar {
  constructor(duedate) {
    if(duedate && duedate != '')
      this.todoDate = this.shiftingDate = duedate
    else
      this.todoDate = this.shiftingDate = new Date() 
    this.today = startOfDay(new Date())
    this.todoDate = startOfDay(this.todoDate)

    this.buttons = new Buttons()
    this.page = null
    this.position = document.querySelector('.todos-container__item-edit__inputs')
  }

  create() {
    const nodesConfig = {
      div: ['mon', 'tue', 'wed', 'thi', 'fri', 'sat', 'sun'],
    },
    nodes = {},
    dateControls = document.createElement('div'),
    controlsheaderContainer = document.createElement('div'),
    daylist = document.createElement('div')
    
    
    daylist.classList.add('date-picker__day-list')
    for(let [key, item] of Object.entries(nodesConfig)) {
      for(let value of item) {
        nodes[value] = document.createElement(`${key}`)
        nodes[value].classList.add('date-picker__day-list__cell')
        nodes[value].textContent = value
        daylist.append(nodes[value])
      }
    }
    
    this.dateContainer = document.createElement('div')
    this.dateContainer.classList.add('date-container')
    this.calendar = document.createElement('div')
    this.calendar.classList.add('date-picker')
    this.datelist = document.createElement('div')
    this.datelist.classList.add('date-picker__date-list')
    this.dateHeader = document.createElement('div')
    this.dateHeader.classList.add('date-container__header')

    dateControls.classList.add('date-container__controls')
    controlsheaderContainer.classList.add('date-container__header-container')

    this.buttons.createButton({name:'prev', alt:'previous', url: './left-arrow.svg'})
    this.buttons.prev.classList.add('date-container__controls-prev')
    this.buttons.createButton({name:'next', alt:'next', url: './right-arrow.svg'})
    this.buttons.next.classList.add('date-container__controls-next')
    
    controlsheaderContainer.append(this.dateHeader, dateControls)
    dateControls.append(this.buttons.prev, this.buttons.next)
    this.calendar.append(daylist, this.datelist)
    this.dateContainer.append(controlsheaderContainer, this.calendar)
    this.renderDatePicker()
    this.renderDateHeader()
  }

  render() {
    this.position.after(this.dateContainer)
  }

  monthShift(button = 'now') {
    if(button == 'prev')
      this.shiftingDate = add(this.shiftingDate, {months: -1})
    if(button == 'next')
      this.shiftingDate = add(this.shiftingDate, {months: 1})
  }

  renderDatePicker() {
    const numOfCalendarRows = 6,
          daysInWeek = 7,
          datelist = document.createElement('div')
          
    this.page = this.initTable()
    
    datelist.classList.add('date-picker__date-list') 
    for(let i = 0; i < numOfCalendarRows; i++) {
      const row = document.createElement('div')
      row.classList.add('date-picker__date-list__row')
      for(let j = 0; j < daysInWeek; j++) {
        const cell = document.createElement('div')
        cell.classList.add('date-picker__date-list__cell')
        cell.dataset.month = this.page[i][j].month
        cell.dataset.year = this.page[i][j].year
        cell.textContent = this.page[i][j].date
        if(!this.page[i][j].later)
          cell.classList.add('date-picker__date-list__cell-filler')
        if(this.page[i][j].tododate)
          cell.classList.add('date-picker__date-list__cell-todo')
        row.append(cell)
      }
      datelist.append(row)
    }
    this.datelist.replaceWith(datelist)
    this.datelist = datelist
  }

  renderDateHeader() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    this.dateHeader.textContent = `${monthNames[this.shiftingDate.getMonth()]}, ${this.shiftingDate.getFullYear()}`
  }

  initTable() {
    let date = startOfWeek(startOfMonth(this.shiftingDate), { weekStartsOn: 1 }),
    table = []
    for(let i = 0; i < 6; i++) {
      let row = []
      for(let j = 0; j < 7; j++) {
        row.push({
          date: getDate(date), 
          later: (compareAsc(date, this.today) >= 0) ? true : false,
          tododate: (compareAsc(date, this.todoDate) == 0) ? true : false,
          month: date.getMonth(), 
          year: date.getFullYear()
        })
        date = add(date, {days: 1})
      }
      table.push(row)
    }

    return table
  }

  selectDay(node) {
    node.classList.add('date-picker__date-list__cell-todo')
    this.todoDate = new Date(node.dataset.year, node.dataset.month, node.textContent)
    const timezoneoffset = - this.todoDate.getTimezoneOffset() / 60
    this.todoDate = add(this.todoDate, {hours: timezoneoffset})
  }
}

class Buttons {
  constructor() {
  }
  
  hide(button) {
    button.style.display = 'none'
  }
  
  view(button) {
    button.style.display = 'flex'
  }

  createButton({name, url, alt = '', textContent = '', type = 'button'}) {
    let div = document.createElement('div'),
        button = document.createElement('button') 
    button.type = type
    button.append(Utils.createIcon({
      url: utils_images.get(url), 
      alt: alt
    }))
    div.textContent = textContent
    button.append(div)
    this[name] = button
  }
}

// class Inputs {
//   hideInput(input) {
//     input.style.display = 'none'
//   }

//   viewInput(input) {
//     input.style.display = 'block'
//   }

//   createInput({name, type = 'text', placeholder = '', required = false}) {
//     let input = document.createElement('input')
//     input.type = type
//     input.placeholder = placeholder
//     input.required = required
//   }

//   createOptionInput({name, options = ['low', 'medium', 'high']}) {
//     let select = document.createElement('select')
//     for(let item of options) {
//       let option = document.createElement('option')
//       option.textContent = item
//       select.append(option)
//     }
//     this[name] = select
//   }
// }

class UlProjects extends View{
  constructor() {
    super()
    this.container = document.querySelector('.menu-container__projects')
    this.containerClass = 'menu-container'
  }
}

;// CONCATENATED MODULE: ./src/viewForm.js



class FormHandler {
  constructor(parent) {
    this.parent = document.querySelector(`.${parent}`) 
  }
  /**
   * 
   * @returns 
   */
  createTodoForm({options = ['low', 'medium', 'high']} = {}) {
    this.inputTitle = document.createElement('input')
    this.inputDescription = document.createElement('textarea')  
    this.inputPriority = document.createElement('select')
    this.inputDate = document.createElement('input') 
    
    const inputsContainer = document.createElement('div')
    const buttonsContainer = document.createElement('div')

    inputsContainer.classList.add(`${this.containerClass}__inputs-container`)
    buttonsContainer.classList.add(`${this.containerClass}__buttons-container`)
    
    this.addButton = this.initButton({
      url:utils_images.get('./add.svg'), 
      alt:'add todo', 
      textContent: '', 
      classList: 'todo-form__add-button',
      type: 'submit'
    })

    this.closeButton = this.initButton({
      url:utils_images.get('./cancel.svg'), 
      alt:'close form', 
      textContent: '', 
      classList: 'todo-form__close-button',
      type: 'button'
    })

    this.inputTitle.type = 'text'
    this.inputTitle.placeholder = 'add title'
    this.inputTitle.required = 'true'
    this.inputDescription.placeholder ='add description'
    this.inputDate.type = 'date'
    this.inputDate.min = (new Date()).toISOString().slice(0, 10)
      
    for(let item of options) {
      let option = document.createElement('option')
      option.textContent = item
      this.inputPriority.append(option)
    }

    buttonsContainer.append(this.addButton, this.closeButton)
    inputsContainer.append(this.inputDate, this.inputPriority)
    this.container.append(this.inputTitle, this.inputDescription, inputsContainer, buttonsContainer)   
    this.container.style.display = 'none'
    
    this.parent.append(this.container)
  }
  /**
   * 
   * @param {*} param0 
   * @returns 
   */

  /**
   * 
   * @param {*} param0 
   * @returns 
   */
  initButton({url, alt, textContent, classList, type = 'button'}) { 
    let closeButton = document.createElement('button'),
        textElem = document.createElement('div')
        textElem.textContent = textContent
    closeButton.classList.add(classList)
    closeButton.type = type
    closeButton.append(Utils.createIcon({
      url: url, 
      alt: alt
    }), textElem)

    return closeButton
  }
/**
 * TODO: TRY MIXIN TO INHERIT THIS METHOD FROM VIEW CLASS
 * @param {*} param0 
 */
    renderButton({button, classList}) {
      button.classList.add(`${this.containerClass}__${classList}`)
      this.buttonsContainer.append(button)
    }


    renderInputs(inputs) {
      for(let input of inputs)
        this.container.append(input)
    }
    /**
     * 
     * @returns 
     */
    fetchForm() {
      return { 
        title: this.inputTitle.value,
        duedate: this.inputDate.value,
        priority: this.inputPriority.selectedIndex,
        description: this.inputDescription.value
      }
    }

    fetchProjectForm() {
      return {
        title: this.projectInput.value
      }
    }
    /**
     * 
     */
    renderProjectForm() {
      let aside = document.querySelector('.menu-container'),
          buttonsContainer = document.createElement('div')

          this.projectInput = document.createElement('input');
          this.container.classList.add('project-form')
          buttonsContainer.classList.add('project-form__buttons-container')
          this.projectInput.type = 'text'
          this.projectInput.name = 'projecttitle'
          this.projectInput.id = 'projecttitle'
          this.projectInput.required = 'true'
          this.projectInput.placeholder = 'add project'
          this.projectInput.autocomplete = 'off'

      this.addProjectButton = this.initButton({
        url:utils_images.get('./add.svg'), 
        alt:'add project', 
        textContent: '', 
        classList: 'project-form__add-button',
        type: 'submit'
      })
      this.closeProjectButton = this.initButton({
        url:utils_images.get('./cancel.svg'), 
        alt:'close project', 
        textContent: '', 
        classList: 'project-form__close-button'
      })
      
      buttonsContainer.append(this.addProjectButton, this.closeProjectButton)
      this.container.append(this.projectInput, buttonsContainer)
      this.container.style.display = 'none'

      aside.append(this.container)
    }

    hide() {
      this.container.style.display = 'none'
      this.container.reset()
    }
    view() {
      this.container.style.display = 'flex'
    }
  
    displayToggle() {
      this.container.style.display = (this.container.style.display == 'none') ? 'flex' : 'none'
    }
  }

class TodoForm extends FormHandler {
  constructor(parent) {
    super(parent)
    this.container = document.createElement('form')
    this.container.classList.add('todo-form') 
    this.containerClass = 'todo-form'
    this.buttonsContainer = document.createElement('div')
    this.buttonsContainer.classList.add('todo-form__buttons-container')
    }
    
}

class ProjectForm extends FormHandler {
  constructor(parent) {
    super(parent)
    this.container = document.createElement('form')
    this.containerClass = 'project-form'
    this.buttonsContainer = document.createElement('div')
    this.buttonsContainer.classList.add('project-form__button-container')
  }
}

;// CONCATENATED MODULE: ./src/eventEmitter.js
const eventEmitter = (function event() {
    let events = {};
    let options = {}
    let on = function(evt, handler, {once = false} = {}) {
      (events[evt] || (events[evt] = [])).push(handler);
      (options[evt] || (options[evt] = [])).push(once);
    }
    
    let emit = function(evt, ...arg) {
      for(let i = 0; i < events[evt].length; i++) {
       events[evt][i](...arg)
        if(options[evt][i]) {
          events[evt].splice(i, 1)
          options[evt].splice(i, 1)
          i--
        }
      }
    }
  
    let removeLastEventHandler = function(evt) {
      events[evt].pop(); // delete event[last]
    }
    
    let getEvents = function() {
      return {...events};
    }
  
    return {
      on,
      emit,
      removeLastEventHandler,
      getEvents
    }
  })();

/* harmony default export */ const src_eventEmitter = (eventEmitter);
;// CONCATENATED MODULE: ./src/fbProcessor.js
class Db {
  constructor() {
      const firebaseConfig = {
        apiKey: "AIzaSyB013UfOPZOk65_dKDMnd0F5coaxMvHBiE",
        authDomain: "todo-d2939.firebaseapp.com",
        projectId: "todo-d2939",
        storageBucket: "todo-d2939.appspot.com",
        messagingSenderId: "440343298477",
        appId: "1:440343298477:web:d2df307c41c0378c8fe124",
        measurementId: "G-6KGMEFTVJL"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig)
      this.firestore = firebase.firestore()

      //this.todoRef = this.firestore.collection('/users/3nrCmkaHwUvK1zpOLmKG/projects/km95yzvx/todos/')
      this.todoRef = this.firestore.collection('/users/3nrCmkaHwUvK1zpOLmKG/projects/home/todos/')
      this.projectRef = this.firestore.doc('/users/3nrCmkaHwUvK1zpOLmKG/projects/home/')
      
      this.startAfter = {}
    }

    addTodo({id, projectid, title, description = '', priority = '0', duedate=(new Date()).toISOString().slice(0, 10)}) { 
      this.firestore.doc(`/users/3nrCmkaHwUvK1zpOLmKG/projects/${projectid}/todos/${id}`)
      .set({
        title: title,
        description: description,
        priority: priority,
        duedate: duedate,
        timestamp: firebase.firestore.Timestamp.now(),
        projectid: projectid
      })
      this.firestore.doc(`/users/3nrCmkaHwUvK1zpOLmKG/projects/${projectid}/`).update({
        counter: firebase.firestore.FieldValue.increment(1)
      })
    }

    async updateTodo({id, projectid, title, description = '', priority = '0', duedate=(new Date()).toISOString().slice(0, 10)}) {
      try {
      const snap = await this.firestore.doc(`/users/3nrCmkaHwUvK1zpOLmKG/projects/${projectid}/todos/${id}`)
      .update({
          title: title,
          description: description,
          priority: priority,
          duedate: duedate
        })
      console.log("Document successfully updated!");
      }
      catch(error) {
        console.error("Error updating document: ", error);
      }
    }

    async queryToday1(fn) {
      const promises = []
      const projectsRef = this.firestore.collection('/users/3nrCmkaHwUvK1zpOLmKG/projects/')
      const docsSnapshot = await projectsRef.get()
      docsSnapshot.forEach((docs) => {
        const snapshot = this.firestore.collection(`/users/3nrCmkaHwUvK1zpOLmKG/projects/${docs.id}/todos/`)
        .where('duedate', '==', `${(new Date()).toISOString().slice(0,10)}`)
        .orderBy('priority', 'desc')
        //.limit(3)
        .get()
        this.startAfter[docs.id] = snapshot
        promises.push(snapshot) 
      })

      Promise.all(promises).then((snapshots) => {
        for(const snap of snapshots)
          if(snap.empty) 
            console.log(`No such documents`);
          else
            snap.forEach(doc => {
              fn({id: doc.id, ...doc.data()})
            })
      })  
    }

    async getProjects(fn) {
      const snapshot = await this.firestore.collection('/users/3nrCmkaHwUvK1zpOLmKG/projects/')
      .get()
      snapshot.forEach(doc => {
        fn({id: doc.id, ...doc.data()})
      })
    }

    async queryToday2(fn) {
      const promises = []
      const projectsRef = this.firestore.collection('/users/3nrCmkaHwUvK1zpOLmKG/projects/')
      const docsSnapshot = await projectsRef.get()
      docsSnapshot.forEach(async (docs) => {
        const snapshot = this.firestore.collection(`/users/3nrCmkaHwUvK1zpOLmKG/projects/${docs.id}/todos/`)
        .where('duedate', '==', `${(new Date()).toISOString().slice(0,10)}`)
        .orderBy('priority')
        .startAfter(this.startAfter[docs.id])
        .limit(2)
        .get()
        this.startAfter[docs.id] = snapshot
        promises.push(snapshot) 
      })
      Promise.all(promises).then((snapshot) => {
        if(snapshot.empty) 
          console.log('No such documents!');
        else
          snapshot.forEach(doc => {
            fn({id: doc.id, ...doc.data()})
          })
      }) 
    }  

    async queryProject(fn, projectid) {
      const projectRef = this.firestore.collection(`/users/3nrCmkaHwUvK1zpOLmKG/projects/${projectid}/todos`)
      const snapshot = await projectRef.get()
      if(snapshot.empty) 
          console.log('No such documents!');
      else
        snapshot.forEach(doc => {
          fn({id: doc.id, ...doc.data()})
        })
    }

    sortByPriority(data) {
      
    }

    addProject({id, title}) {
      this.firestore.collection(`/users/3nrCmkaHwUvK1zpOLmKG/projects/`)
      .doc(`${id}`).set({
        title: title,
        counter: 0
      })
    }

    deleteTodo({id, projectid}) {
      this.firestore.doc(`/users/3nrCmkaHwUvK1zpOLmKG/projects/${projectid}/todos/${id}`).delete()
      this.firestore.doc(`/users/3nrCmkaHwUvK1zpOLmKG/projects/${projectid}/`).update({
        counter: firebase.firestore.FieldValue.increment(-1)})
    }

    async deleteProject(id) {
      /* bad approach for large subcollection */
      const promises = []
      const projectRef = this.firestore.collection(`/users/3nrCmkaHwUvK1zpOLmKG/projects/${id}/todos/`)
      const snapshot = await projectRef.get()
      snapshot.forEach(doc => {
        promises.push(this.firestore.doc(`/users/3nrCmkaHwUvK1zpOLmKG/projects/${id}/todos/${doc.id}`).delete())
      })
      
      Promise.all(promises).then(async(snapshot) => {
        if(snapshot.empty) 
          console.log('No such documents!');
        else
          await this.firestore.doc(`/users/3nrCmkaHwUvK1zpOLmKG/projects/${id}`).delete()
      }) 
      // const path = this.firestore.collection(`/users/3nrCmkaHwUvK1zpOLmKG/projects/${id}/todos/`)
      // let deleteFn = firebase.functions().httpsCallable('recursiveDelete')
      // deleteFn({ path: path })
      //     .then(function(result) {
      //         logMessage('Delete success: ' + JSON.stringify(result))
      //     })
      //     .catch(function(err) {
      //         logMessage('Delete failed, see console,')
      //         console.warn(err)
      //     });
  }
}

/* harmony default export */ const fbProcessor = (Db);
;// CONCATENATED MODULE: ./src/index.js











// class App { 
//   init() {
//     new EventController
//      init
//   }
// }

class EventController {
    constructor(eventEmitter, view) {
        this.evt = eventEmitter 
        this.view = view
        this.project = new Project() 
        this.user = new User() 
        //this.todo = new Todo()
        this.db = new fbProcessor()
        this.ultodo = new UlTodo()
        this.aside = new Aside()
        this.buttons = new Buttons()
        this.ulproject = new UlProjects()
        this.maincontent = new MainContent()
        this.todoform = new TodoForm('main-content')
        this.projectform = new ProjectForm('menu-container')
        
        this.renderTodo = (data) => this.ultodo.renderTodo(data)
        this.renderProject = (data) => this.ulproject.renderProject(data)
        this.addTodoToModel = (data) => this.project.addTodo(data)
        this.dbAddTodo = (data) => this.db.addTodo(data) 
        this.dbAddProject = (data) => this.db.addProject(data)
      }

    init() {
      document.addEventListener('DOMContentLoaded', (e) => {
        this.initToday()
        this.buttonsInit()
        this.todoform.createTodoForm()
        this.projectform.renderProjectForm()
        this.formListenersInit()
      })

      this.db.getProjects((data) => this.renderProject(data))
      this.addToDoForm()
      this.addProjectForm()
      this.addTodo()
      this.addProject()
      this.delTodo()
      this.editInitListeners()
      //
      this.ultodo.container.addEventListener('click', e => {
        const id = this.view.findRoot(e.target).dataset.id,
        projectid = this.view.findRoot(e.target).dataset.projectid
        if(e.target.classList.contains('todos-container__item-title'))
          this.ultodo.descriptionToggle(id)
        if(e.target.classList.contains('todos-container__item-container__edit')) {
          const edit = new EditForm(id)
          edit.renderEdit()
          this.evt.emit('editInitListeners', edit)
        } else
        if(e.target.classList.contains('todos-container__item-container__del')) {
          const data = {id, projectid} 
          this.evt.emit('delTodo', data);
          }  
        })

      this.aside.container.addEventListener('click', e => {
        // const a = [
        //   {'menu-container__subitem-today': () => {
        //     this.ultodo.container.innerHTML = ''
        //     this.user.currentProject = 'home'
        //     this.initToday()
        //   }},
        // ]
        if(e.target.classList.contains('menu-container__subitem-today')) {
          this.ultodo.container.innerHTML = ''
          this.user.currentProject = 'home'
          this.initToday()
        } else
        if(e.target.classList.contains('menu-container__subitem')) {
          const targetid = this.view.findRoot(e.target).dataset.id  
          this.ultodo.container.innerHTML = ''
          this.user.currentProject = targetid
          this.db.queryProject(this.renderTodo, targetid);
        } else
        if(e.target.classList.contains('menu-container__subitem__del')) {
          const projectid = this.view.findRoot(e.target).dataset.id
          this.db.deleteProject(projectid)
          this.view.delElem({id: projectid})
        }
      })
    }

    buttonsInit() {
      this.buttons.createButton({name: 'addTodoFormButton', 
          url: './add.svg', 
          alt: 'view todo form', 
          textContent: 'Add task',
        })
        this.maincontent.renderButton({button: this.buttons.addTodoFormButton, classList: 'add-button'})
        this.buttons.addTodoFormButton.addEventListener('click', () => {
          this.evt.emit('addTodoForm', '')
        })

        this.buttons.createButton({name: 'addProjectFormButton', 
          url: './add.svg', 
          alt: 'view project form', 
          textContent: 'Add project'
        })
        this.aside.renderButton({button: this.buttons.addProjectFormButton, classList: 'add-button'})
        this.buttons.addProjectFormButton.addEventListener('click', () => 
        {
          this.evt.emit('addProjectForm', '')
        })
    }

    addToDoForm() {
      this.evt.on('addTodoForm', () => this.buttons.hide(this.buttons.addTodoFormButton))
      this.evt.on('addTodoForm', () => this.todoform.view())
      this.evt.on('addTodoForm', () => this.view.scrollDown())
    }

    addProjectForm() {
      this.evt.on('addProjectForm', () => this.buttons.hide(this.buttons.addProjectFormButton))
      this.evt.on('addProjectForm', () => this.projectform.view())
    }

    addTodo() {
      this.evt.on('addTodo', this.addTodoToModel)
      this.evt.on('addTodo', this.renderTodo)
      this.evt.on('addTodo',  (data) => this.dbAddTodo(data))
      this.evt.on('addTodo', () => this.ultodo.scrollDown())
      this.evt.on('addTodo', this.view.projectInc)
    }

    addProject() {
      this.evt.on('addProject', this.renderProject)
      this.evt.on('addProject', (data) => this.dbAddProject(data))
      this.evt.on('addProject', (data) => this.user.currentProject = data.id)
    }

    initToday() {
      this.db.queryToday1((data) => this.renderTodo(data))
    }

    delTodo() {
      this.evt.on('delTodo', (data) => this.view.delElem(data))
      this.evt.on('delTodo', (data) => this.view.projectDec(data)) 
      this.evt.on('delTodo', (data) => this.db.deleteTodo(data)) 
    }

    formListenersInit() {
      this.todoform.container.addEventListener('submit', (e) => {
        e.preventDefault()
        let data = this.todoform.fetchForm()
        data.id = uniqid_default().time()
        data.projectid = this.user.currentProject
        this.evt.on('addTodo', () => this.todoform.hide())
        this.evt.on('addTodo', () => this.buttons.view(this.buttons.addTodoFormButton))
        this.evt.emit('addTodo', data);
      })
      this.todoform.closeButton.addEventListener('click', () => {
        this.todoform.displayToggle()
        this.buttons.view(this.buttons.addTodoFormButton)
      })

      this.projectform.container.addEventListener('submit', (e) => {
        e.preventDefault()
        this.buttons.view(this.buttons.addProjectFormButton)
        let data = this.projectform.fetchProjectForm()
        data.id = uniqid_default().time()
        this.evt.emit('addProject', data)
        this.projectform.hide()
        })
      this.projectform.closeProjectButton.addEventListener('click', () => {
        this.projectform.hide()
        this.buttons.view(this.buttons.addProjectFormButton)
      })
    }

    editInitListeners() {
      this.evt.on('editInitListeners', (edit) => { 
        edit.buttons.cancel.addEventListener('click', e => {
          edit.removeEdit()
        })

        edit.buttons.submit.addEventListener('click', e => {
          const data = edit.fetchForm()
          this.db.updateTodo(data)
          this.view.updateTodo(data)
          edit.removeEdit()
        })

        edit.buttons.description.addEventListener('click', e => {
          edit.toggleDescription()
        })

        edit.buttons.priority.addEventListener('click', e => {
          edit.togglePriority()
        })

        edit.buttons.date.addEventListener('click', e => {
          edit.toggleDate()
          if(edit.calendar) { 
            edit.calendar.buttons.prev.addEventListener('click', e => {
              edit.calendar.monthShift('prev')
              edit.calendar.renderDatePicker('prev')
              edit.calendar.renderDateHeader()
              edit.calendar.datelist.addEventListener('click', e => {
                if(e.target.classList.contains('date-picker__date-list__cell'))
                  edit.calendar.selectDay(e.target)
                  edit.toggleDate()
              })
            })
            
            edit.calendar.buttons.next.addEventListener('click', e => {
              edit.calendar.monthShift('next')
              edit.calendar.renderDatePicker('next')
              edit.calendar.renderDateHeader()
              edit.calendar.datelist.addEventListener('click', e => {
                if(e.target.classList.contains('date-picker__date-list__cell'))
                  edit.calendar.selectDay(e.target)
                  edit.toggleDate()
              })
            })
            edit.calendar.datelist.addEventListener('click', e => {
              if(e.target.classList.contains('date-picker__date-list__cell'))
                edit.calendar.selectDay(e.target)
                edit.toggleDate()
            })
          }
        })
      })
    }
}

// class ButtonsController extends Controller{

// }
class ModelController {

}

const app = new EventController(src_eventEmitter, new View())
app.init()
})();

/******/ })()
;