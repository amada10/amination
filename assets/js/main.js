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

let srcVideoElement = document.getElementById('sourceVideo');
let video = document.querySelector('.myVideoBg');
let topTab = document.querySelectorAll('.top-tab-item');

topTab.forEach((topItem) => {
    topItem.addEventListener('click', function(){
        if(topItem.textContent === "Design"){
            //srcVideoElement.src="assets/video/design.mp4";
            srcVideoElement.setAttribute('src', 'assets/video/design.mp4'),
            console.log(srcVideoElement);
        }
    })
})