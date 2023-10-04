function showMenu () {
    const btn = document.querySelector('.nav__btn');
    const list = document.querySelector('.nav__list');
    console.log(btn);

    btn.addEventListener('click', function(){
        list.classList.toggle('active');
    });
    // btn.addEventListener('click', evento);
    // console.log(evento);
}
showMenu();