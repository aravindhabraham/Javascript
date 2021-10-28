      ASYNC / AWAIT
                                

async function planet(){
  console.log("async calling");
  const result = await fetch ("https://swapi.dev/api/planets/3/").then((response) => {
    return response.json()
  })
  console.log(result);
}

planet();
