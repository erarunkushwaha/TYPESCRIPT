"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BubbleShort = void 0;
class BubbleShort {
    short() {
        const lentgh = this.length;
        for (let i = 0; i < lentgh; i++) {
            for (let j = 0; j < lentgh - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
exports.BubbleShort = BubbleShort;
