// const promise1 = fetch('https://www.w3schools.com/js/js_promise.asp'); // Replace with your API endpoint
// const promise2 = fetch('https://www.w3schools.com/js/js_async.asp'); // Replace with another API endpoint
// const promise3 = fetch('https://www.w3schools.com/js/js_callback.asp'); // Replace with yet another API endpoint

// Promise.all([promise1, promise2, promise3])
//   .then((results) => {
//     // All promises have resolved successfully
//     console.log('All promises resolved:', results);
//   })
//   .catch((error) => {
//     // At least one promise has rejected
//     console.error('At least one promise rejected:', error);
//   });
//   Promise.all([promise1, promise2, promise3]).then((results)=>{
//     console.log("All courses resolved");
//   }).catch((error)=>{
//     console.log("Some problems in fetching requesting")
//   })
  const newProm1 = new Promise((res, rej)=>{
    rej("Promise1 rejected")
  })
  const newProm2 = new Promise((res, rej)=>{
    res(['Java', 'Python'])
  })
  const newProm3 = new Promise((res, rej)=>{
    res(['Vue', 'React'])
  })
//   Promise.all([newProm2, newProm3, newProm2]).then((res)=>{
//     console.log(res)
//   }).catch((rej)=>{
//     console.log(rej)
//   })
// const allsettledPromise = Promise.allSettled([newProm1, newProm1])
// allsettledPromise.then((resp) => {
//     console.log(resp);
// }).catch((err) => { // Change `(rej)` to `(err)`
//     console.log(err);
// });

// const anysettledPromise = Promise.any([newProm1, newProm2])
// anysettledPromise.then((resp)=>{
//     console.log(resp)
// }).catch((rej)=>{
//     console.log(rej)
// })
// Race: Race between the Promises
const racesettledPromise = Promise.race([newProm1, newProm2])
racesettledPromise.then((resp)=>{
    console.log(resp)
}).catch((error)=>{
    console.log(error)
})



