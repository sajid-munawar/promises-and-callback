// promise .then tree 



const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("new promise")
        // resolve()
        reject();
    }, 1000);
})
promise.then(() => {
    console.log("Resolved")
    return 2

})
.then (function( val){
    console.log(val)
    return val+3
}).then (function(val){
    console.log(val)
})

.catch((val1) => {
    console.log("Reject")
    return 8

})
.catch (function(val1){
    console.log(val1)
})
console.log("World")