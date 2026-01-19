// 1.
// let numbers = [2, 7, 11, 15];
// let target = 9;
// let pairs = [];

// for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//         if (numbers[i] + numbers[j] === target) {
//             pairs.push([numbers[i], numbers[j]]);
//         }
//     }
// }
// console.log("Pairs with sum", target, ":", pairs);

// 2.
// let numbers1 = [1, 2, 3, 4, 5];
// let target1 = 9;
// let triplets = [];

// for (let i = 0; i < numbers1.length - 2; i++) {
//     for (let j = i + 1; j < numbers1.length - 1; j++) {
//         for (let k = j + 1; k < numbers1.length; k++) {
//             if (numbers1[i] + numbers1[j] + numbers1[k] === target1) {
//                 triplets.push([numbers1[i], numbers1[j], numbers1[k]]);
//             }
//         }
//     }
// }

// console.log("Triplets with sum", target1, ":", triplets);

// 3.
// let numbers3 = [3, -1, 5, -2];
// let negatives = [];
// let positives = [];

// for (let i = 0; i < numbers3.length; i++) {
//     if (numbers[i] < 0) {
//         negatives.push(numbers3[i]);
//     } else {
//         positives.push(numbers3[i]);
//     }
// }
// let result = negatives.concat(positives);

// console.log("Result:", result);

// 4.
// let arr = [1,2,4,5];
// let n = arr.length + 1;   

// let total = 0;
// for(let i = 1; i <= n; i++){
//     total += i;
// }

// let sum = 0;
// for(let i = 0; i < arr.length; i++){
//     sum += arr[i];
// }

// let missing = total - sum;
// console.log(missing); 

// 5.
// let arr0 = [1,3,4,2,2];
// let freq = {};

// for(let num of arr0){
//     if(freq[num]){
//         console.log(num); 
//         break;
//     }
//     freq[num] = 1;
// }

// 6.
// let arr1 = [1,2,3];
// let arr2 = [2,4,3];

// let set1 = new Set(arr1);
// let result0 = arr2.filter(num => set1.has(num));

// console.log(result0); 

// 7.
// let arr3 = [-2,1,-3,4,-1,2,1,-5,4];

// let maxSum = arr[0];
// let currSum = 0;

// for(let i = 0; i < arr3.length; i++){
//     currSum += arr3[i];

//     if(currSum > maxSum){
//         maxSum = currSum;
//     }

//     if(currSum < 0){
//         currSum = 0;
//     }
// }
// console.log(maxSum); 

// 8.
// let arr4 = [1,2,3];
// let K = 4;
// let count = 0;

// for(let i = 0; i < arr4.length; i++){
//     let sum = 0;
//     for(let j = i; j < arr4.length; j++){
//         sum += arr[j];
//         if(sum < K){
//             count++;
//         }
//     }
// }

// console.log(count); 

// 9.
// let arr5 = [-2,1,-3,4,-1,2,1,-5];

// let maxSum1 = arr[0];
// let currSum1 = 0;

// for(let i = 0; i < arr5.length; i++){
//     currSum1 += arr5[i];

//     if(currSum1 > maxSum1){
//         maxSum1 = currSum1;
//     }

//     if(currSum1 < 0){
//         currSum1 = 0;
//     }
// }
// console.log(maxSum1); 

// 10.
// let arr6 = [100,4,200,1,3,2];
// let set = new Set(arr6);
// let longest = 0;

// for(let num of set){
//     if(!set.has(num - 1)){  
//         let currentNum = num;
//         let count = 1;

//         while(set.has(currentNum + 1)){
//             currentNum++;
//             count++;
//         }
//         longest = Math.max(longest, count);
//     }
// }
// console.log(longest); 

// 11
// function rotateLeft(arr,k){
//     let n = arr.length;
//     k = k % n ;

// let part1 = arr.slice(0,k);
// let part2 = arr.slice(k)

// return part2.concat(part1)

// }
// console.log(rotateLeft([1,2,3,4,5], 2));



// function rotateLeft(arr, k) {
//   let n = arr.length;
//   k = k % n;

//   let part1 = arr.slice(0, k);
//   let part2 = arr.slice(k);

//   return part2.concat(part1);
// }

// console.log(rotateLeft([1,2,3,4,5], 2));


// Reverse an array without using extra space 


// function Reverse(arr){
//     let left = 0
//     let right = arr.length -1

//     while(left < right){
//     [arr[left],arr[right]] = [arr[right],arr[left]]
 
//     left++;
//     right--;

//     }
//   return arr;
// }

// console.log(Reverse([1,2,3,4,5]));




// find 2nd largest

let arr =[3,6,9,5,10]

let largest = -Infinity
let second_largest = -Infinity 
for(let i=0;i<arr.length;i++){
 if(arr[i]>largest){
  largest = arr[i]
 }

}

for(let i=0;i<arr.length;i++){
 if(arr[i] !== largest && arr[i]>second_largest){
  second_largest = arr[i]
 }

}

console.log(second_largest);



//  state whther the given number is palindromic or not

let num = 121










