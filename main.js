let shop = document.getElementById('shop');


let shopItemsData= [{
    id: "identity1",
    name: "Dress",
    price: 5000,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    img: "images/eimg-1.webp"
},
{
    id: "identity2",
    name: "Skirt",
    price: 2000,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    img: "images/img-2.jpg"
},
{
    id: "identity3",
    name: "Top",
    price: 2000,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    img: "images/img-3.jpg"
},
{
    id: "identity4",
    name: "Plain Tees",
    price: 1500,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    img: "images/img-4.webp"
},
{
    id: "identity5",
    name: "Jacket",
    price: 10000,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    img: "images/img-5.webp"
},
];

let generateshop = () => {
    return (shop.innerHTML = shopItemsData
        .map((y) => {
            let {id, name, price, desc, img} = y
            let search = basket.find((y) => y.id === id)  [];
        return `
        <div id=product-id-${id} class="item">
        <img width="220" height="300" src=${img} alt="">
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

generateshop();

let increment = (id) => {
    let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

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
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);
  
  localStorage.setItem("data", JSON.stringify(basket));
};
let update = (id) => {
  let search = basket.find((x) => x.id === id);
  
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();