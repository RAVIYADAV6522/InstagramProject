// Register logic --------------------------------------------------------------------------------------------------------------------------
const registerForm = document.getElementById("signupForm");
const message = document.getElementById("registerMessage");

function ValidatePassword(password) {
  const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  return pattern.test(password);
}
if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("signupUsername").value.trim();
    const password = document.getElementById("signupPassword").value.trim();
    const email = document.getElementById("Email").value.trim().toLowerCase();

    // check that this user exists or not in our localstorage-------------------------------------------------
    let usersData = JSON.parse(localStorage.getItem("usersData")) || [];

    let userExists = usersData.find((user) => user.username === username);
    let userEmailExists = usersData.find((user) => user.email === email);
    if (userExists) {
      alert("user already exists");
      return;
    }
    if (userEmailExists) {
      alert("Email already exists");
      return;
    }
    if (!ValidatePassword(password)) {
      alert(
        "Password must be 8+ chars, with upper, lower, number & special char."
      );
      return;
    }

    usersData.push({ username, email, password });
    localStorage.setItem("usersData", JSON.stringify(usersData));
    alert("signup successfull");
    registerForm.reset();
    window.location.href = "index.html";
  });
}

// Login logic ----------------------------------------------------------------------------------------------------------------------
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const usernameOrEmail = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    let usersData = JSON.parse(localStorage.getItem("usersData")) || [];

    let userExists = usersData.find((user) => {
      if (user.username === usernameOrEmail && user.password === password) {
        return user;
      } else if (user.email === usernameOrEmail && user.password === password) {
        return user;
      }
    });

    if (userExists) {
      // console.log(userExists);
      const {username} = userExists
      // console.log(username)
      sessionStorage.setItem("loggedInUser", username);
      alert("loggin successfull");
      window.location.href = "../insta.html";
    } else {
      alert("invalid credentials");
    }
  });
}
