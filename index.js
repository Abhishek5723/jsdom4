// promise function is async code and used to parralar execution at the backend in javascript 

// let merapromise=new Promise(function(resolve,reject){
// setTimeout(function(){
//     console.log('I am inside Promise');
// },5000);
// resolve(1998);
// });
// console .log('pehla');

// let merapromise=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('I am inside Promise');
//     },5000);
//     reject(new error('bhai saab error aaye hai'););
//     });
//     console .log('pehla');


// let merapromise=new Promise(function(resolve,reject){
// setTimeout(function(){
//     console.log('I am inside Promise');
// },5000);
// // resolve(1998);
// reject('error aayi hai')
// });
// merapromise.then((value)=>{console.log(value)});
// console .log('pehla');

// merapromise.catch((error)=>{console.log('recieved an error')});


// nested promise 

// let wada1=new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         console.log('start1');
//     },3000);
//     resolve(true);
// })

// wada1.then(()=>{
//     let wada2=new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log('start1');
//         },3000);
//         resolve('wada2 resolved');
//     })
//     return wada2;
// }).then((value)=>console.log(value));
 

// async function code it create promise in it bestway to use then function for multiple time act as a then method 
// async function abcd()
// {
//     return "babbar";
// }

// async function utility() {

// let delhimausam= new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//         resolve('delhi m bht garmi hai');
//     },2000);
// });

// let hydmausam= new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//         resolve('hyderabad m bht garmi hai');
//     },5000);
// });

// let dm= await delhimausam;
// let hm= await hydmausam;
// return[dm,hm];

// }

// await keyword used to run promise function after completion of promise which present above 

// fetch api return the promise 
// json = javascript object notation 

async function utility() {
    let ap= await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let output=  await ap.json();
    console.log(output);
}


// closure means  nested function  working on references 