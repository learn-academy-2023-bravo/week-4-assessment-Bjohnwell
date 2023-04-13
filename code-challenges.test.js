// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// RED 

describe('removeAndShuffle', () => {
  const colors1 = ["purple", "blue", "green", "yellow", "pink"]
  const colors2 = [
    "chartreuse",
    "indigo",
    "periwinkle",
    "ochre",
    "aquamarine",
    "saffron"
  ]

  test('removes the first item and shuffles the remaining items in an array', () => {
    const shuffledColors1 = removeAndShuffle(colors1)
    const shuffledColors2 = removeAndShuffle(colors2)

    expect(shuffledColors1).toHaveLength(colors1.length )
    expect(shuffledColors2).toHaveLength(colors2.length )
    expect(shuffledColors1).toEqual(expect.arrayContaining(["blue", "green", "yellow", "pink"]))
    expect(shuffledColors2).toEqual(expect.arrayContaining(["indigo", "periwinkle", "ochre", "aquamarine", "saffron"]))
  })
})

// ReferenceError: removeAndShuffle is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.178 s

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.

// GREEN 
// PSEUDOCODE
// input: const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// const colors2 = [
//   "chartreuse",
//   "indigo",
//   "periwinkle",
//   "ochre",
//   "aquamarine",
//   "saffron"
// ]
// output: an array that removes the first item from the array and shuffles the remaining content.

// THE PROCESS:
// create a function callre removeAndShuffle that takes an array as an argument 
// create a new variable to remove the first item from the array(.splice)
// make your .splice arguments starting at the zeroth index position and to remove the first element after the index start 
// sort the remaining elements(.sort) and randomize the arrangement(Math.random)
// return a shuffled array 


const removeAndShuffle = (arr) => {
  const removedItem = arr.splice(0, 1)
  arr.sort(() => Math.random() - 0.5)
  return arr
}
// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.


// RED 
describe("tallyVotes", () => {
  const votes1 = { upVotes: 13, downVotes: 2 }
  const votes2 = { upVotes: 2, downVotes: 33 }
  const votes3 = { upVotes: 8, downVotes: 8 }

  it("returns the correct tally for all votes", () => {
    expect(tallyVotes(votes1)).toBe(11)
    expect(tallyVotes(votes2)).toBe(-31)
    expect(tallyVotes(votes3)).toBe(0)
  })
})

// ReferenceError: tallyVotes is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 passed, 2 total
// Snapshots:   0 total
// Time:        0.185 s, estimated 1 s

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// b) Create the function that makes the test pass.

// GREEN 
// PSEUDOCODE 
// input: an object that contains up votes and down votes
// output: the end tally.

// THE PROCESS:
// create a function called tallyVotes that will take an object as an argument.
// subtract the value of the downVotes property from the value of the upVotes property using math operators.
// return the difference as the output of the function.

const tallyVotes = (votes) => {
  return votes.upVotes - votes.downVotes;
}

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

// RED 
describe("mergeArrays", () => {
  it("merges two arrays and removes duplicates", () => {
    const dataArray1 = ["array", "object", "number", "string", "Boolean"]
    const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
    const mergedArray = mergeArrays(dataArray1, dataArray2)
    expect(mergedArray).toHaveLength(7)
    expect(mergedArray).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})

// ReferenceError: mergeArrays is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 2 passed, 3 total
// Snapshots:   0 total
// Time:        0.186 s, estimated 1 s

const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// b) Create the function that makes the test pass.

// GREEN 
// PSEUDOCODE
// input: two arrays as arguments
// output: one array with no duplicate values

// THE PROCESS:
// create a function called mergeArrays that will take 2 arrays as arguments.
// create a new variable called set that will use the Set built-in method to store the new values 
// use a for loop to iterate over the full array(.length) starting at index 0(i = 0) moving through the array 1 index at a time(i++)
// use .add to add new values to Set passing in 1 array index as an argument.
// return the new array with the new values 


const mergeArrays = (arr1, arr2) => {
  const set = new Set()
  for (let i = 0; i < arr1.length; i++) {
    set.add(arr1[i])
  }
  for (let j = 0; j < arr2.length; j++) {
    set.add(arr2[j])
  }
  return Array.from(set)
}
// REFACTOR 
const mergedArrays = (arr1, arr2) => {
  const set = new Set([...arr1, ...arr2])
  return Array.from(set)
}