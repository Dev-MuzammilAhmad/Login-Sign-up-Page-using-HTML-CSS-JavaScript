const registrationForm = document.getElementById("registration-form");

registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find((item) => item.email === email);

    if (foundUser) {
        alert("User  already exists. Kindly make account with different email address.");
    } else {
        const user = { username: username, email: email, password: password };
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        alert("User  registered successfully!");
        event.target.reset();
    }
});

