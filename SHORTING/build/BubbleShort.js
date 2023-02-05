"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BubbleShort = void 0;
class BubbleShort {
    constructor(collection) {
        this.collection = collection;
    }
    short() {
        const lentgh = this.collection.length;
        for (let i = 0; i < lentgh; i++) {
            for (let j = 0; j < lentgh - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    }
}
exports.BubbleShort = BubbleShort;
