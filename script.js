function validateForm()
{
    var username=document.getElementById("email");
    var password=document.getElementById("password");
    if(email.value=="Preethi" && password.value=="Preeth@i123"){
        return true;
        
    }
    else{
        alert("Wrong id or password");
        return false;
    }
}