
const newProm1 = new Promise((res, rej)=>{
    res(['HTML', 'CSS'])
  })
  const newProm2 = new Promise((res, rej)=>{
    // res(['Java', 'Python'])
    rej("promise2 rejected")
  })
async function getData(){
    const response1 = await newProm1.catch((error)=>{
        console.log(error);
    }
        );
    const response2 = await newProm2.catch((error)=>{
        console.log(error);
    })
    console.log(response1, response2)
}

getData()
const asyncftn = async ()=>{
    try{
        const r = 2
        const s = 12
        if(r==0){
            throw new Error("Denominator cannot be zero");
        }
        console.log(s/r)
        }
        catch (error) {
        console.log(error.message);
    }
}
asyncftn()