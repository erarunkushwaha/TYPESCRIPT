import { BubbleShort } from "./BubbleShort";
import { NumberCollection } from "./NumberCollection";
import { CharacterCollection } from "./CharacterCollection";

const numberCollection = new NumberCollection([10, 23, -3, -6, 0, 2, 4]);
// const shorter = new BubbleShort(numberCollection);
// shorter.short();
// console.log(numberCollection.data);

const characterCollection = new CharacterCollection("baXrc");
const shorter = new BubbleShort(characterCollection);
shorter.short();
console.log(characterCollection.data);
