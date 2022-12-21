const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
const handleSubmit = () => {
    let emailValue = document.getElementById('email').value;
    let personalInfo = document.querySelector('.info-group');
    let emailForm = document.querySelector('.email-input-group');

    if(validateEmail(emailValue)){
        personalInfo.style.display = 'block';
        emailForm.style.display = 'none';
    }
}
const handleClose = () => {
    let personalInfo = document.querySelector('.info-group');
    let emailForm = document.querySelector('.email-input-group');
    let emailInput = document.getElementById('email');
    personalInfo.style.display = 'none';
    emailForm.style.display = 'block';
    emailInput.value = "";
    emailInput.focus();
}
const handleInputChange = () => {
    let emailValue = document.getElementById('email').value;
    let errMessage = document.querySelector('.message');
    if(validateEmail(emailValue)){
        errMessage.textContent = "";
    }else if(emailValue.length === 0){
        errMessage.textContent = "Vui lòng nhập email";
        errMessage.style.color = 'red';
    }else {
        errMessage.textContent = "Sai định dạng email";
        errMessage.style.color = 'red';
    }
}
document.getElementById('submit-btn').addEventListener('click', handleSubmit);
document.getElementById('email').addEventListener('input', handleInputChange);
document.querySelector('.close-btn').addEventListener('click', handleClose);