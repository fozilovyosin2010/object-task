//OBJECT TASK

//TASK#1

// function getVoteCount(obj) {
//   return Object.values(obj).reduce((a, b) => {
//     return a - b;
//   });
// }
// console.log(
//   getVoteCount({
//     upvotes: 132,
//     downvotes: 132,
//   })
// );

//TASK#2

// let volumeOfBox = function (obj) {
//   return obj.volume();
// };
// console.log(
//   volumeOfBox({
//     width: 2,
//     length: 5,
//     height: 1,
//     volume: function () {
//       return this.width * this.height * this.length;
//     },
//   })
// );

//TASK#3

// let FiftyThirtyTwenty = (num) => {
//   let costs = {
//     Needs: () => {
//       return (num * 50) / 100;
//     },
//     Wants: () => {
//       return (num * 30) / 100;
//     },
//     Savings: () => {
//       return (num * 20) / 100;
//     },
//     total: function () {
//       return `Needs: ${this.Needs()}, Wants: ${this.Wants()}, Savings: ${this.Savings()}`;
//     },
//   };
//   return costs.total();
// };
// console.log(FiftyThirtyTwenty(10000));
// console.log(FiftyThirtyTwenty(50000));
// console.log(FiftyThirtyTwenty(13450));

//TASK#4

// function relationToLuke(relation) {
//   let relation2 = {
//     Darth_Vader: "father",
//     leia: "sister",
//     han: "brother in law",
//     R2D2: "droid",
//     check: function () {
//       let name = Object.keys(relation2);
//       for (let i = 0; i < name.length; i++) {
//         if (name[i] == relation) {
//           return `Luke, I am your ${this[name[i]]}`;
//         }
//       }
//     },
//   };
//   return relation2.check();
// }
// console.log(relationToLuke("Darth_Vader"));

//TASK#5

// let cityFacts = (cities) => {
//   let start = {
//     ...cities,
//     say: function () {
//       return `${this.name} has a population of ${this.population} and situated in ${this.continent}`;
//     },
//   };
//   return start.say();
// };
// console.log(
//   cityFacts({ name: "Paris", population: "2,140,526", continent: "Europe" })
// );
// console.log(
//   cityFacts({ name: "Tokiyo", population: "13,929,286", continent: "Asia" })
// );

//TASK#6

// let totalAmountAdjectives = function (total) {
//   let total2 = Object.keys(total).join("").length;
//   return total2;
// };
// console.log(
//   totalAmountAdjectives({
//     a: "idiot",
//     b: "idiot",
//     d: "dirtbag",
//     c: "idiot",
//   })
// );

//TASK#7

// function NsideShape(num) {
//   let obj2 = {
//     1: "circle",
//     2: "semi-circle",
//     3: "triangle",
//     4: "square",
//     5: "pentagon",
//     6: "hexagon",
//     7: "heptagon",
//     8: "octagon",
//     9: "nonagon",
//     10: "decagon",
//     shape: function () {
//       let find = Object.keys(obj2);
//       for (let i = 0; i < find.length; i++) {
//         if (find[i] == num) {
//           return obj2[find[i]];
//         }
//       }
//       return find;
//     },
//   };
//   return obj2.shape();
// }
// console.log(NsideShape(4));

//TASK#8

// let isInRange = function (num, obj) {
//   return Object.values(obj)[0] < num && num < Object.values(obj)[1];
// };
// console.log(isInRange(4, { min: 0, max: 5 }));

//TASK#9

// let concatWords = (word) => {
//   let obj2 = Object.values(word);
//   obj2.splice(obj2.length, 0, Object.values(word)[1]);

//   return obj2;
// };
// console.log(concatWords({ 1: "Mom", 2: "please", 3: "help" }));

//TASK#10

// function hasKey(obj, value) {
//   return Object.keys(obj).includes(value);
// }
// console.log(hasKey({ a: 44, b: 45, c: 46 }, "c"));

//TASK#11

// let inkLevels = function (obj) {
//   return Object.values(obj).reduce((a, b) => {
//     return Math.min(a, b);
//   });
// };
// console.log(inkLevels({ cyan: 432, magenta: 543, yellow: 777 }));
// console.log(inkLevels({ cyan: "23", magenta: "12", yellow: "10" }));

//TASK#12

// let isEmpty = (obj) => {
//   return Object.values(obj).length === 0;
// };
// console.log(isEmpty({ a: 1 }));

//TASK#13

// function calculateDifference(obj, limit) {
//   return (
//     Object.values(obj).reduce((a, b) => {
//       return a + b;
//     }) - limit
//   );
// }
// console.log(calculateDifference({ skate: 10, painting: 20 }, 19));

//TASK#14

