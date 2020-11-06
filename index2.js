function apiFetch(){
    let promise= new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("This is promise")
            resolve(4);
            // reject()
        },1000)
    })
    // .then(function(){
    //     console.log("This is then")
        // .catch(function(){
        //     console.log("This is catch")
            
        // })
    // });
     return promise;
    }
async function _api(){
    let data=await apiFetch()
    console.log(data)
}
// apiFetch()
_api();