//task1
// let click= document.getElementById('button')
// let txt=document.getElementById('text')
// click.onclick=()=>{
//     txt.style.display='none'
// }
//task2
// let click= document.getElementById('button')
// let txt=document.getElementById('text')
// click.onclick=()=>{
//     click.style.display='none'
// }
//task3
// let click=document.querySelectorAll('#submit');
// document.forms.myForm.txt.oninput=()=>{
//     let age= document.forms.myForm.txt.value;
//     document.forms.myForm.accept.onclick=()=>{
//         if(age<=18){
//             alert("Ти замалий!");
//         }
//     }
// }
//task4
// let click=document.getElementById('button');
// let hide=document.getElementById('menu');
// let hideMenu=true;
// click.onclick=function(){
//   if(hideMenu){
//    hide.style.display='block';
//     hideMenu=false
//   }else {
//       hide.style.display='none';
//       hideMenu=true;
// }

// }
//task5
// let coments=[{title : 'lorem', body:'lorem ipsum dolo sit ameti'},
// {title : 'lorem', body:'lorem ipsum dolo sit ameti'},{title : 'lorem', body:'lorem ipsum dolo sit ameti'}]

// for (let item of coments){
// console.log(item)
// let object=document.createElement('div');
// object.setAttribute('id',`div${item.title}`);
// object.innerHTML=item.title+''+ item.body;
// let btn=document.createElement('button');
// btn.innerText='REMOVE';
// btn.setAttribute('id',`buttonComents${item.title}`)
// object.appendChild(btn);
// btn.onclick=()=>{
//     object.style.display='none'
// }
// document.body.appendChild(object)
// }

//task6
// let input1=document.getElementById('txt1')
// let input2=document.getElementById('txt2')
// let input3=document.getElementById('txt3')
// let input4=document.getElementById('txt4')
// const form1 = document.forms.myForm;
// const form2 = document.forms.myForm2;
// let click=document.getElementById('button')
// click.onclick=()=>{
//     const {txt1, txt2} = form1.elements
//     const {txt3, txt4} = form2.elements
//     console.log(txt1.value)
//     console.log(txt2.value)
//     console.log(txt3.value)
//     console.log(txt4.value)
// }
//task7
// let ATable=document.createElement('table')
// document.body.appendChild(ATable)
// document.getElementById('button').onclick=()=>{
//     let{row,col,ch}=document.forms.table.element;
//     for (let i=0;i< +row.value;i++){
//         const tr=document.createElement('tr');
//         for (let j=0;j<+col.value;j++){
//             let td=document.createElement('td');
//             td.innerText=ch.value;
//             tr.appendChild(td)
//         }
//         ATable.appendChild(tr)
//     }
// }
//task8
// let mothers=['бля','нах','сук','пздц','йобане'];
// let click=document.getElementById('btn');
// let text=document.getElementById('text')

// text.oninput=()=>{
//    let txt=text.value;  
//     click.onclick=()=>{
//        let some=mothers.some(item=>{
//            if(item==txt){
//                alert('Shut Up!')
//            }
//        });
// }
// }

//task9      ?
// let mothers=['бля','нах','сук','пздц','йобане'];
// let click=document.getElementById('btn');
// let text=document.getElementById('text')

// text.oninput=()=>{
//    let txt=text.value;  
//     click.onclick=()=>{
//     mothers.forEach(element => {
//         if(text.value===element){
//             alert('Shut up')
//         }
//     });
     
// }
// }
//task10

//task11
// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// let ch=document.getElementById('ch');
// let check=document.getElementById('check');
// let box=document.getElementById('box')
// ch.onchange=()=>{
//     let filter=usersWithAddress.filter(value=>value.status===false)
//    myFilt=JSON.stringify(filter);
//    let divka=document.createElement('div')
//    divka.innerHTML=myFilt
//    document.body.appendChild(divka)
// }
// check.onchange=()=>{
//     let filt=usersWithAddress.filter(value=>value.age>29)
//    myFilteR=JSON.stringify(filt);
//    let Divka=document.createElement('div')
//    Divka.innerHTML=myFilteR
//    document.body.appendChild(Divka)
// }
// box.onchange=()=>{
//     let Filter=usersWithAddress.filter(value=>value.address.city==='Kyiv')
//    myFilter=JSON.stringify(Filter);
//    let divkA=document.createElement('div')
//    divkA.innerHTML=myFilter
//    document.body.appendChild(divkA)
// }