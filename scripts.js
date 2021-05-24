function isValidEmail(email){
    
    // regex found at: https://stackoverflow.com/questions/46841752/javascript-regular-expressions-email-address
    var res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var val = res.test(String(email).toLowerCase());
    
    if (val == true){
        return true;
    }
    else {
        alert("Please enter a valid e-mail, we won't be able to get back to you otherwise.");
    } 

}

function confirm(){
    alert("We've recieved your message and will be in touch shortly.")
}