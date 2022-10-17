let card = document.querySelectorAll('.card');

card.forEach((oneCard) => {
    oneCard.addEventListener('mouseover', () => {
        oneCard.childNodes[3].style.display = 'flex';
    });
    oneCard.addEventListener('mouseout', () => {
        oneCard.childNodes[3].style.display = 'none';
    });
})

let year = document.getElementById('anneeCopyright');
let date = new Date();
year.textContent = date.getFullYear();