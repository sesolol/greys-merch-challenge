let cart = 0;

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


name:"Rex's Totally Safe Toolkit",
price: 24.99, 
image: "images/rex-toolkit.png",
description:"A basic starters tool kit which comes with everything you need to assemble some of Rex's coolest creations on your own! Comes in both Bug and Mayor varieties. (Mayor kit not pictured.) Even once you've done the crafts, you get to keep your own custom wooden toolbox patterned to match Rex's iconic hairstyle!",
badge: "Limited Edition!",
rating:2
},

{

name:"The Deep's guide on sex, pregnancy, teenage changes, living a sigma life and removing the testacles from a whale",
price: 18.99,
image: "images/latest.png",
description: "The Vought approved guide by The Deep himself!",
badge: "Parental advisory recommended",
rating: 4
},
{
name: "Kick the Brianna!",
price: 14.99,
image: "images/kick-the-brianna.png",
description: "after kick-the-buddy became a popular mascot, the infamous reality show's least favorite ended up with a kick-the-brianna! now take ALL your anger out on her. it's okay, she's not scared.",
badge: "Fan Favourite!",
rating: 7


}
];

const productContainer = document.getElementById("products")

products.forEach(product=>{

    productContainer.innerHTML += `

    <div class="card">

      <div class="badge">
        ${product.badge}
      </div>
       
      
      <img class="productImage" src="${product.image}" alt="${product.name}">
         
        <h3>${product.name}</h3>
        <div class="rating">
        ${"★".repeat(product.rating)}
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