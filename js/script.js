function Event(){
    console.log("function is called...")
    document.getElementById("p1").innerText="helloooooooooo"
    document.getElementById("p3").style.color="red"
    document.getElementById("p3").style.fontSize="30px"

}

function getvalue(){
    let name=document.getElementById("p2").value
    console.log(name)
    alert("hey"+name)
}

function change(){
    document.getElementById("p4").innerHTML="Now the content is changed"
    document.getElementById("p4").style.color="blue"
    document.getElementById("p4").style.fontSize="50px"
}

function getdata(){
    var Name= prompt("Enter your name")
    console.log(name)
    var Age= prompt("Enter your age")
    console.log(age)
    document.getElementById("name").value=Name
    document.getElementById("age").value=Age


}

