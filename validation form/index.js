const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Add error message elements for each input field
const firstnameError = document.createElement('small');
firstnameError.classList.add('error');
firstname.parentNode.insertBefore(firstnameError, firstname.nextSibling);

const lastnameError = document.createElement('small');
lastnameError.classList.add('error');
lastname.parentNode.insertBefore(lastnameError, lastname.nextSibling);

const emailError = document.createElement('small');
emailError.classList.add('error');
email.parentNode.insertBefore(emailError, email.nextSibling);

const passwordError = document.createElement('small');
passwordError.classList.add('error');
password.parentNode.insertBefore(passwordError, password.nextSibling);

const password2Error = document.createElement('small');
password2Error.classList.add('error');
password2.parentNode.insertBefore(password2Error, password2.nextSibling);

form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    
    firstnameError.textContent = '';
    lastnameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    password2Error.textContent = '';

    
    let isValid = true;

    if (firstname.value === '') {
        firstnameError.textContent = 'First name is required';
        isValid = false;
    }

    if (lastname.value === '') {
        lastnameError.textContent = 'Last name is required';
        isValid = false;
    }

    if (email.value === '' || !validateEmail(email.value)) {
        emailError.textContent = 'Please enter a valid email';
        isValid = false;
    }

    if (password.value === '') {
        passwordError.textContent = 'Password is required';
        isValid = false;
    }

    if (password2.value === '' || password.value !== password2.value) {
        password2Error.textContent = 'Passwords do not match';
        isValid = false;
    }

    
    if (isValid) {
        alert('Form submitted successfully!');
    
    }
});


function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

