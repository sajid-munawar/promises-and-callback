async function getData(){
    let response=await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log("response= ",response)
    let data=response.json();
    console.log("data= ",data)
}
getData();