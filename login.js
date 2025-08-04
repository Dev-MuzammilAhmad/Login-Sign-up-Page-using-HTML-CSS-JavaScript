
const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
        (item) => item.email === email && item.password === password
    );

    if (foundUser) {
        localStorage.setItem("currentUser", JSON.stringify(foundUser));
        window.location.href = "home.html";
    } else {
        alert("Invalid credentials");
    }
});
