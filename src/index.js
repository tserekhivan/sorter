'use strict';

const COMPARTATOR = (left, right) => left - right;

class Sorter {
  constructor() {
    this.arr = [];
    this.compartator = COMPARTATOR;
    // your implementation
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
      indices.sort();
      let tmp;
      for (let i = 0; i < indices.length; i++) {
        for (let j = i+1; j < indices.length; j++) {
           if (this.compartator(this.arr[indices[i]], this.arr[indices[j]]) >= 0) {
             tmp = this.arr[indices[i]];
             this.arr[indices[i]] = this.arr[indices[j]];
             this.arr[indices[j]] = tmp;
           }
          }
        }
  }

  setComparator(compareFunction) {
    this.compartator = compareFunction;
  }
}

module.exports = Sorter;