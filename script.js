// home page logic ----------------------------------------------------------


const logoutIcon = document.getElementById("more");
// console.log(logoutIcon);
const logoutPara = document.getElementById("logoutpara");
// console.log(logoutPara);

function logout() {
  sessionStorage.removeItem("loggedInUser");
  window.location.href = "../Authentication/index.html";
}

const username = sessionStorage.getItem("loggedInUser");
console.log(username);

logoutIcon.addEventListener("click", () => {
  logout();
});

logoutPara.addEventListener("click", () => {
  logout();
});
