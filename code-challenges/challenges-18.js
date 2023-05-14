'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
    // write your code here
      const words = str.split(' ');
      const middleIndex = Math.floor(words.length / 2);
      const middleWord = words[middleIndex];
      return middleWord.length;
      }
      
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
    // write your code here
        const freqMap1 = createFreqMap(str1);
        const freqMap2 = createFreqMap(str2);
        
        return isEqual(freqMap1, freqMap2);
      }
      
      const createFreqMap = (str) => {
        const freqMap = {};
        for (let i = 0; i < str.length; i++) {
          const char = str[i];
          freqMap[char] = (freqMap[char] || 0) + 1;
        }
        return freqMap;
      }
      
      const isEqual = (map1, map2) => {
        const keys1 = Object.keys(map1);
        const keys2 = Object.keys(map2);
        if (keys1.length !== keys2.length) {
          return false;
        }
        for (let key of keys1) {
          if (map1[key] !== map2[key]) {
            return false;
          }
        }
        return true;
      }
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
    // write your code here
        let left = 0;
        let right = arr.length - 1;
        while (left <= right) {
          const mid = Math.floor((left + right) / 2);
          if (arr[mid] === int) {
            return mid;
          } else if (arr[mid] < int) {
            left = mid + 1;
          } else {
            right = mid - 1;
          }
        }
        return left;   
}
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };