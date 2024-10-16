async function handleSubmit() {
    const fields = ['firstname', 'lastname', 'email', 'password'];
    const formData = {};
    let errorMessage = '';

    fields.forEach(field => formData[field] = document.getElementById(field).value);

    if (!formData.firstname) errorMessage = 'First name must not be empty';
    else if (!formData.lastname) errorMessage = 'Last name must not be empty';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) errorMessage = 'Email is badly formatted';
    else if (formData.password.length <= 7 || !/(?=.*[a-zA-Z])(?=.*\d)/.test(formData.password)) {
        errorMessage = 'Password must be at least 8 characters long and contain at least a letter and a number';
    }

    if (errorMessage) {
        document.getElementById('error').textContent = errorMessage;
        return;
    }

    if (typeof md5 === 'undefined') {
        console.error('MD5 function is not defined. Make sure to include the library.');
        return;
    }

    formData.password = md5(formData.password);

    try {
        const response = await fetch('http://localhost:3000/validateForm', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ form: formData })
        });

        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error('Error:', error);
    }

    document.getElementById('error').textContent = '';
}
