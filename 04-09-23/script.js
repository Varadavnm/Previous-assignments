// function function1(){
//     console.log("first function")
// }
// let x = "No data"
// function function2(cb){
//     setTimeout(()=>{
//         console.log("Data received")
//   },3000)
   
// }
// function2(()=> {
//     console.log(x);
// })
// function function3(){
//     console.log("Third function")
// }
// setInterval(()=>{
//   console.log("intervel data")
// },2000);
// function2()
// function3()
// // Create an Array
// const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// // Call removeNeg with a callback
// const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

// // Display Result
// document.getElementById("demo").innerHTML = posNumbers;

// // Keep only positive numbers
// function removeNeg(numbers, callback) {
//   const myArray = [];
//   for (const x of numbers) {
//     if (callback(x)) {
//       myArray.push(x);
//     }
//   }
//   return myArray;
// }
// const newprom = new Promise((res, rej)=>{
//     res(10);
// }).then((res)=>{
//     console.log("success", res)
// }).catch(()=>{
//     console.log(res)
// })
// newprom
// console.log("task1")
// setTimeout(() => {
//   console.log("task2")
// });
// console.log("taks3")
// var st = "No data"
// function getApData(){
//   setTimeout(()=>{
//     st = "Data received"
//     return st;
//   },2000)

//   console.log(st);
// }
// console.log(getApData())
// var amm = "Data not received"
// const getData = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     amm ="data received";
//     reject(10)
//   })
// }).then((response)=>{
//   console.log("Inside then", x)
// }).catch(()=>{
//   console.log("Error", amm)
// })

