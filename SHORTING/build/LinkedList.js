"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    add(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
    }
    get length() {
        if (!this.head) {
            return 0;
        }
        let length = 1;
        let node = this.head;
        if (!this.head) {
            while (node.next) {
                length++;
                node = node.next;
            }
        }
        return length;
    }
    at(index) {
        if (!this.head) {
            throw new Error("Index Out Of Bound");
        }
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error("Index Out Of Bound");
    }
    compare(leftIndex, rightindex) {
        if (!this.head) {
            throw new Error("List is Empty");
        }
        return this.at(leftIndex).data > this.at(rightindex).data;
    }
    swap(leftIndex, rightindex) {
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightindex);
        const leftHand = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftHand;
    }
    print() {
        if (!this.head) {
            return;
        }
        let node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    }
}
exports.LinkedList = LinkedList;
