
const loginBtn2 = document.getElementById('login2');

loginBtn2.addEventListener('mouseup', () => {     // mouseup or "full click" ?
    const username = document.getElementById('user');
    const password = document.getElementById('pswd');

    if( validUN(username.value)  &&  validPW(password.value) ) {
        console.log( "username & password accepted!" );
        // @TODO take user to HOME screen (index.html)
    }
    else {
        console.log( "username must be at least 7 characters; password must be at least 9 and contain a digit. please try again" );
        // @TODO: provide visual feedback
    }
});

function validUN(username) {
    return (username.length > 6);
}

function validPW(password) {
    return ( password.length > 8  &&  hasDigit(password) );
}

function hasDigit( myStr ) {
    for( let i = myStr.length - 1; i > -1; i-- ) {
        if(  Number(myStr.charAt(i)) >= 0  )
            return true;
    }
    return false;
}

