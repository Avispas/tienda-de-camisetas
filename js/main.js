'use strict';
console.log('hola mundo');
const cardsElement = document.querySelector('.js-cards');

function getProductHtmlCode(name, price, imageURL) {
  let htmlCode = `<article class="card">`;
  htmlCode += `<img src="${imageURL}" alt="${name}" class="card__img">`;
  htmlCode += `<h3 class="card__title">${name}</h3>`;
  htmlCode += `<p class="card description">${price}</p>`;
  htmlCode += `<button class="card__btn">Añadir a la cesta</button>`;
  htmlCode += `</article>`;
  return htmlCode;
}
function paintProducts() {
  const product1 = getProductHtmlCode('Lèa', '12$', '../images/photolea.PNG');
  const product2 = getProductHtmlCode('Dali', '12$', '../images/photodali.PNG');
  const product3 = getProductHtmlCode('Lazy', '10$', './images/image.png');
  cardsElement.innerHTML += product1 + product2 + product3;
}
paintProducts();