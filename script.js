// an array with all of our cart items

var total = 0;
var STORAGE_ID = 'shoppingcart';

var addFromStorage = Number(localStorage.getItem('tot'));

if (addFromStorage !== 0){
  var total= addFromStorage;
}

var getFromLocalStorage = function () {
    return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
  }


var cart = {
  items : getFromLocalStorage()
  
  };



var saveToLocalStorage = function () {
  localStorage.setItem(STORAGE_ID, JSON.stringify(cart.items));
  };

var updateCart = function () {
  $('.cart-list').empty();
  var source = $('#cart-template').html();
  var template = Handlebars.compile(source);
  var newHTML = template(cart);

$('.cart-list').append(newHTML);

  document.getElementById('total').innerHTML = total;
  saveToLocalStorage();
}


var addItem = function (item,price) {

  var item = {
    item:item,
    price:price
  };
   
  total += item.price;
  cart.items.push(item); 
  

  if (total !== 0){
    localStorage.setItem('tot', total);

  }


  // for (var i = 0; i<cart.items.length ; i++){
  //   total += cart.items[i].price;
  // }
  // var showTotal = total + addFromStorage;
  document.getElementById('total').innerHTML = total;
  saveToLocalStorage();
 
  
}

var clearCart = function () {
  // cart.items.splice(0,cart.items.length);
  cart.items=[];
  $('.cart-list').empty();
  total = 0;
  localStorage.setItem('tot', total);


  document.getElementById('total').innerHTML = total;

  saveToLocalStorage();
  
  
}


var removeItem = function(derp){
  
  total -= cart.items[derp].price;
   localStorage.setItem('tot', total);
  //  if (total !== 0){
   

  // }
  console.log(cart.items[derp].price);
  cart.items.splice(derp ,1);
  
  console.log(cart.items);
  updateCart();


}

$('.view-cart').on('click', function () {
  $('.shopping-cart').toggleClass('show');
  document.getElementById('total').innerHTML = localStorage.getItem('tot');
});



$('.add-to-cart').on('click', function () {
  var item = $(this).closest('.card').data().name;
  var price = $(this).closest('.card').data().price;
  // var itemPrice = "  $"+price;

  addItem(item,price);
  updateCart();
});



$('.shopping-cart').on('click','.clear-cart', function(){
  clearCart();

});

$(".cart-list").on('click','.remove-item', function(){
  // 
  var derp = $(this).closest('span').closest('.derp').index();
  removeItem(derp);

});

// update the cart as soon as the page loads!
updateCart();