 
      //  ASYNC / AWAIT with Set Timeout Function





function ktm(){
  return new Promise(resolve => {setTimeout(()=>{resolve("READY TO RACE");},3000)});
}

async function killswitch(){
  console.log("killswitch ON");
  const on = await ktm();
  console.log(on);

}

killswitch();
