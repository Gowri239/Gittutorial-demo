// currying by using bind
let multiply = function(x,y){
    console.log(x*y)
}
let multiplyByTwo = multiply.bind(this,3)
multiplyByTwo(5)

// currying by using closure
let add = function(x){
    return function(y){
        console.log(x+y)
    }
}
let addNum = add(5)
addNum(7) 