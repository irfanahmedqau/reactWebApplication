export function snackBar(message, type) {
  let snackBarIcons = document.getElementsByClassName("iconAlert");
  for (let icon of snackBarIcons) {
    icon.removeAttribute("hidden");
    icon.setAttribute("hidden", "true");
  }
  let snackBar = document.getElementById("alertMessageDiv");
  snackBar.classList.remove("success");
  snackBar.classList.remove("danger");
  snackBar.classList.add(type);
  let snackBarIcon = document.getElementById("icon-" + type);
  snackBarIcon.removeAttribute("hidden");
  let snackBarMessage = document.getElementById("alertMessageBody");
  snackBarMessage.innerHTML = message;
  snackBar.hidden = false;
  setTimeout(function () {
    let snackBar = document.getElementById("alertMessageDiv");
    snackBar.classList.remove(type);
    let snackBarIcon = document.getElementById("icon-" + type);
    snackBarIcon.setAttribute("hidden", "true");
    let snackBarMessage = document.getElementById("alertMessageBody");
    snackBarMessage.innerHTML = "";
    snackBar.hidden = true;
  }, 5000);
  // return;
}
