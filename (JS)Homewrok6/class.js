// //task1
// let numbers =[1,2,4,5,9,10,20,123,593,21,23,45,67,80,98,34,21,7,6,100];
//  let sort=numbers.sort((a,b)=>{
// return a-b;
//  });
// console.log(sort)
// //task2
// let numbers =[1,2,4,5,9,10,20,123,593,21,23,45,67,80,98,34,21,7,6,100];
//  let sort=numbers.sort((a,b)=>{
// return b-a;
//  });
// console.log(sort)
//task3
// let numbers =[1,2,4,5,9,10,20,123,593,21,23,45,67,80,98,34,21,7,6,100];
// let filter =numbers.filter(value=>value%3==0);
// console.log(filter)
//task4
// let numbers =[1,2,4,5,9,10,20,123,593,21,23,45,67,80,98,34,21,7,6,100];
// let filter =numbers.filter(value=>value%10==0);
// console.log(filter)
// //task5
// let numbers =[1,2,4,5,9,10,20,123,593,21,23,45,67,80,98,34,21,7,6,100];
// numbers.forEach(element=>console.log(element));
//task6
// let numbers =[1,2,4,5,9,10,20,123,593,21,23,45,67,80,98,34,21,7,6,100];
// let map=numbers.map(index=>index*3);
// console.log(map)
// //task7
// let words=['Barbara','Belinda','Agatha','Amelia','Valentine','Gabriel','Daniella',
// 'Jane','Ginevra','Zachary','Evangeline','Isabella','Camilla','Caroline','Leona',]
// let sort=words.sort((a,b)=>{
//     if(a>b){
//         return 1;
//     }
//     return -1;
// });
// console.log(sort)
//task8
// let words=['Barbara','Belinda','Agatha','Amelia','Valentine','Gabriel','Daniella',
// 'Jane','Ginevra','Zachary','Evangeline','Isabella','Camilla','Caroline','Leona',]
// let sort=words.sort((a,b)=>{
//     if(a>b){
//         return -1;
//     }
//     return 1;
// });
// console.log(sort)
//task9
// let words=['Barbara','Belinda','Agatha','Amelia','Valentine','Gabriel','Daniella',
// 'Jane','Ginevra','Zachary','Evangeline','Isabella','Camilla','Caroline','Leona',]
// let filter=words.filter(word=>word.length<5);
// console.log(filter)
//task10
// let words=['Barbara','Belinda','Agatha','Amelia','Valentine','Gabriel','Daniella',
// 'Jane','Ginevra','Zachary','Evangeline','Isabella','Camilla','Caroline','Leona',]
// let map=words.map((value)=>{
//     return value +'!'
// }) 
// console.log(map)
//task11
// let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true},
// {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true},
// {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, 
// {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true},
//  {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
//  //task11
// // let srt=users.sort((a,b)=>a.age-b.age)
// // console.log(srt)

// // let srt1=users.sort((a,b)=>b.age-a.age)
// // console.log(srt)
// //task12
// // let srt=users.sort((a,b)=>a.name.length-b.name.length)
// // console.log(srt)

// // let srt1=users.sort((a,b)=>b.name.length-a.name.length)
// // console.log(srt)
// //task13
//     let addIdToUsers=JSON.parse(JSON.stringify(users))
//    addIdToUsers=addIdToUsers.map((value,index)=>{
//        value.id=index;
//        return value;
//    })
//    console.log(addIdToUsers)
///