// let maximumScore = function (obj1, obj2, obj3, obj4, obj5, obj6, obj7) {
//   let all = { ...obj1, ...obj2, ...obj3, ...obj4, ...obj5, ...obj6 };
//   let key = Object.values(all);
//   let a = [];
//   for (let i = 0; i < key.length; i++) {
//     a.push(Object.values(key[i])[1]);
//   }
//   return a.reduce((a, b) => {
//     return a + b;
//   });
// };
// console.log(
//   maximumScore([
//     { tile: "N", score: 1 },
//     { tile: "K", score: 5 },
//     { tile: "Z", score: 10 },
//     { tile: "X", score: 8 },
//     { tile: "D", score: 2 },
//     { tile: "A", score: 1 },
//     { tile: "E", score: 1 },
//   ])
// );
// console.log(
//   maximumScore([
//     { tile: "B", score: 2 },
//     { tile: "V", score: 4 },
//     { tile: "F", score: 4 },
//     { tile: "U", score: 1 },
//     { tile: "D", score: 2 },
//     { tile: "O", score: 1 },
//     { tile: "U", score: 1 },
//   ])
// );

//TASK#15

// let addName = (obj, name, value) => {
//   (obj[name] = value);
// };
// console.log({ piano: 500 }, "Brutus", 400);

//TASK#16

// function relatives(generation, gender) {
//   let obj2 = {
//     "-3": { m: "great_grandfather", f: "great_grandmother" },
//     "-2": { m: "grandfather", f: "grandmother" },
//     "-1": { m: "father", f: "mother" },
//     0: { m: "me!", f: "me!" },
//     1: { m: "son", f: "daughter" },
//     2: { m: "grandson", f: "granddaughter" },
//     3: { m: "great_grandson", f: "great_granddaughter" },
//     say: function () {
//       let key = Object.keys(obj2);
//       for (let i = 0; i < key.length; i++) {
//         if (key[i] == generation.toString()) {
//           return obj2[key[i]][gender];
//         }
//       }
//       return key;
//     },
//   };
//   return obj2.say();
// }
// console.log(relatives(-2, "m"));

//TASK#17

// let toArr = (obj) => {
//   return Object.entries(obj);
// };
// console.log(toArr({ a: 1, b: 2 }));

//TASK#18

// let keysAndValues = function (obj) {
//   let key = [];
//   key.splice(0, 0, Object.keys(obj).sort());
//   key.splice(1, 0, Object.values(obj).sort());
//   return key;
// };
// console.log(keysAndValues({ a: 1, c: 3, b: 2 }));

//TASK#19

// function getBudjets(obj) {
//   let obj2 = {
//     ...obj,
//     find: function () {
//       let a = [];
//       let val = Object.values(obj);
//       for (let i = 0; i < val.length; i++) {
//         a.push(Object.values(val[i])[2]);
//       }
//       return a.reduce((a, b) => {
//         return a + b;
//       });
//     },
//   };
//   return obj2.find();
// }
// console.log(
//   getBudjets([
//     { name: "John", age: 21, budget: 29000 },
//     { name: "Steve", age: 32, budget: 32000 },
//     { name: "Martin", age: 16, budget: 1600 },
//   ])
// );

//TASK#20

// let freeShipping = function (buy) {
//   return (
//     Object.values(buy).reduce((a, b) => {
//       return a + b;
//     }) > 50
//   );
// };
// console.log(freeShipping({ "Flatscreen TV": 399.99 }));

//TASK#21

// let mapping = (a) => {
//   let obj = {};
//   for (let i = 0; i < a.length; i++) {
//     obj[a[i]] = a[i].toUpperCase();
//   }
//   return obj;
// };
// console.log(mapping(["a", "v", "y", "z"]));

//TASK#22

// function afterNyears(obj, year) {
//   let obj_ = Object.keys(obj);
//   let val = Object.values(obj);
//   let obj2 = {};
//   for (let i = 0; i < obj_.length; i++) {
//     obj2[obj_[i]] = val[i] + year;
//   }
//   return obj2;
// }
// console.log(
//   afterNyears({ Baby: 2, Child: 8, Teenager: 15, Adult: 25, Elderly: 71 }, 19)
// );
// console.log(afterNyears({ Genie: 1000, Joe: 40 }, 5));

//TASK#23

// let removeEntry = (obj, item) => {
//   let obj2 = {
//     ...obj,
//     find: function () {
//       let a = {};
//       let key = Object.keys(obj);
//       let val = Object.values(obj);
//       for (let i = 0; i < key.length; i++) {
//         if (key[i] !== item) {
//           a[key[i]] = val[i];
//         }
//       }
//       return a;
//     },
//   };
//   return obj2.find();
// };
// console.log(removeEntry({ mirror: 500, painting: 1 }, "mirror"));
// console.log(removeEntry({ piano: 300, tv: 100, skate: 50 }, "skate"));

//TASK#24

// let mostExpensiveItem = function (item) {
//   let val = Object.values(item).reduce((a, b) => {
//     return Math.max(a, b);
//   });
//   let index = Object.values(item).indexOf(val);
//   return Object.keys(item)[index];
// };
// console.log(mostExpensiveItem({ stereo: 50, tv: 30, skate: 20 }));
// console.log(mostExpensiveItem({ tv: 30, skate: 20 }));

function invert(obj) {
  let obj2 = {};
  let key = Object.keys(obj);
  let val = Object.values(obj);
  for (let i = 0; i < val.length; i++) {
    obj2[val[i]] = key[i];
  }
  return obj2;
}
console.log(invert({ z: "q", w: "f" }));
console.log(invert({ zebra: "koala", horse: "camel" }));
