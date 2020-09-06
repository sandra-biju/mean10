let obj={
    name:"sandra",
    age:22
}
console.log(obj)

// to add properties

obj.number=8547647325
console.log(obj)

// to update

obj.name="basil"
console.log(obj)

// to fetch the vaue

console.log(obj.name)

obj["city"]="ekm"
console.log(obj)

obj["age"]=10
console.log(obj)

console.log(obj["age"])


// Functions

let student={
    rollno:1,
    name:"sandra",
    marks:[80,90,70],
    display:function(){
        console.log(this.rollno)
    },

    average:function(){
        return this.marks.reduce((x,y)=>x+y)/this.marks.length
    }
}
student.display()
// console.log(student)

console.log(student.average())




let person={name:"joe",age:22,address:"nkjjlj"}
let student1=Object.create(person)
console.log(student1)

console.log(person.isPrototypeOf(student1))

console.log(person.hasOwnProperty("name"))
console.log(student1.hasOwnProperty("name"))
student1.rollno=1
student1.batch="CSE"
console.log(student1)

// to update the prototype

student1.__proto__.name=("rose")
console.log(student1)


// assisgn function

let student2=Object.assign(person)
console.log(student2)


// to freeze an object there will not be any change

// Object.freeze(student2)
// student2.age=20
// console.log(student2)

// to check an object is frozen or not 

console.log(Object.isFrozen(student2))

// seal function => is to update the exsisting properties but cant add new properties

Object.seal(student2)
student2.batch=2
student2.age=30
console.log(student2)


