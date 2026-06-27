for (let i = 0; i < 75; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 4 + "vh";
    star.style.animationDelay = Math.random() * 4 + "s";
    document.body.appendChild(star);
}
const products = [

{


name:"I dunno",
price: 0, 
image: "hi",
description:"Waiting for merch submissions..."
}

];

const productContainer = document.getElementById("products")

products.forEach(product=>{

    productContainer.innerHTML += `

    <div class="card">

      <div class="badge">
       BEST SELLER
      </div>
       <div class="emoji">
          ${product.image}

        </div>

        <h3>${product.name}</h3>
        <div class="rating">
        ★★★★★
        </div>
        <p>${product.description}</p>

        <h2>${product.price}</h2>

        <button class="addCart">Add to Cart</button>

    </div>

    `;

});

document
.getElementById("cartBtn")
  .onclick = function(){
    

    alert(


    `PAYMENT FAILED

    reason:
    Your team spent too much money at the auction yeseterday 😢`



        );

    }

    const cartBtn = document.getElementById("cartBtn");
    const addButtons = document.querySelectorAll(".addCart");

    addButtons.forEach(button => {
                             
     button.addEventListener("click",() => {

        cart++;

        cartBtn.textContent = `Your Cart (${cart})`

     });


    });