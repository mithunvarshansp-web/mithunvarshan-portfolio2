console.log("Portfolio Loaded Successfully");

const cards = document.querySelectorAll(
'.project-card,.skill-box,.highlight-card'
);

cards.forEach(card => {

card.addEventListener('mouseenter',()=>{

card.style.transform='translateY(-10px)';

});

card.addEventListener('mouseleave',()=>{

card.style.transform='translateY(0px)';

});

});