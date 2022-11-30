const validateEmail = (email) => {
    const re = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    return re.test(String(email).toLowerCase());
};
let checkName = false;
document.getElementById('name').addEventListener('input', function(){
    let name = document.getElementById('name').value;
    let name_err = document.getElementById('name_err');
    if(name === ''){
        name_err.innerHTML = "Please fill out your name";
    }else if(name.length > 100){
        name_err.innerHTML = "Your name over 100 characters";
    }else{
        name_err.innerHTML = "";
        checkName = true;
    }
    return checkName;
});
let checkEmail = false;
document.getElementById('email').addEventListener('input', function(){
    let email = document.getElementById('email').value;
    let email_err = document.getElementById('email_err');
    if(email === ''){
        email_err.innerHTML = "Please fill out your email";
        checkEmail = false;
    }else if(email.length > 50){
        email_err.innerHTML = "Your email over 50 characters";
        checkEmail = false;
    }else if(!validateEmail(email)){
        email_err.innerHTML = "Your email format is incorrect.<br>Example: example@example.com";
        checkEmail = false;
    }else{
        email_err.innerHTML = "";
        checkEmail = true;
    }
    return checkEmail;
});
document.getElementById('submit_btn').addEventListener('click', function(){
    if(checkName && checkEmail){
        alert('Validate complete!');
    }else{
        alert('Validate fail!');
    }
});
// function findMax(arr) {
//   var maxNum = arr.reduce(function (previousValue, currentValue) {
//     return currentValue > previousValue ? currentValue : previousValue;
//   }, 0);
//   return maxNum;
// }

// const maxNum = findMax([1,2,3,4,5]);
// alert(`Số lớn nhất là: ${maxNum}`);
