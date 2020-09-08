var obj={
    name:"sandra",
    age:22,
    display:function(){
        console.log(this.name)
        console.log(this.age)
    }
}
let employee=Object.create(obj)
employee.ID=16119
employee.SALARY=10000
employee.viewData=function(){
    console.log(this.ID)
    console.log(this.SALARY)
}

//  to get its own property

for(pros in employee){
    if(employee.hasOwnProperty(pros)){
        console.log(pros)
    }
}
console.log("***********************************************")
// to get inherited property

for(pros in employee){
    if(!employee.hasOwnProperty(pros)){
        console.log(pros)
    }
}
console.log("***********************************************")

// to get all properties of an object

for(pros in employee){   
        console.log(pros)
}
console.log("***********************************************")

for(pros in employee){
    console.log(employee[pros])
}
console.log("***********************************************")

// by using forEach() to print the its own properties

Object.keys(employee).forEach(
    (x)=>console.log(x)
)

console.log("***********************************************")


// function volume(l,b,h){
//     return l*b*h
// }
// let result=volume(20,30,40)
// console.log(result)

// curried version(function curring)

function volume(x){
    return function(y){
        return function(z){
            console.log(x*y*z)
        }
    }
}
var s=volume(180)
console.log(s)
var t=s(50)
console.log(t)
t(10)

console.log("***********************************************")


// using bind() implemetation of currying

function greet(gender,age,name){
    var salutation=gender==="male"? "Mr." : "Ms."
    if(age>25){
        return "Hello," + salutation + name +"."
    }
    else{
        return "Hey " +salutation + name +"."
    }
}
let gr=greet.bind(null,"female",22,"sandra")
console.log(gr())

let g=greet.bind(null,"female",22)
console.log(g("sree"))
console.log(g("gibi"))

let b=greet.bind(null,"male",30)
console.log(b("basil"))
console.log(b("biju"))

console.log("***********************************************")

// libraries in javascript

console.log(Math.min(10,54,24,1,654))
console.log(Math.random())
console.log(Math.floor(524.3268))