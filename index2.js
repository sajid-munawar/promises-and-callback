function apiFetch(){
    let promise= new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("This is promise")
            resolve(4);
            reject("error")
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
    try{
        let data=await apiFetch()
    console.log(`${data} from resolve`)
    }
    catch(error){
        console.log(`${error} from catch`)
    }
}
_api();
apiFetch()