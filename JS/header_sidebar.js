var btn = document.querySelector("#button");
var overlay = document.querySelector("#overlay");
var sidebar = document.querySelector("#sidebar");

btn.addEventListener('click', function(e){
    e.preventDefault();
    overlay.classList.remove("none");
    sidebar.classList.remove("none");
})

overlay.addEventListener('click', function(e){
    e.preventDefault();
    overlay.classList.add("none");
    sidebar.classList.add("none");
})