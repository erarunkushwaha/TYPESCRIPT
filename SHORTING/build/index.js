"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumberCollection_1 = require("./NumberCollection");
const CharacterCollection_1 = require("./CharacterCollection");
const LinkedList_1 = require("./LinkedList");
const numberCollection = new NumberCollection_1.NumberCollection([10, 23, -3, -6, 0, 2, 4]);
numberCollection.short();
console.log(numberCollection.data);
const characterCollection = new CharacterCollection_1.CharacterCollection("baXrc");
characterCollection.short();
console.log(characterCollection.data);
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(100);
linkedList.add(1200);
linkedList.add(-10);
linkedList.add(-20);
linkedList.short();
linkedList.print();
