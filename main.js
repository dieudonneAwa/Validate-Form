document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Get input objects
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const conf_password = document.getElementById('conf-password');

    if(username.value === '') {
        document.getElementById('errorSection').style.padding = '20px';
        document.getElementById('username-error').innerHTML = 'Username is required';
    } else {
        document.getElementById('username-error').innerHTML = '';
    }

    if(email.value === '') {
        document.getElementById('errorSection').style.padding = '20px';
        document.getElementById('email-error').innerHTML = 'Email is required';
    } else {
        document.getElementById('email-error').innerHTML = '';
    }

    if(password.value === '') {
        document.getElementById('errorSection').style.padding = '20px';
        document.getElementById('password-error').innerHTML = 'Password is required';
    } else {
        document.getElementById('password-error').innerHTML = '';
    }

    if(conf_password.value === '') {
        document.getElementById('errorSection').style.padding = '20px';
        document.getElementById('conf-password-error').innerHTML = 'Confirm Password cannot be empty';
    } else {
        document.getElementById('conf-password-error').innerHTML = '';
    }

    if(password.value !== conf_password.value) {
        document.getElementById('errorSection').style.padding = '20px';
        document.getElementById('match-password-error').innerHTML = 'Passwords do not match';
    } else if(password.value === conf_password.value && password.value !== '' && username.value !== '' && email.value !== '') {
        document.getElementById('errorSection').style.padding = '20px';
        document.getElementById('errorSection').style.background = 'green';
        document.getElementById('errorSection').style.color = 'white';
        document.getElementById('errorSection').innerHTML = `Welcome ${username.value}`;

        setTimeout(() => {
            document.getElementById('errorSection').remove();
        }, 2000);
    }

});