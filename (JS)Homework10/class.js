// async function getUp(time){
//     let promise = new Promise((resolve,reject)=>{
//     console.log('Hellow world')
//     setTimeout(()=>{
//       if(time>10){
//        reject('Сьогодні буду цілий день спати',);
//       }
//    resolve(' Пора вставати з ліжка уже 10')
//     },2000)
    
// })
// let result=await promise;
// console.log(result);
// }
//  async function breakfeast(food){
//     let promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('Піду подивлюсь що є в холодильнику')
//         if(food<2){
//          reject('Блін холодильник пустий,треба час тратити на супермаркет')
          
//         }
//   resolve('є яйца і сосіски ,можу приготувати їх ')
//     },1000)
// })
// let result=await promise;
// console.log(result);

// }
// async function homeWork(ex,){
//    let promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('Сідаю писати домашнє')
//         if(ex>10){
//            reject('до одного місця то всьо ,це дуже важке ')
           
//         }
//        resolve('`вчусь і роблю всі домашні завдання')
//     },1000)
// })
// let result=await promise;
// console.log(result);
// };
// async function goGym(hours){
// let promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('Збираюсь і іду в зал')
//         if(hours>2){
//          reject('зараз прийду до дому і засну,бо я дуже вимучений ')
        
//         }
//    resolve('біжу до дому, бо ще куча справ')
//     },500)
// })
// let result=await promise;
// console.log(result);
// };

// async function comeHome(minuts){
// let promise =new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('Час прийняти теплий душ')
//         if(minuts>30){
//          reject('блін вже немає часу, знову буд смердіти')
            
//         }
//      resolve('приймаю теплий душ і швидко вечеряю')
//     },100)
// })
// let result=await promise;
// console.log(result);
// };
// async function itTime(oclock){
// let promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('Час навчання')
//         if(oclock>9){
//            reject('очі помалу закриваються Z z z z! ')
            
//         }
//       resolve(' пробую писати домашнє завдання і уважно слухаю лекцію')
//     },1000)

// })
// let result=await promise;
// console.log(result);
// };

// async function sleepTime(pm,calback){
// let promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('Вже пізня година')
//         if(pm>12){
//             reject('блін знову перебив собі сон')
            
//         }
//        resolve('сьогодні був важкий насичений день ,пора спати')
//     },1000)
// });
// let result=await promise;
// console.log(result);
// }
 
// async function sunc(){
//     let res=await getUp(9);
//     let res1=await breakfeast(3); 
//     let res2=await homeWork(9);
//     let res3=await goGym(1);
//     let res4=await comeHome(7);
//     let res5=await itTime(8)
//     let res6=await sleepTime(11)
// }
// sunc().then((result)=>{})
// .catch((err)=>{
//     console.log(err)
// })
//task 2
function start() {
let string =  'Hello World';
    arr = string.length,
    i = 0,
    tId = setInterval(() =>{
      document.body.innerHTML += string[i++];
      if (i == arr) clearInterval(tId);
    }, 300);
};
start();