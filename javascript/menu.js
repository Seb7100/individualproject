/* const knappizza = getElementById('knap1-1');
const knapsalat = getElementById('knap2-1');
const knapbof = getElementById('knap3-1');

const pizza = getElementByClassName('.item-wrapper1');
const salat = getElementByClassName('.item-wrapper2');
const bof = getElementByClassName('.item-wrapper3');

function sePizza () {
    if (pizza.style.display === "block") {

    }
} */

var knapper = document.querySelectorAll(".menu-skift");

knapper.forEach((knap) => {
    knap.addEventListener("click", ()=> {
        console.log("clicked");
    })
});

