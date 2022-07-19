let shop = document.getElementById("shop");


let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop =()=>{
  return (shop.innerHTML = shopItemsData
    .map((p) => {
      let {id, name, price, desc, img} = p;
      let search = basket.find((p) => p.id === id) || [];
     return `
    <div id=product-id-${id} class="item">
      <img width="220" height="300" src="${img}" alt="">
      <div class="details">
       <h3>${name}</h3>
       <p>${desc}</p>
        <div class="price-tag"> 
         <h3># ${price}</h3>
          <div class="buttons">
           <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
           <div id=${id} class="quantity">
           ${search.item === undefined ? 0 : search.item}
           </div>
           <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
          </div>
        </div>
      </div>
    </div>
    `;
  })
  .join(""));
};

generateShop();

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
  localStorage.setItem("data", JSON.stringify(basket));
};
  
let update = (id) => {
  let search = basket.find((p) => p.id === id);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((p) => p.item).reduce((p,q) => p + q, 0);
};

calculation();