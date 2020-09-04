var obj= new String("hello")
console.log( typeof obj)

// every objects are unique so whenever we compare 2 objects it will be false

var obj1= new String("hai")
var obj2= new String("hai")
console.log(obj1==obj2)

// array

var arr=[]

// using function constructor

var a=new Array(2,5,5,75)
console.log(a, typeof a)
arr[0]=545
arr[1]="sandra"
console.log(arr, typeof arr)

// push will appean the numbers to end of the array

var values=[10,20,30]
values.push(40)
values.push(50)
console.log(values)
console.table(values)

// to remove an element from the end we use pop function

values.pop()
console.table(values)
