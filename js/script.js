let Col2 = document.querySelector("#col2");
let Col3 = document.querySelector("#col3");
let Col4 = document.querySelector("#col4");
let Col5 = document.querySelector("#col5");
let changeItem = document.querySelectorAll(".change-item");
let hamMenu = document.querySelector(".hamburger-menu");

function hamburgerMenu() {
  let menuShow = document.querySelector(".ham-menu-side");
  if (menuShow.style.display === "none") {
    menuShow.style.display = "block";
  } else {
    menuShow.style.display = "none";
  }
}
function col2() {
  changeItem.forEach(function (item) {
    item.classList.remove("col-md-4");
    item.classList.remove("col-md-3");
    item.classList.remove("col-md-2");
    item.classList.add("col-md-6");
  });
}
function col3() {
  changeItem.forEach(function (item) {
    item.classList.remove("col-md-2");
    item.classList.remove("col-md-3");
    item.classList.remove("col-md-6");
    item.classList.add("col-md-4");
  });
}
function col4() {
  changeItem.forEach(function (item) {
    item.classList.remove("col-md-2");
    item.classList.remove("col-md-4");
    item.classList.remove("col-md-6");
    item.classList.add("col-md-3");
  });
}
function col5() {
  changeItem.forEach(function (item) {
    item.classList.remove("col-md-4");
    item.classList.remove("col-md-3");
    item.classList.remove("col-md-6");
    item.classList.add("col-md-2");
  });
}
//
var deadline = new Date("dec 31, 2020 15:37:25").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var t = deadline - now;
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((t % (1000 * 60)) / 1000);
  document.getElementById("day").innerHTML = days;
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;
  if (t < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "TIME UP";
    document.getElementById("day").innerHTML = "0";
    document.getElementById("hour").innerHTML = "0";
    document.getElementById("minute").innerHTML = "0";
    document.getElementById("second").innerHTML = "0";
  }
}, 1000);

let quantity = document.getElementById("quantity");
function addQuantity() {
  if (quantity.value <= 9) quantity.value++;
  finalFee.innerHTML = productFee * parseInt(quantity.value);
}
function removeQuantity() {
  if (quantity.value >= 2) quantity.value--;
  finalFee.innerHTML = productFee * parseInt(quantity.value);
}
let productFee = parseInt(document.getElementById("product-fee").innerHTML);
let finalFee = document.getElementById("final-fee");
finalFee.innerHTML = productFee * parseInt(quantity.value);

let detail = document.querySelector(".product-discribe-detail");
let review = document.querySelector(".product-discribe-review");
let shipping = document.querySelector(".product-discribe-shipping");
let detailSelect = document.querySelector(".product-detail-a");
let reviewSelect = document.querySelector(".product-review-a");
let shippingSelect = document.querySelector(".product-shipping-a");
function proDetail() {
  review.style.display = "none";
  shipping.style.display = "none";
  detail.style.display = "block";
  detailSelect.classList.add("current-discribe");
  reviewSelect.classList.remove("current-discribe");
  shippingSelect.classList.remove("current-discribe");
}
function proReview() {
  detail.style.display = "none";
  shipping.style.display = "none";
  review.style.display = "block";
  detailSelect.classList.remove("current-discribe");
  reviewSelect.classList.add("current-discribe");
  shippingSelect.classList.remove("current-discribe");
}
function proShipping() {
  detail.style.display = "none";
  review.style.display = "none";
  shipping.style.display = "block";
  detailSelect.classList.remove("current-discribe");
  reviewSelect.classList.remove("current-discribe");
  shippingSelect.classList.add("current-discribe");
}

// function invenroryShow() {
//   let inventory = document.querySelector(".product-table");
//   inventory.style.display = "block";
//   inventory.style.transitionDuration = "1s";
// }
