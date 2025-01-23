const dictionary = {
  apple: "사과",
  orange: "오렌지",
  banana: "바나나",
};

function addItemToList(name, num) {
  const cartItemList = document.getElementById("cart-item-list");
  const item = document.createElement("li");
  item.textContent = dictionary[name] + ": " + num + "개";
  cartItemList.append(item);
}

function createCartItemList() {
  // 장바구니에 담겨 있는 아이템 리스트를 가져옵니다.
  // const cartItems =

  for (const [key, value] of Object.entries(cartItems)) {
    addItemToList(key, value);
  }
}

function setInitialValues() {
  createCartItemList();
}

function setEventListeners() {
  const orderButton = document.querySelector("#order-btn");
  orderButton.addEventListener("click", () => {
    alert("주문이 완료되었습니다!");
    // 메인 화면으로 이동하기 전에 세션 스토리지에 저장되어 있는 데이터를 삭제해 주세요.
    window.location.href = "./index.html";
  });
}

setInitialValues();
setEventListeners();
