document.getElementById("submit").addEventListener("click", ()=>{
    let email = document.getElementById("email").value;
    let showError = document.getElementById("error");
    showError.innerHTML = "";
    try{
        if(email.trim() == "") throw "Email is required";
        if(!validateEmail(email)) throw "Valid email required";
    }
    catch(err){
        showError.innerHTML = err
    }
    if(validateEmail(email) && !email.trim() == ""){
    submitResult(email);
    }
});

document.getElementById("reset").addEventListener("click", ()=>{
    document.getElementById("main").style.display = "flex";
    document.getElementById("submitted").style.display = "none";
})

function submitResult(email){
    let submitted = document.getElementById("submitted");
    let showConfirm = document.getElementById("show-confirm");
    document.getElementById("main").style.display = "none";
    submitted.style.display = "flex";
    showConfirm.innerHTML = `A confirmation email has been sent to <b>${email}</b>. Please open it and clickthe button inside to confirm your subscribtion. `
};

function validateEmail(e) { 
 var reg = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
 if (reg.test(e)){
 return true; 
}
 else{
 return false;
 } 
}