function handleSubmit(event) {
    event.preventDefault();

    const firstname = document.getElementById('firstname').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!firstname) {
        alert("First Name must not be empty");
        document.getElementById('error').textContent = "First name must not be empty.";
        return;
    }

    if (!lastname) {
        alert("Last Name must not be empty");
        document.getElementById('error').textContent = "Last name must not be empty.";
        return;
    }

    if (!emailPattern.test(email)) {
        alert("Email is badly formatted");
        document.getElementById('error').textContent = "Email is badly formatted.";
        return;
    }

    if (!passwordPattern.test(password)) {
        alert("Password must be at least 8 characters long and contain at least a letter and a number");
        document.getElementById('error').textContent = "Password must be at least 8 characters long and contain at least a letter and a number.";
        return;
    }

    console.log('Form submitted:', { firstname, lastname, email, password });
    document.getElementById('error').textContent = "";
}
