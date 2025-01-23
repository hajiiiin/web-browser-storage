const totalItemCountInCartText = document.querySelector(
  "#total-item-count-in-cart"
);

function getTotalItemCount() {
  // 현재 장바구니에 담겨 있는 아이템 목록을 가져와서 아이템들의 총 개수를 계산합니다.
  const cartItems = JSON.parse(sessionStorage.getItem("cart-items")) ?? {};
  let totalItemCount = 0;
  for (const itemCount of Object.values(cartItems)) {
    totalItemCount += itemCount;
  }
  return totalItemCount;
}

function setInitialValues() {
  totalItemCountInCartText.innerHTML = getTotalItemCount();
}

function handleAddClick(button) {
  const itemName = button.dataset["itemName"];
  // 현재 장바구니에 있는 아이템 리스트를 받아 옵니다.
  const cartItems = JSON.parse(sessionStorage.getItem("cart-items")) ?? {};

  // 새로 추가된 아이템을 포함하여 장바구니 아이템 리스트를 업데이트하고,
  cartItems[itemName] = (cartItems[itemName] ?? 0) + 1;
  // 변경된 아이템 리스트를 세션 스토리지에 저장해 줍니다.
  sessionStorage.setItem("cart-items", JSON.stringify(cartItems));

  totalItemCountInCartText.innerHTML = getTotalItemCount();
}

function handleCartClick(e) {
  e.preventDefault();
  const totalItemCountInCart = getTotalItemCount();
  window.location.href = totalItemCountInCart
    ? "./shopping-cart.html"
    : "./empty-shopping-cart.html";
}

function setEventListeners() {
  const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => handleAddClick(button));
  });

  const goToShoppingCartLink = document.querySelector("#go-to-shopping-cart");
  goToShoppingCartLink.addEventListener("click", handleCartClick);
}

setInitialValues();
setEventListeners();
