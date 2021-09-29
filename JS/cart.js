const tableContainer=document.getElementById("tableContainer");



tableContainer.innerHTML=`
<table id="cartTable" >
        <tr>
            <th>ITEM NAME</th>
            <th>PRICE</th>
            <th>IMG</th>
        </tr>
        <tr class="tableRow">
        <td class="productsNameTd">${Products[9].name}</td>
        <td class="productsPriceTd">${Products[9].price}$</td>
        <td class="productsImgTd"><img src="${Products[9].images[0]}"class="productsImg"></td>
        <td><button class="removeFromCartBut">remove</button></td>
        </tr>
        <tr class="tableRow">
        <td class="productsNameTd">${Products[18].name}</td>
        <td class="productsPriceTd">${Products[18].price}$</td>
        <td class="productsImgTd"><img src="${Products[18].images[0]}"class="productsImg"></td>
        <td><button class="removeFromCartBut">remove</button></td>
        </tr>
        <tr class="tableRow">
        <td class="productsNameTd">${Products[32].name}</td>
        <td class="productsPriceTd">${Products[32].price}$</td>
        <td class="productsImgTd"><img src="${Products[32].images[0]}" class="productsImg"></td>
        <td><button class="removeFromCartBut">remove</button></td>
        </tr>
</table>
<section id="totalPriceContainer" >
</section>


`


let productsPriceTd=document.getElementsByClassName("productsPriceTd");
let totalPrice=0;
let totalPriceContainer=document.getElementById("totalPriceContainer");
let removeFromCartBut=document.getElementsByClassName("removeFromCartBut");
let tableRow=document.getElementsByClassName("tableRow");






for(let i=0;i<removeFromCartBut.length;i++){
    removeFromCartBut[i].onclick=()=>{
        tableRow[i].style.display="none";
        totalPrice -= parseInt(productsPriceTd[i].innerText);
        console.log(totalPrice);
    totalPriceContainer.innerHTML=`<h1> TOTAL TO PAY :${totalPrice}$</h1>`

    }

}




function totalToPay(){
    for(let i=0;i<productsPriceTd.length;i++){
        totalPrice+= parseInt(productsPriceTd[i].innerText);
       
    }
    return totalPrice;

}

totalToPay();

totalPriceContainer.innerHTML=`<h1> TOTAL TO PAY :${totalPrice}$</h1>`
