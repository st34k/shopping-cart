// an array with all of our cart items
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
    price: "$"+price
  };

  cart.items.push(item); 
  // updateCart();
  
}

var clearCart = function () {
  // TODO: finish
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

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();