// TASK CB
// function getUp(time,whenGetUp){
//     console.log('Hellow world')
//     setTimeout(()=>{
//       console.log('Яка година?');
//       if(time<10){
//           whenGetUp('цілий день спати',null);
//           return;
//       }
//       whenGetUp(null,'з ліжка уже 10')
//     },2000)
// };
// function breakfeast(food,cb){
//     setTimeout(()=>{
//         console.log('Піду подивлюсь що є в холодильнику')
//         if(food<2){
//             cb('я голодний',null)
//             return;
//         }
//        cb(null,'можу приготувати їх ')
//     },1000)
// };
// function homeWork(ex,calback){
//     setTimeout(()=>{
//         console.log('Сідаю писати домашнє')
//         if(ex<10){
//             calback('це дуже важке ',null)
//             return;
//         }
//        calback(null,'роблю всі домашні завдання')
//     },1000)
   
// };
// function goGym(hours,calback){
//     setTimeout(()=>{
//         console.log('Збираюсь і іду в зал')
//         if(hours>2){
//             calback('я дуже вимучений ',null)
//             return;
//         }
//        calback(null,'ще куча справ')
//     },500)
// };

// function comeHome(minuts,calback){
//     setTimeout(()=>{
//         console.log('Час прийняти теплий душ')
//         if(minuts>30){
//             calback('блін вже немає часу',null)
//             return;
//         }
//        calback(null,'і швидко вечеряю')
//     },100)
// };
// function itTime(oclock,calback){
//     setTimeout(()=>{
//         console.log('Час навчання')
//         if(oclock>9){
//             calback('очі помалу закриваються',null)
//             return;
//         }
//        calback(null,'і уважно слухаю лекцію')
//     },1000)
// };
// function sleepTime(pm,calback){
//     setTimeout(()=>{
//         console.log('Вже пізня година')
//         if(pm>12){
//             calback('блін знову',null)
//             return;
//         }
//        calback(null,'пора спати')
//     },1000)
// };


// getUp(11 ,(err,data)=>{
// if(err){
//     console.log('В мене нема настрою')
//     console.log('Сьогодні буду',err)
//     return;
// };
// console.log(`Пора вставати ${data}`)

// breakfeast(3,(err,data)=> {

//     if (err) {
//           console.log('Блін холодильник пустий,треба час тратити на супермаркет',err)
//          return;
//     }
//     console.log(`є яйца і сосіски ${data}`)

//     homeWork(11,(err,data)=> {

//         if (err) {
//               console.log('до одного місця то всьо',err)
//              return;
//         }
//         console.log(`вчусь і ${data}`)

//         goGym(1,(err,data)=> {

//             if (err) {
//                   console.log('зараз прийду до дому і засну,бо',err)
//                  return;
//             }
//             console.log(`біжу до дому бо  ${data}`)

//             comeHome(10,(err,data)=> {

//                 if (err) {
//                       console.log(err,' знову буд смердіти')
//                      return;
//                 }
//                 console.log(`приймаю теплий душ ${data}`)
//                 itTime(7,(err,data)=> {

//                     if (err) {
//                           console.log(err,'Z z z z! ')
//                          return;
//                     }
//                     console.log(` пробую писати домашнє завдання ${data}`)
//                     sleepTime(7,(err,data)=> {

//                         if (err) {
//                               console.log(err,'перебив собі сон ')
//                              return;
//                         }
//                         console.log(` сьогодні був важкий насичений день, ${data}`)
//                 })
//             })
//         })  
//     })      
//  })
// });
// })





//TASK PROMISE
function getUp(time){
    return new Promise((resolve,reject)=>{
    console.log('Hellow world')
    setTimeout(()=>{
      if(time>10){
       reject('Сьогодні буду цілий день спати',);
      }
   resolve(' Пора вставати з ліжка уже 10')
    },2000)
});
}
function breakfeast(food){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Піду подивлюсь що є в холодильнику')
        if(food<2){
         reject('Блін холодильник пустий,треба час тратити на супермаркет')
          
        }
  resolve('є яйца і сосіски ,можу приготувати їх ')
    },1000)
})
}
function homeWork(ex,){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Сідаю писати домашнє')
        if(ex>10){
           reject('до одного місця то всьо ,це дуже важке ')
           
        }
       resolve('`вчусь і роблю всі домашні завдання')
    },1000)
})
};
function goGym(hours){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Збираюсь і іду в зал')
        if(hours>2){
         reject('зараз прийду до дому і засну,бо я дуже вимучений ')
        
        }
   resolve('біжу до дому, бо ще куча справ')
    },500)
})
};

function comeHome(minuts){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Час прийняти теплий душ')
        if(minuts>30){
         reject('блін вже немає часу, знову буд смердіти')
            
        }
     resolve('приймаю теплий душ і швидко вечеряю')
    },100)
})
};
function itTime(oclock){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Час навчання')
        if(oclock>9){
           reject('очі помалу закриваються Z z z z! ')
            
        }
      resolve(' пробую писати домашнє завдання і уважно слухаю лекцію')
    },1000)

})
};

function sleepTime(pm,calback){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Вже пізня година')
        if(pm>12){
            reject('блін знову перебив собі сон')
            
        }
       resolve('сьогодні був важкий насичений день ,пора спати')
    },1000)
});
}
 
getUp(9)
    .then ((date)=>{
        console.log(date);

        return breakfeast(3);
    })
    .then((date)=>{
        console.log(date);

        return homeWork(9);
    })
    .then ((date)=>{
        console.log(date);

        return goGym(1);
    })
    .then ((date)=>{
        console.log(date);

        return comeHome(20);
    })
    .then((date)=>{
        console.log(date);

        return itTime(8);
    })
    .then((date)=>{
        console.log(date);

        return sleepTime(11);
    })
    .then ((date)=>{
        console.log(date)
    })
    .catch(err=>{
        console.log(err)
    })