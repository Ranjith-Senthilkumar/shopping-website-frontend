// Toggle side navbar
var sidenavbar = document.querySelector(".side-navbar");
function shownavbar() {
    sidenavbar.style.left = "0";
}
function closenavbar() {
    sidenavbar.style.left = "-50%";
}

// Search functionality
var productcontainer = document.getElementById("product");
var search = document.getElementById("search");
var productlist = productcontainer.querySelectorAll("div");

search.addEventListener("keyup", function (event) {
    var enteredvalue = event.target.value.toUpperCase();
    for (i = 0; i < productlist.length; i = i + 1) {
        var productname = productlist[i].querySelector("p").textContent;
        if (productname.toUpperCase().indexOf(enteredvalue) < 0) {
            productlist[i].style.display = "none";
        } else {
            productlist[i].style.display = "block";
        }
    }
});
