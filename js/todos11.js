let todo=[]
function addtask(){
    let data=document.getElementById("task").value
    if(data!=""){
        todo.push(data)
    }
    document.getElementById("task").value=""
    console.log(todo)
    showtasks()
}   

function showtasks(){
    for(task of todo){
        var li=document.createElement("li")
        li.innerHTML=task+`<button onclick=remove(${todo.indexOf(task)})>-</button>`     
    }
    document.getElementById("mytasks").appendChild(li)
   
    
}
function remove(i){
    todo.splice(i,1)
    console.log(todo)
}