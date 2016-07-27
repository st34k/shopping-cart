// an array with all of our cart items
var total = 0;
var cart = {
  items : []
  
  };

var updateCart = function () {
  $('.cart-list').empty();
  var source = $('#cart-template').html();
  var template = Handlebars.compile(source);
  var newHTML = template(cart);

$('.cart-list').append(newHTML);
}


var addItem = function (item,price) {
  var item = {
    item:item,
    price:price
  };

  total+=item.price;
  cart.items.push(item); 

  document.getElementById('total').innerHTML = total;
 
  
}

var clearCart = function () {
  // cart.items.splice(0,cart.items.length);
  cart.items=[];
  $('.cart-list').empty();
  total = 0;
  document.getElementById('total').innerHTML = total;
  
  
}


var removeItem = function(removeitem){
  // console.log($(removeitem).closest('.added-item'));
  var $toRemove = $(removeitem).closest('.added-item');
  $(removeitem).closest('.added-item').remove();
  // var index = $.inArray($toRemove.val());
  console.log(index);


}

$('.view-cart').on('click', function () {
  $('.shopping-cart').toggleClass('show');
});



$('.add-to-cart').on('click', function () {
  var item = $(this).closest('.card').data().name;
  var price = $(this).closest('.card').data().price;
  // var itemPrice = "  $"+price;
  addItem(item,price);
  updateCart();
});

// $('.clear-cart').on('click', function () {
//   clearCart();
// });

$('.shopping-cart').on('click','.clear-cart', function(){
  clearCart();

});

$(".cart-list").on('click','.remove-item', function(){
  removeItem(this);

});

// update the cart as soon as the page loads!
updateCart();