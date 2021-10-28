//PROMISES 

function Supra(){
  let myPromise = new Promise((resolve,reject)=>{
    let engine = "2JZ";

    if(engine === "2JZ"){
      resolve();
    }else{
      reject();
    }
  }) 

  myPromise.then(()=> {console.log("Is that a Supra.....!!!!")}).
  catch(()=>{console.log("its not JDM ")})
}

Supra();
