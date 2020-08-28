function validate(){
    var name=document.getElementById("name")
    if(name.value==""){
        alert("name can't be empty")
        name.focus()
        return false
    }

    var name=document.getElementById("email")
    if(email.value==""){
        alert("email can't be empty")
        email.focus()
        return false
    }

    var name=document.getElementById("mobilenumber")
    if(mobilenumber.value==""){
        alert("mobile number can't be empty")
        mobilenumber.focus()
        return false
    }

    if(isNaN(mobilenumber.value)){
        alert(" invalid mobile number")
        mobilenumber.focus()
        return false
    }

    if(mobilenumber.value.length!=10){
        alert("mobile number should contain 10 digits")
        mobilenumber.focus()
        return false
    }

    var name=document.getElementById("password")
    if(password.value==""){
        alert("password can't be empty")
        password.focus()
        return false
    }

    if(password.value.length<3 || password.value.length>5){
        alert("password length should be in between 3 and 5")
        password.focus()
        return false
    }
}