"use strict";

class MyArray {
  constructor(...incomingValues) {
    this.length = 0;
    this.push(...incomingValues);
  }

  push(...incomingValues) {
    for (let number of incomingValues) {
      this[this.length++] = number;
    }
    return this.length;

    // for(let i = 0;i < incomingValues.length; i++){
    //   this[this.length++] = arguments[i];
    // }return this.length;
  }
  pop() {
    if (this.length === 0) {
      return undefined;
    }
    let deletedNum = this[--this.length];
    delete this[this.length];
    return deletedNum;
  }
  shift() {
    let deletedNum = this[0];
    for (let i = 0; i < this.length; ) {
      this[i] = this[++i];
    }
    if (this.length !== 0) {
      delete this[--this.length];
      return deletedNum;
    }
    return undefined;
  }

  unshift(...incomingValues) {
    for (let i = this.length - 1; i >= 0; i--) {
      this[i + incomingValues.length] = this[i];
    }
    for (let i = 0; i < incomingValues.length; i++) {
      this[i] = incomingValues[i];
    }
    this.length += incomingValues.length;
    return this.length;
  }

  reverse() {
    let temporaryArr = new MyArray();
    let count = 0;
    for (let j = 0; j < this.length; j++) {
      temporaryArr[j] = this[j];
    }
    for (let i = this.length - 1; i >= 0; i--) {
      this[count++] = temporaryArr[i];
    }
    return this;
  }

  forEach(func) {
    for (let i = 0; i < this.length; i++) {
      func(this[i], i, this);
    }
  }

  map(func) {
    let mappedArr = new MyArray();
    for (let i = 0; i < this.length; i++) {
      mappedArr[i] = func(this[i]);
      mappedArr.length++;
    }
    return mappedArr;
  }

  concat(...incomingValues) {
    let concatArr = new MyArray();
    for (let i = 0; i < this.length; i++) {
      concatArr[i] = this[i];
      concatArr.length++;
    }
    for (let i = 0; i < incomingValues.length; i++) {
      if (incomingValues[i] instanceof MyArray) {
        for (let j = 0; j < incomingValues[0].length; j++) {
          concatArr[concatArr.length++] = incomingValues[0][j];
        }
      } else {
        concatArr[concatArr.length++] = incomingValues[i];
      }
    }
  }

  [Symbol.iterator]() {
    let i = 0;
    let context = this;
    return {
      next() {
        return {
          value: context[i++],
          done: i > context.length,
        };
      },
    };
  }

  static isMyArr(obj) {
    return obj instanceof MyArray;
  }
}

let testArr = new MyArray(1, 2, 3, 4);
let test2 = new MyArray("kek", "lol");
