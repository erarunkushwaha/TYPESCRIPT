"use strict";
class BubleShort {
    constructor(collection) {
        this.collection = collection;
    }
    short() {
        const lentgh = this.collection.length;
        if (this.collection instanceof Array) {
            for (let i = 0; i < lentgh; i++) {
                for (let j = 0; j < lentgh - i - 1; j++) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        const leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHand;
                    }
                }
            }
        }
        if (typeof this.collection === "string") {
        }
    }
}
