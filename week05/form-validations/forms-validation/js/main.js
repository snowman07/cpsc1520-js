document.querySelector('.frm-login')
    .addEventListener('submit', function (evt) {
        let username = evt.target.elements.username;
        let pass = evt.target.elements.password;
        let errMsg = '';

        // perform validation
        if (username.value.length == 0) {
            errMsg = '<p>Username cannot be empty</p>';
            username.classList.add('error');
            evt.preventDefault(); // don't submit
        } else {
            username.classList.remove('error');
        }

        if (pass.value.length < 6) {
            errMsg = errMsg + '<p>Password must be 6 or more chars</p>';
            pass.classList.add('error');
            evt.preventDefault(); // don't submit
        } else {
            pass.classList.remove('error');
        }

        if (evt.target.elements.keep.checked) {
            if (!confirm('Do you want to stay signed in?')) {
                evt.preventDefault();
            }
        }

        document.querySelector('div.error').innerHTML = errMsg;
        
});