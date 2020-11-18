//task1
// let text=document.getElementById('txt')
// let Ltxt=localStorage.getItem(text)
// if(Ltxt){
//     text.value=text
// };
// text.oninput=()=>{
// localStorage.setItem('text',text.value)
// }
//  text.value=localStorage.getItem('text')

//task2

// const form1 = document.getElementById("form");
// getDataForm(form1)
// function saveForm(t) {
// 	setDataForm(t)
// }

// function setDataForm(tag) {
// 	for (let i = 0; i < tag.length; i++) {
// 		const tagElement = tag[i];
		
// 		if (tagElement.type === 'checkbox' || tagElement.type ==='radio')
// 			tagElement.checked
// 				? tagElement.value = true
// 				: tagElement.value = false
// 		localStorage.setItem(tagElement.id, tagElement.value);
// 	}
// }

// function getDataForm(tag) {
// 	for (let i = 0; i < localStorage.length; i++) {
// 		if (localStorage.hasOwnProperty(tag.children[i].id)){
// 			tag.children[i].value = localStorage.getItem(tag.children[i].id)
// 			if (tag.children[i].value === 'true'){
// 				tag.children[i].setAttribute('checked','checked');
// 			}
// 		}

// 	}
// }
//task3
// let arr=document.getElementById('textArea');
// let btn=document.getElementById('btn');
// let historyLeft=document.getElementById('btnLeft');
// let historyRight=document.getElementById('btnRight')


// const arrea= JSON.parse(localStorage.getItem('key'))||[]
// let index = arrea.length-1
// arr.value = arrea[index] || ''
// btn.onclick =()=>{
//     const arrea = JSON.parse(localStorage.getItem('key'))||[];
//     arrea.push(arr.value)
//     localStorage.setItem('key', JSON.stringify(arrea));
//     console.log(arrea)
// }

//     historyLeft.onclick=()=>{
//         const arrea= JSON.parse(localStorage.getItem('key'))||[]
//         index--
//         arr.value = arrea[index]||'START';
        
//     }

// historyRight.onclick=()=>{
//   const arrea=JSON.parse(localStorage.getItem('key'))||[]
//   index++
//   arr.value=arrea[index]||'end'
// }

//task4
const ArrayUsers='arrayUsers'

let tempUser={};
let btn=document.getElementById('btn')
const form1 = document.forms.myForm
form1.btn.onclick = ev =>{
    ev.preventDefault();
let person={}
for(let i=0;i<form1.children.length;i++){
const form1Element=form1.children[i];
if(form1Element.name && form1Element.type !=='submit'){
    person[form1Element.name]=form1Element.value
}
}
person.id=new Date ().getTime()
console.log(person)

}