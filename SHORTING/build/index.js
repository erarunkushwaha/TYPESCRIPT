"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BubbleShort_1 = require("./BubbleShort");
const NumberCollection_1 = require("./NumberCollection");
const CharacterCollection_1 = require("./CharacterCollection");
const numberCollection = new NumberCollection_1.NumberCollection([
  10, 23, -3, -6, 0, 2, 4
]);
// const shorter = new BubbleShort(numberCollection);
// shorter.short();
// console.log(numberCollection.data);
const characterCollection = new CharacterCollection_1.CharacterCollection(
  "abcxyzrafe"
);
const shorter = new BubbleShort_1.BubbleShort(characterCollection);
shorter.short();
console.log(characterCollection.data);
