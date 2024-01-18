'use strict';
//  Data productos

const product1Name = 'Lèa' ;
const product1Price = '12€';
const product1ImageUrl = '../images/photolea.PNG';
let product1Quantity = 1;

const product2Name = 'Dali';
const product2Price = '12€';
const product2ImageUrl = '../images/photodali.PNG' ;
let product2Quantity =  1;

const product3Name = 'Lazy' ;
const product3Price = '10€';
const product3ImageUrl = '../images/image.png' ;
let product3Quantity = 1; 

// Paint products

const productElement = document.querySelector('.js-products');

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
  const product1 = getProductHtmlCode(product1Name, product1Price,product1ImageUrl);
  const product2 = getProductHtmlCode(product2Name, product2Price,product2ImageUrl);
  const product3 = getProductHtmlCode( product3Name, product3Name, product3ImageUrl);
  productElement.innerHTML += product1 + product2 + product3;
}
paintProducts();

// paint carts itmes

const cartElement = document.querySelector('.js-cart');
function getCartItemHtmlCode (name, price, quantity) {
  let htmlCode = '';
  htmlCode += `<tr>` ;
  htmlCode += `<td> ${name} </td>`;
  htmlCode += `<td> ${price} </td>`;
  htmlCode += `<td class="btn-plus-n-minus">`;
  htmlCode += `<button class="js-dec-btn card_btn"> - </button>`;
  htmlCode += `${quantity}`;
  htmlCode += `<button class="js-dec-btn card_btn"> + </button>`;
  htmlCode += `</td>`;
  htmlCode += `<td class="text-align-right"> ${price * quantity}€</td>`;
  htmlCode += `</tr>`;
  return htmlCode;
}
function getCartTotalHtmlCode (totalPrice) {
  let htmlCode = '';
  htmlCode += `<tr class="text--bold">` ;
  htmlCode += `<td> Total </td>`;
  htmlCode += `<td colspan="3" class="text-align-right"> ${totalPrice}€</td>`;
  htmlCode += `</tr>`;
  return htmlCode;
}
function paintCartItems() {
  const totalPrice = product1Price * product1Quantity + product2Price * product2Quantity + product3Price * product3Quantity;
  const item1 = getCartItemHtmlCode(product1Name, product1Price, product1Quantity);
  const item2 = getCartItemHtmlCode(product2Name, product2Price, product2Quantity);
  const item3 = getCartItemHtmlCode(product3Name, product3Name, product3Quantity);
  const total = getCartTotalHtmlCode(totalPrice);
  cartElement.innerHTML = item1 + item2 + item3 + total;
}
paintCartItems();