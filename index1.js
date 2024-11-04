const tap = document.getElementById('nav-btn');
const drop = document.getElementById('drop');

tap.addEventListener('click', function(e){
    e.preventDefault();
    drop.classList.toggle("show");
    tap.classList.toggle("menu-rotate")
})

