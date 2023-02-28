const arr = [1, 2, 2, 3, 3, 4, 5, 5];
const uniqueArr = arr.filter((value, index, self) => {
  return self.indexOf(value) === index;
});

console.log(uniqueArr); // [1, 2, 3, 4, 5]

![1] This is where we begin the notes


In the filter() method, we create a new array uniqueArr that contains only the elements that pass the test implemented by the callback function. The callback function takes three arguments: value is the current element being processed, index is the index of the current element, and self is the array that filter() was called upon.

The indexOf() method is used to check whether the current element is the first occurrence of that value in the array. If it is, then the method returns the index of that element, and the filter() method includes that element in the uniqueArr array. If it's not, then the filter() method skips that element and moves on to the next one.

This method will return a new array without modifying the original array.

------------------------------------

In the longer example, the expression self.indexOf(value) === index is used to check whether the current element is the first occurrence of that value in the array.

The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present. When there are duplicates in the array, the indexOf() method will return the index of the first occurrence of the element.

By comparing the index of the current element (index) with the index of the first occurrence of the element (self.indexOf(value)), we can determine whether the current element is the first occurrence of that value in the array. If the two indices are equal, then the current element is the first occurrence, and the callback function returns true, which includes the element in the new array. If the indices are not equal, then the current element is not the first occurrence, and the callback function returns false, which excludes the element from the new array.

By using this expression in the filter() method, we can remove all duplicates from the array and return a new array with only the unique elements.