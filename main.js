const openClose = document.getElementById("open-close");
const menuList = document.getElementById("menu");

openClose.addEventListener("click", () => {
    if (openClose.className == "bi bi-list") {
        openClose.className = "bi bi-x-lg";
        menuList.style.visibility = "visible";
    } else {
        openClose.className = "bi bi-list";
        menuList.style.visibility = "collapse";
    }
})