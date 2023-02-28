// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]

let validateCred = (array) => {
    let double_Array = []; 
    let standard_Array = []; 
      for (let i = array.length - 2; i >= 0; i -= 2) {
        let green = array[i] * 2; 
        if (green > 9) {
          green -= 9; 
          double_Array.push(green); 
        } else if (green <= 9) {
          double_Array.push(green); 
        }
      }
// console.log(double_Array); 

  for (let j = array.length - 1; j >= 0; j -= 2) {
    standard_Array.push(array[j]); 
  }
// console.log(standard_Array); 

let work_Array = double_Array.concat(standard_Array); 

// console.log(work_Array); 

let reduced_Array = work_Array.reduce( (accumulator, currentValue) => {
    return accumulator + currentValue; 
}, 0)

// console.log(reduced_Array); 

return reduced_Array % 10 === 0 ? true : false;

    } // final close. 
    
// console.log(validateCred(valid5)); 

    /* 
    * * This is question 4: 
    * * we want to look through batch; and return a new array of all the cards
    * which are invalid, this should be easy as we have the list on main.js 
    * so the key question is: how do we loop through an array of arrays. 
    */

    let new_Invalid_Collection = []; 
    let findInvalidCards = (input_Array, input_Function) => {
      input_Array.forEach( (element) => {
        let check = input_Function(element); 
        if (check === false) {
          
          new_Invalid_Collection.push(element); 
        }
      })

      return new_Invalid_Collection; 
    }; 

  findInvalidCards(batch, validateCred);
  // console.log(new_Invalid_Collection); 

   /* 
    * * question 5: 
   * create a function with a parametet 
    */

   let array_Companies = []; 
   let filtered_Array_Companies = []; 
   let idInvalidCardCompanies = (nested_Array) => {
    for (let i = 0; i < nested_Array.length; i++) {
      if (nested_Array[i][0] === 3) {
        array_Companies.push('Amex (American Express)')
      } else if (nested_Array[i][0] === 4) {
        array_Companies.push('Visa')
      } else if (nested_Array[i][0] === 5) {
        array_Companies.push('Mastercard')
      } else if (nested_Array[i][0] === 6) {
        array_Companies.push('Discover')
      } else if (nested_Array[i][0] < 3 || nested_Array[i][0] > 6) {
        array_Companies.push('Company not found')
      }
    }
    // console.log(array_Companies); 

    let companies_Purifier = array_Companies.filter( (value, index, self) => {
      return self.indexOf(value) === index; 
    })

    return companies_Purifier; 
   }

   console.log(idInvalidCardCompanies(new_Invalid_Collection)); 

   /**
    * *
    * * The following function accepts a string and converts it into an array 
    * * of numbers like the ones provided. 
    */

let blush = '4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6'; 

let string_To_Array = (input_Array) => {
  return input_Array.split(','); 
}

console.log(string_To_Array(blush)); 

