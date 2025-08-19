1
    //   let arr = [5,10,15,20,25];
    for (let i = 0; i< arr.length; i++){
      console.log(arr[i]);
    
   }

2
  let sum = 0;
    for(let num of arr) sum += num;
   console.log("sum:", sum);

// 3
//     let arr = [1,2,3,4,5,6,7,8,9,10];
   let max = arr[0];
    for(let num of arr)if(num < max) max = num;
    console.log("Max",max);
 
4
//   let arr = [1,2,3,4,5,6,7,8,9,10];
  let min = arr[0];
  for(let num of arr)if(num < min)min = num;
  console.log("Min:",min);

5
//    let arr = [1,2,3,4,5,6,7,8,9,10];
   let evenCount = 0;
   for(let num of arr)if(num % 2 ===0)
      evenCount++;
  console.log("Even count :",evenCount);

6
//    let arr = [1,2,3,4,5,6,7,8,9,10];
  let oddCount = 0;
   for(let num of arr)if (num % 2!==0)
      oddCount++;
  console.log("Odd Count:",oddCount);

7
//   let arr = [1,2,3,4,5,6,7,8,9,10];
 let square = []
  for(let num of arr) square.push(num*num);
 console.log("Square:", square);

8
//  let arr = [1,2,3,4,5,6,7,8,9,10];
 let reversed =[];
 for(let i =  arr.length - 1; i >= 0; i--)
 reversed.push(arr[i]);
 console.log("Reversed:",reversed);

9
//  let arr = [1,2,3,4,5,6,7,8,9,10];
 let mixedArr = [-2,3,-1,5,0,-6];
 for(let num of mixedArr)if(num > 0)
    console.log(num);

10
//  let arr = [-2,3,-1,5,0,-6];
 for(let num of arr)if (num < 0)
     console.log(num);
    
11
// let arr = [1,2,3,4,5,6,7,8,9,10];
 let secondMax = -Infinity, largest = -Infinity;
 for(let num of arr){
     if (num > largest){
         secondMax = largest;
         largest = num;
     }
     else if ( num > secondMax && num  !== largest){
         secondMax = num;
     }
 }
 console.log("second largest:",secondMax);

12
//  let arr = [1,2,3,4,5,6,7,8,9,10];
 let dupArr = [1,2,3,4,5];
 let uniqueArr = [];
 for(let num of dupArr) if (! uniqueArr.includes(num))
     uniqueArr.push(num);
 console.log("Without duplicates:",uniqueArr);

13
// let arr = [1,2,3,4,5,6,7,8,9,10];
 let searchNum = 15;
 console.log(arr.includes(searchNum) ? "Exists" : "Not Found");

14

 let countNum = 2;
 let count = 0;
 for(let num of dupArr) if (num === countNum) count++;
 console.log('${countNum} appears $ {count} times');

15
// let arr = [1,2,3,4,5,6,7,8,9,10];
 let swapArr = [...arr];
[swapArr[0],swapArr[swapArr.length - 1]] = [swapArr[swapArr.length -1],swapArr[0]];
 console.log("Swapped:" , swapArr);

16
//  let arr[Anushka,is,cute,And ,Topper]
 let arr1 =[Anushka,is,cute]
 let arr2 = [ And ,she ,is,a,Topper]
 let merged = arr1.concat(arr2);
 console.log("Merged:",merged);

 17 
 let a1 = [1,2,3,4], a2 = [3,4,5,6];
 console.log("Common =",a1.filter(x = a2.includes(x)));

 18
 console.log("Diff =", a1.filter(x => ! a2.includes(x)).concat(a2.filter(x => !a1.includes(x))));


