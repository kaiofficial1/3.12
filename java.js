const cardList = document.querySelector(".cardList");
const pointsDisplay = document.getElementById("points");
let points = 0;

buildBoard();

let interval= setInterval(function(){
    addCard(cardList.children.length + 1)//make it start at 1 not 0
}, 2000);

cardList.addEventListener('click', function(e){
    if (e.target.matches('.cardList')){
        return
    }
    if (e.target.classList.contains('active')){
        if (e.target.classList.contains('blue')) {
            points += 1;
        } else if (e.target.classList.contains('purple')) {
            points += 2;
        }
        pointsDisplay.textContent = `Points: ${points}`;
        e.target.classList.remove('active');
        e.target.classList.add('inactive');
        return
    }
    e.target.remove();
    let children= cardList.children;
    if (children.length < 1){
        clearInterval(interval);
    }
});
function addCard(value){
    let card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('active');
    card.classList.add(getRandomColor());
    card.innerHTML = value;
    cardList.appendChild(card);
}

function buildBoard(){
    for (let i=0; i<12; i++){
        addCard('starter')
    }
}

function getRandomColor() {
    return Math.random() < 0.5 ? 'blue' : 'purple';
}