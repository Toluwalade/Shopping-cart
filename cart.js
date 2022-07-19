let label = document.getElementById("label");
let shoppingCart = document.getElementById("shopping-cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((p) => p.item).reduce((p,q) => p + q, 0);
  };
  
  calculation();

  let generateCartItems = () => {
      if (basket.length !== 0) {
        return (shoppingCart.innerHTML = basket
            .map((p) => {
                let {id, item} = p;
                let search = shopItemsData.find((q) => q.id ===id) || [];
                let {img, name, price} = search;
          return `
          <div class="cart-item">
          <img width="300" height="150" src=${img} alt="" />
           <div class="details">

               <div class="title-price-x">
                <h4>
               <p>${name}</p>
                <p class="cart-item-price"># ${price}</p>
                </h4>
                <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
               </div>


               <div class="buttons">
              <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
              <div id=${id} class="quantity">${item}</div>
              <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
          </div>
    

             <h3># ${item * price}</h3>
           </div>
          </div>
          `;
        }).join(""));
      } else {
          shoppingCart.innerHTML = ``;
          label.innerHTML = `
          <h2>Empty Cart</h2>
          <a href="index.html">
          <button class="HomeBtn">Return to Home</button>
          </a>
          `;
      }

  };

  generateCartItems();

  let increment = (id) => {
    let selectedItem = id; 
    let search = basket.find((p) => p.id === selectedItem.id);
    
    if (search === undefined) {
      basket.push({
        id: selectedItem.id,
        item: 1,
      });
    } else {
      search.item += 1;
    }
  
    generateCartItems();
    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(basket));
  };
  
  let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((p) => p.id === selectedItem.id);
    
    if(search === undefined) return;
    else if (search.item === 0) return; 
     else {
      search.item -= 1;
    }
   
    update(selectedItem.id);
    basket = basket.filter((p) => p.item !== 0);
    generateCartItems();
    localStorage.setItem("data", JSON.stringify(basket));
  };

  let update = (id) => {
    let search = basket.find((p) => p.id === id);
    document.getElementById(id).innerHTML = search.item;
    calculation();
    totalAmount();
  };

  let removeItem = (id) => {
      let selectedItem = id;
      basket = basket.filter((p) => p.id !== selectedItem.id);
      generateCartItems();
      totalAmount();
      localStorage.setItem("data", JSON.stringify(basket));
  };

  let clearCart = () => {
    basket = [];
    generateCartItems();
    localStorage.setItem("data", JSON.stringify(basket));
  };

  let totalAmount = () => {
    if (basket.length !== 0) {
        let amount = basket
          .map((p) => {
            let { item, id } = p;
            let search = shopItemsData.find((q) => q.id === id) || [];
    
            return item * search.price;
          })
          .reduce((p, q) => p + q, 0);
        label.innerHTML = `
        <h2>Total Bill : # ${amount}</h2>
        <button class="checkout">Checkout</button>
        <button onclick="clearCart()" class="removeAll">Clear Cart</button>
        `;
      } else return;
    };
    
    totalAmount();