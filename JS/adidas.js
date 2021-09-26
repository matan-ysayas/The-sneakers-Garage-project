let adidasPageContiner = document.getElementById("container");
let shoeImagesBox = document.getElementsByClassName("shoeImagesBox");

for (let i = 0; i < Products.length; i++) {
  if (Products[i].category == "adidas") {
    adidasPageContiner.innerHTML += `<article class="ShoeBox"> 
        <div class="shoeImagesBox"></div>
        <div class="shoeInfo">
        <h1><span>${Products[i].name}</span></h1>
        <P><span>description:</span>${Products[i].Description}</p>
        <P>id number:${Products[i].id}</P>
        <h2>price:<span class="priceSpan">${Products[i].price}$</span></h2>
        </div>   
        <div class="btnBox">
        <button class="addButton">Add To Cart</button>
        <button class="removeButton">Remove From Cart</button>
        </div>                   
        </article>`;
    for (let j = 0; j < Products[i].images.length; j++) {
      shoeImagesBox[shoeImagesBox.length - 1].innerHTML+= `<img src=${Products[i].images[j]} class="shoeTwoImgs" >`;
    }
  }
}

const addToCart = document.getElementsByClassName("addButton");
const removeFromCart = document.getElementsByClassName("removeButton");
let PageCart = [];
let alertBox = document.getElementById("alertBox");
let totalToPay = 0;

for (let i = 0; i < addToCart.length -1; i++) {
  addToCart[i].onclick = () => {
    PageCart.push(Products[i]);
    totalToPay += Products[i].price;
    alertBox.innerHTML = `<div id="popUpDiv"><h2>Your selection has been added to cart</h2>
        <h1>item price :<span id="productsPriceSpan"> ${Products[i].price}$</span></h1>
        <h1> total to pay :<span id="totalPriceSpan">${totalToPay}$</span></h1></div>
        `;
    let counter = 0;
    let intervaleId = window.setInterval(() => {
      counter++;
      alertBox.style.left = "0%";
      if (counter >= 2) {
        clearInterval(intervaleId);
        alertBox.style.left = "-100%";
      }
    }, 2000);
  };
}

for (let i = 0; i < removeFromCart.length; i++) {
  removeFromCart[i].onclick = () => {
    for (let j = 0; j < PageCart.length; j++) {
      if (PageCart[j] == Products[i]) {
        PageCart.splice(j, 1);
      }
    }
    totalToPay -= Products[i].price;
    alertBox.innerHTML = `<div id="popUpDiv"><h2>Your selection has been removed from cart</h2>
            <h1>item price :<span id="productsPriceSpan">${Products[i].price}$</span></h1><br>
            <h1> total to pay :<span id="totalPriceSpan">${totalToPay}$</span></h1></div>
            `;
    let counter = 0;
    let intervaleId = window.setInterval(() => {
      counter++;
      alertBox.style.left = "0%";
      if (counter >= 2) {
        clearInterval(intervaleId);
        alertBox.style.left = "-100%";
      }
    }, 2000);
  };
}






