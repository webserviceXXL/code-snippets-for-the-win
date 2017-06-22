(function(fn){var d=document;(d.readyState=='loading')?d.addEventListener('DOMContentLoaded',fn):fn();})(function(){
  document.getElementById("paypal-express-checkout-btn").style.visibility = "hidden";

  var hideBtn = document.getElementsByClassName('alt-payment-list-container'), i;
  for (var i = 0; i < hideBtn.length; i ++) {
      hideBtn[i].style.display = 'none';
  }
});