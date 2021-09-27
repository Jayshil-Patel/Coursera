function check(){
    var em1 = document.getElementById("email_addr");
    var em2 = document.getElementById("email_repeat");
    if(em1.value != em2.value){
        alert("Emails does not match");
        return false;
    }
}