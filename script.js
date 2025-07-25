
let menu=document.querySelector(".menu-icon");

menu.onclick=()=>{
    menu.classList.toggle("move");
}

const preloadImages = [
    "images/category-6.png",
    "images/category-5.png",
    "images/category-4.png",
    "images/category-3.png",
    "images/category-2.png",
      "images/category-1.png",
  ];

  preloadImages.forEach(src => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = src;
    document.head.appendChild(link);
  });

 var swiper = new Swiper(".categorySwiper", {
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
    el: ".swiper-pagination", // ✅ ça fonctionne car tu l’as ajouté dans le HTML
    clickable: true,
     },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints:{
        280:{
            slidesPerView:1,
            spaceBetween:10,
        },
         580:{
            slidesPerView:2,
            spaceBetween:10,
        },
         750:{
            slidesPerView:3,
            spaceBetween:15,
        },
         900:{
            slidesPerView:4,
            spaceBetween:20,
        },
      },
    });

    document.getElementById("link").addEventListener("click",function(e){
       e.preventDefault();
       document.body.classList.add("fade-out");
       setTimeout(()=>{
          window.location.href=this.href;
       },500);
});


var swiper = new Swiper(".selling-slider",{
      autoplay: {
        delay:4000,
        disableOnInteraction: false,
      },
      pagination: {
    el: ".swiper-pagination", 
    clickable: true,
     },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints:{
        280:{
            slidesPerView:1,
            spaceBetween:10,
        },
         580:{
            slidesPerView:2,
            spaceBetween:10,
        },
         750:{
            slidesPerView:3,
            spaceBetween:15,
        },
         920:{
            slidesPerView:4,
            spaceBetween:20,
        },
      },
    });

const animate = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
});

animate.reveal(".nav, .heading, .hero-content h2");
animate.reveal(".backpack-content", { origin: "left" });
animate.reveal(".hero-img img,.hero-btn, .backpack-img, .btn img, .single-post", { origin: "bottom" });
animate.reveal(".category-box, .product-box, .brand-box, .blog-box, .link-box, .footer-box h3, .footer-box a, .footer-box p", {
  interval: 30
});





document.addEventListener("DOMContentLoaded", function () {
  const cartIcon = document.querySelector(".fa-shopping-cart");
  const cartSidebar = document.getElementById("cartSidebar");
  const cartClose = document.querySelector(".cart-close");
  const cartItems = document.getElementById("cartItems");

  if (cartIcon) {
    cartIcon.addEventListener("click", () => {
      cartSidebar.classList.add("active");
    });
  }

  cartClose.addEventListener("click", () => {
    cartSidebar.classList.remove("active");
  });

  const addToCartButtons = document.querySelectorAll(".ri-handbag-line");

  addToCartButtons.forEach((addToCartButton) => {
    addToCartButton.addEventListener("click", function (e) {
      e.preventDefault();

      const product = this.closest(".product-box");
      const title = product.querySelector("h2").textContent;

      const imgSrc = product.querySelector("img").src;
      const price = product.querySelector(".price h3").textContent;

      const cartItemHTML = `
        <div class="cart-item">
          <img src="${imgSrc}" alt="">
          <div>
            <h3>${title}</h3>
            <p>${price}</p>
          </div>
          <div class="quantity">
            <input type="number" class="nbr" value="1" min="1" style="width:50px;">
            <i class="ri-delete-bin-line remove-item" style="cursor:pointer; color:red; font-size:20px; margin-left:10px;"></i>
          </div>
        </div>
      `;

      cartItems.insertAdjacentHTML("beforeend", cartItemHTML);
      updateTotalPrice();
      cartSidebar.classList.add("active");
    });
  });

  cartItems.addEventListener("click", function (e) {
    if (e.target.classList.contains("remove-item")) {
      e.target.closest(".cart-item").remove();
      updateTotalPrice();
    }
  });

  cartItems.addEventListener("input",function(e){
       if(e.target.classList.contains("nbr")){
          updateTotalPrice();
       }
  });

  function updateTotalPrice(){
  const cartItemsList=cartItems.querySelectorAll(".cart-item");
  let total=0;
  cartItemsList.forEach(item=>{
    const priceText=item.querySelector("p").textContent;
    const price=parseFloat(priceText.replace("MAD","").trim());
    const quantity=parseInt(item.querySelector(".nbr").value);
  total+=price*quantity;
  });
  document.getElementById("totalPrice").textContent=total.toFixed(2)+"MAD";
};

function payement() {
  const priceElement = document.getElementById("totalPrice");
  const priceText = priceElement.textContent.trim();
  const price = parseFloat(priceText.replace("MAD", "").trim());

  if (isNaN(price)) {
    alert("Le prix total est invalide.");
    return;
  }

  localStorage.setItem("priceTotale", price);
  window.location.href = "payment.html";
}
  document.getElementById("payButton").addEventListener("click", payement);
});


