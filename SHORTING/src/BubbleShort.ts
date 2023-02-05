interface Shortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export class BubbleShort {
  constructor(public collection: Shortable) {}

  short(): void {
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
