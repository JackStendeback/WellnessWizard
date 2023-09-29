// document.getElementById('signup-button').addEventListener('click', function (event) {
//     //  to navigate to the signup page //
//     window.location.href = '/sign-up';
// });


const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert("Failed to sign up. Please check your input.");
        }
    }
};

document
    .querySelector('#signup-form')
    .addEventListener('submit', signupFormHandler);