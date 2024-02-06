const _ = require('underscore'); // In case underscore library is not added

const list = ['a', 'b', 'c'];
const list2 = [1, 2, 3];

const zipList = (listA, listB) => {
  const newList = [];
  for (let i = 0; i < Math.min(listA.length, listB.length); i++) {
    newList.push(listA[i], listB[i]);
  }
  return newList;
};

console.log(zipList(list, list2)); // Output: ['a', 1, 'b', 2, 'c', 3]

const zipListTheSimpleWay = (listA, listB) => _.flatten(_.zip(listA, listB));

console.log(zipListTheSimpleWay(list, list2)); // Output: ['a', 1, 'b', 2, 'c', 3]