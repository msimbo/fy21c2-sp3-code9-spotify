const loginForm = document.getElementById('login-form');
const loginBtn2 = document.getElementById('login2');
const yesBtn = document.getElementById('yes');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();   // necessary to prevent submit button and form from jumping the gun

    const username = document.getElementById('user');
    const password = document.getElementById('pswd');
    const criteriaMsg = document.getElementById('criteria');  // put here for simplicity instead of inside else

    if( usernameValid(username.value)  &&  passwordValid(password.value) ) {
        loginBtn2.innerText = "LOGGING IN...";
        window.location.href = "index.html";
    }
    else {
            // show message about username/password requirements
        criteriaMsg.classList.remove('delay-500','opacity-0');
        criteriaMsg.classList.add('opacity-95');
            // hide message upon click
        criteriaMsg.addEventListener('click', () => {
            criteriaMsg.classList.add('delay-500');
            criteriaMsg.classList.remove('opacity-95');
            criteriaMsg.classList.add('opacity-0');
        });
    }
});

yesBtn.addEventListener('click', () => {
    const signupFooter = document.getElementById('signup-login');
    signupFooter.classList.add('hidden');
})


function usernameValid(username) {
    return (username.length > 6);
}

function passwordValid(password) {
    return ( password.length > 8  &&  hasDigit(password) );
}

function hasDigit( myStr ) {
    for( let i = myStr.length - 1; i > -1; i-- ) {
        if(  Number(myStr.charAt(i)) >= 0  )
            return true;
    }
    return false;
}

