// home page logic ----------------------------------------------------------

const logoutIcon = document.getElementById("more");
// console.log(logoutIcon);
const logoutPara = document.getElementById("pmore");
// console.log(logoutPara);

function logout() {
  sessionStorage.removeItem("loggedInUser");
  window.location.href = "../Authentication/index.html";
}

const username = sessionStorage.getItem("loggedInUser");
console.log(username);

if (!username) {
  window.location.href = "../Authentication/index.html";
}

logoutIcon.addEventListener("click", () => {
  logout();
});

logoutPara.addEventListener("click", () => {
  logout();
});
