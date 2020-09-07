function Product(id, name, price) {
    this.ID = id
    this.NAME = name
    this.PRICE = price
}
Productlist = []
function submit() {
    let id = document.getElementById("id").value
    let name = document.getElementById("name").value
    let price = document.getElementById("price").value
    let p = new Product(id, name, price)

    // coverting an object to a string

    let str = JSON.stringify(p)
    localStorage.setItem("1", str)
    console.log(localStorage.getItem("1"))

    // converting a string to an object
    // let obj=JSON.parse(str)
    // console.log(obj, typeof obj)

    Productlist.push(p)
    console.log(Productlist)
}


