let cartBtn = document.querySelector('.update-cart');
let cartItems = document.querySelector('.cart-items');

document.querySelector('.clear-cart').addEventListener('click', () => {
  localStorage.removeItem('products');
  localStorage.removeItem('totalMoney');
  window.location.reload();
})


let products = [];
let totalMoney;
if(localStorage.getItem('totalMoney')){
  totalMoney = JSON.parse(localStorage.getItem('totalMoney'));
}
console.log(totalMoney)

if(localStorage.getItem('products')){
  products = JSON.parse(localStorage.getItem('products'));
}

(function(){
  products.forEach((i) => {
  cartItems.innerHTML += `
    <div class='cart-text'>
    <p>${i.name}</p>
    <p class="cart-item-price">Rs. ${i.price}</p>
    </div>
  `;
})
  document.querySelector('.cart-total').textContent = `${totalMoney === undefined ? "Your cart is empty..." : "Total: Rs. "+totalMoney}`;

})();


if(totalMoney !== undefined){
  document.querySelector('.clear-cart').style.display = "block";
  document.querySelector('.cart-title').style.display = "block";
}


cartBtn.addEventListener('click', (event) => {
  alert(cartBtn.getAttribute('data-product') + ', added to your cart ' + "📦");
  
  let productName = event.target.parentElement.children[0].innerHTML
  let price = event.target.parentElement.children[2].children[1].innerHTML.slice(4)
  
  // local storage

  const item = {};
  item.name = productName;
  item.price = price;



  products.push({'name' : productName, 'price' : price});
  localStorage.setItem('products', JSON.stringify(products));
  
  // localStorage.removeItem('products')



  

  showTotal();

  function showTotal() {
    const total = [];
    // const items = document.querySelectorAll('.cart-item-price');
    // console.log(items)
    // items.forEach(function(item){
    //   let itemFloat = parseInt(item.innerHTML.slice(4));
    //   total.push(itemFloat);      
    // })

    products.forEach((i) => {
      let itemFloat = parseFloat(i.price);
      total.push(itemFloat);
    })

    
    totalMoney = total.reduce(function(total, item){
      total += item;
      return total;
    }, 0)

    localStorage.setItem('totalMoney', JSON.stringify(totalMoney))
    
    window.location.reload();
  };
})


{/* <h3 style=" font-style: italic; font-family: 'Arapey', serif;">Your cart is empty</h3> */}


