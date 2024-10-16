function postFormData(formData) {
    fetch('http://localhost:3000/validateForm', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function handleSubmit() {
    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorParagraph = document.getElementById('error');

    errorParagraph.textContent = '';

    if (firstName.trim() === '') {
        alert('First name must not be empty');
        errorParagraph.textContent = 'First name must not be empty';
        return false;
    }
    if (lastName.trim() === '') {
        alert('Last name must not be empty');
        errorParagraph.textContent = 'Last name must not be empty';
        return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Email is badly formatted');
        errorParagraph.textContent = 'Email is badly formatted';
        return false;
    }
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordPattern.test(password)) {
        alert('Password must be at least 8 characters long and contain at least a letter and a number');
        errorParagraph.textContent = 'Password must be at least 8 characters long and contain at least a letter and a number';
        return false;
    }
    const encryptedPassword = CryptoJS.MD5(password).toString();
    const formData = {
        form: {
            firstname: firstName,
            lastname: lastName,
            email: email,
            password: encryptedPassword
        }
    };
    postFormData(formData);
    return false;
}
