// Complete the following functions.
// These functions only need to work with arrays.
// Do NOT use the built in array methods to solve these. forEach, map, reduce, filter, includes, etc.
// You CAN use concat, push, pop, etc. but do not use the exact method that you are replicating
// You can use the functions that you have already written to help solve the other problems

const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  // You should also pass the index into `cb` as the second argument
  // based off http://underscorejs.org/#each
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  const newArray = [];
  for (let i = 0; i < elements.length; i++) {
    newArray.push(cb(elements[i]));
  }
  return newArray;
  // teacher example:
  // const newArr = [];
  // each(elements, (elem, i) => {
  //   newArr.push(cb(elem, i));
  // });
  // return newArr;
};

const reduce = (elements, cb, startingValue) => {
  // Combine all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb` along with the `startingValue`.
  // `startingValue` should be the first argument passed to `cb` and the array element should be the second argument.
  // `startingValue` is the starting value.  If `startingValue` is undefined then make `elements[0]` the initial value.
  for (let i = 0; i < elements.length; i++) {
    if (startingValue === undefined) {
      startingValue = elements[0];
      i = 1;
    }
    startingValue = cb(startingValue, elements[i]);
  }
  return startingValue;
  // const copiedElements = elements.slice();
  // let memo;
  // if (startingValue === undefined) {
  //   memo = copiedElements.shift();
  // } else {
  //   memo = startingValue;
  // }
  // each(copiedElements, (item) => {
  //   memo = cb(memo, item);
  // });
  // return memo;
};

const find = (elements, cb) => {
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i]) === true) {
      return elements[i];
    }
  }
  return undefined;
};

const filter = (elements, cb) => {
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
  const newArray = [];
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i]) === true) {
      newArray.push(elements[i]);
    }
  }
  return newArray;
};

/* STRETCH PROBLEM */

const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  const flattenedArray = reduce(
    elements,
    (prev, next) => {
      if (Array.isArray(next)) return prev.concat(flatten(next));
      return prev.concat(next);
    },
    [],
  );
  // if element is not an array
  // push element into array
  // else recurse to flatten with our array
  // return flattenedArray;
  return flattenedArray;
};

/* eslint-enable no-unused-vars, max-len */

module.exports = {
  each,
  map,
  reduce,
  find,
  filter,
  flatten,
};
