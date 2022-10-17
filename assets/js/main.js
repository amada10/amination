let body = document.body;
let moveBackgroundMouse = document.querySelector('.background_mouse');
body.addEventListener('mousemove', (event) => {
    let x = event.pageX - 40;
    let y = event.pageY - 40;
    moveBackgroundMouse.style.top = y + 'px';
    moveBackgroundMouse.style.left = x + 'px';
})