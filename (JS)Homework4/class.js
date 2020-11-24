//task1
// let numbers=[1,2,3,4,5,6,7];
// function printNumbers(numbers){

// console.log(numbers);
// // }
// // printNumbers(numbers)
// // // //task2 ЧОМУ ВИБИВАЄ ПОМИЛКА В PRINTARRAY&
// function createArray(length,min,max){
//     let array=[];
//     for(let i=0;i<array.length;i++){
//         array.push(Math.floor(Math.random() *(max-min)+min));
//     }
//         return array;
// }
// const array1 = createArray(10,10,100);
// printArray(array1);
// //task3
// function returnMinFromThree(a,b,c){
//     let min;
//     let max;
//     if(a<=b && a<=c) min=a;
//     if(b<=a && b<=c) min=b;
//     if(c<=a && c<=b) min=c;
// console.log('min',min);
//     return min;
// }
// let min=returnMinFromThree(20,28,100)
// console.log(min)
// //task4
// function returnMaxFromThree(a,b,c){
//     let min;
//     let max;
//     if(a>=b && a>=c) max=a;
//     if(b>=a && b>=c) max=b;
//     if(c>=a && c>=b) max=c;
// console.log('max',max);
//     return max;
// }
// let max=returnMaxFromThree(28,25,26)
// console.log(max)
// //task5
// function returnMinPrintMax(a,b,c){
//  let min=arguments[0];
//  let max=arguments[0];
//   for(let arg of arguments){
//       if (arg>max) max=arg;
//       if(arg<min) min=arg;
//   }
//   console.log('max',max);    
//   return min;   
// } 
// let min=returnMinPrintMax(3,4,5,9,10);
// console.log('_ _ _ _ _ _ _ ')
// console.log('min',min);
// // //task6
//  let numbers=[1,2,3,4,5,6,7];
//  function printNumbers(numb){
//     console.log(numb);
//  }
//  printNumbers(numbers)
//  //TASK7
//  let myNumbers=function returnMAxFromArray(array){
//     let max=array[0];
//      for(let item of array ){
//           if (max<item) max=item
//       
       
//      }
//      return max;
//  }
//  const MyNumbers1=myNumbers([1,4,5,6,7,8,3]);
//  console.log(MyNumbers1)
// //task8
// let MyNumb=function returnMinFromArray(array){
//    let min=array[0];
//    for(let item of array){
//       if (min>item)min=item;
//    }
//    return min;
// }
// const MyNumb1=MyNumb([3,2,5,20,1,21]);
// console.log(MyNumb1);
// //task9
// function plusNumbers(array){
//    let sum=0;
//    for(let item of array){
//      sum+=item
//    }
//    return sum;
// }
// let plusNumbers1=plusNumbers([2,3,5,4]);
// console.log(plusNumbers1)
// //task10
// function plusNumbers(array){
//    let sum=0;
//    for(let item of array){
//      sum+=item/array.length
//    }
//    return sum;
// }
// let plusNumbers1=plusNumbers([13,14,20,12]);
// console.log(plusNumbers1)
// //task11
// let users=[{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, 
// {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// function countFields(arrayObj){
//    let count=0;
//    for(let item of arrayObj){
//       if(typeof item ==='object'){
//          count++;
//       }
//    }
//    return count;
// }
// let numb=countFields(users);
// console.log(numb)
//task12
// let users=[{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, 
// {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// function countFields(arrayObj){
//    let count=0;
//    for(let item of arrayObj){
//       for(key in item){
//          count++;      
//       }
//    }
//    return count;
// }
// let numb=countFields(users);
// console.log(numb)
//task13
// function countItemsAndReturn(numbers1,numbers2){
//    let count=[];
//   for(let item in numbers1){
     
//      count.push(numbers1[item]+numbers2[item]);

//       }
// return count;
// }
// let countItemsAndReturn1= countItemsAndReturn([1,2,3,4],[2,3,4,5]);
// console.log(countItemsAndReturn1);
//task14
// let numbers1 =[1,2,3,4];
// function cnhangePlace(numb,index){
//    let number=[...numb];
//     if(index<number.length-1){
//        let count=number[index];
//        number[index]=number[index+1];
//        number[index+1]=count;
//     }
   
//    return number;
// }
// let cnhangePlace1=cnhangePlace(numbers1);
// console.log(numbers1)
// console.log(cnhangePlace1)
// //task15
// function myFunck(array){
//    let zero=[];
//    let number=[];
//    for (let item of array){
//       if(item===0){
//          zero.push(0);
//       }else{
//          number.push(item);
//       }
//    }
//    return number.concat(zero);
// }
// console.log(myFunck([1,0,6,0,3]));
// console.log(myFunck([0,1,2,3,4]));
// console.log(myFunck([0,0,1,0]));
// //task16
// function HelloOwu (message){
//   let array=document.createElement(message);
//   array.innerHTML=message||'Hello Owu';
//   document.body.appendChild(array)  
// }
// HelloOwu(null ,'div')
//task17
