1
let i = [1,2,3,4,5,6,7,8,9,10]
for(let i = 1; i<= 10; i++){
    console.log(i);
    
}

2
for(let i = 2;i<= 20; i +=2 ){
    console.log(i);
    
}

//  3    alternate way
for( let i=1; i<=20; i++){
    if(i % 2 ===0){
        console.log(i);
        
    }
}

4
for(let i=1; i<=20; i+= 2){
    console.log(i);
    
}

//   5   alternate way
for(let i= 1; i<=20; i++){
    if(i % 2 !==0){
        console.log(i);                       
        
    }
} 

6
for(let i = 10; i >= 1; i--){
    console.log(i);
    
}

7
let sum = 0;
for(let i = 1;i<= 100; i++){
    sum += i;
}
 console.log("sum =",sum);

8
//  let num =5;
 let fact = 1;

 for(let i = 1; i<= num; i++){
     fact *=i;
 }
 console.log("Factorial of", num , "is", fact);

 9
  let count = 0;
 for(let i = 1; i <= 50; i++){
     if(i % 3 === 0){
         count++;
     }
 }
 console.log("count =", count);

 10
//  let num = 5;
 for(let i = 5; i<= 50; i++){
     if( i % 5 ===0){
         console.log(i);
        
     }
 }

 10
 for(let i = 7; i <= 100; i +=7 ){
     console.log(i);
    
 }

 for(let i = 7; i<= 100; i+= 7){
     console.log(i);
    
 }

 11
//  let num = 1234567890;
 let rev = 0;

 while(num > 0){
     let digit = num % 10;

     rev = rev * 10 + digit;

     num = Math.floor(num / 10);
}

 console.log("Reverse = ", rev);


 12
 for(let i = 1; i<= 10; i++){
     console.log(i + " = " + (i * i));
    
 }


 13
//  let num = 123;
//  let sum = 0;

 while(num > 0){
    sum += num % 10;
    num = Math.floor(num / 10);
 }
 console.log("sum of digits =", sum);


 14
  for(let i =1; i <= 50; i++){
    if(i% 2 === 0 && i % 3 ===0){
        console.log(i);
        
    }
}


15
let num = 61;
let isPrime = true;

if(num < 2){
    isPrime = false;
}else{
        for(let i= 2; i <= Math.sqrt(num); i++){
            if  (num % i ===0){
                isPrime = false;
                break;
            }
        }
    }
    
    if (isPrime){
        console.log(num + " is Prime");
     }else{
        console.log(num + "is Not Prime");
        
     }


