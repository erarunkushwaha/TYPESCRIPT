import { NumberCollection } from "./NumberCollection";
import { CharacterCollection } from "./CharacterCollection";
import { LinkedList } from "./LinkedList";

const numberCollection = new NumberCollection([10, 23, -3, -6, 0, 2, 4]);
numberCollection.short();
console.log(numberCollection.data);

const characterCollection = new CharacterCollection("baXrc");
characterCollection.short();
console.log(characterCollection.data);

const linkedList = new LinkedList();
linkedList.add(100);
linkedList.add(1200);
linkedList.add(-10);
linkedList.add(-20);

linkedList.short();
linkedList.print();
