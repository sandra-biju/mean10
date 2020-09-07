function Employee(id,name,salary){
    this.ID=id
    this.NAME=name
    this.SALARY=salary
    this.incrsalary=function(amount){
        this.SALARY+=amount
    }
}
let obj=new Employee("16EE01","sandra",25000)
let obj1=new Employee("16EE02","basil",20000)
let obj2=new Employee("16EE03","biju",40000)
let obj3=new Employee("16EE04","gibi",35000)
console.log(obj)
console.log(obj1)
console.log(obj2)
console.log(obj3)
obj.incrsalary(5000)
console.log(obj.SALARY)



function Person(name,age,address){
    this.NAME=name
    this.AGE=age
    this.ADDRESS=address
    this.display=function(){
        console.log("name ",this.NAME)
        console.log("age ",this.AGE)
        console.log("address ",this.ADDRESS)

    }
}
let Person1= new Person("anu",20,"dhjdcn")
let Person2= new Person("amal",22,"dhjfvdcn")
let Person3= new Person("anupa",26,"dvdfchjdcn")
console.log(Person1)
Person1.display()
Person2.display()
Person3.display()

var num=[20,35,50,41]
var [a,b,c,d]=num
console.log("a = ",a)
console.log("b = ",b)
console.log("c = ",c)
console.log("d = ",d)

// every() 

console.log(num.every((x)=>x%2==0))
// some()
console.log(num.some((x)=>x%2==0))



