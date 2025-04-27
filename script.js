// home page logic ----------------------------------------------------------
let profileName = document.getElementById("username");
let profileEmail = document.getElementById("email");

const profileIcon = document.getElementById("more");
const dropdown = document.getElementById("dropdown");
const logoutBtn = document.getElementById("logout");

// console.log(logoutIcon);
// const logoutPara = document.getElementById("pmore");
// console.log(logoutPara);

function logout() {
  sessionStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
}

const [username, email] = sessionStorage.getItem("loggedInUser").split(",");
console.log(username, email);

profileEmail.innerText = `${email}`;
profileName.innerText = `${username}`;

if (!username) {
  window.location.href = "login.html";
}

logoutBtn.addEventListener("click", () => {
  logout();
});
// dropdown showing here ---------------------------------
profileIcon.addEventListener("click", () => {
  if (dropdown.className.includes("hidden")) {
    dropdown.classList.remove("hidden");
    dropdown.classList.add("show");
  } else {
    dropdown.classList.remove("show");
    dropdown.classList.add("hidden");
  }
});
