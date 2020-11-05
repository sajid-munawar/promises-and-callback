function apiFetch(){
    let promise=new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("successful")
            // resolve("data")
            reject()

        },1000)
    })
    // .then(function(){
        // console.log("this is then")
    .catch(function(){
        console.log("this is catch")
    })
    // })
    return promise;
}

apiFetch();
async function _asyncFunction(){
    let aa=await apiFetch()
    console.log(`${aa} is came from resolve`)
}

_asyncFunction()