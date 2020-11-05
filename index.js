console.log("start")

function callback1(){
    setTimeout(function(){
        console.log("Callback1")
        
    },3000)
}

function callback2(){
    setTimeout(function(){
        console.log("Callback2")
        
    },2000)
}

function callback3(){
    setTimeout(function(){
        console.log("Callback3")
        
    },1000)
}
function func1(){
    callback1();
    console.log("func1")
}
func1()

function func2(){
    callback2();
    console.log("func2")
}
func2()
function func3(){
    callback3();
    console.log("func3")
}
func3()

console.log("end")