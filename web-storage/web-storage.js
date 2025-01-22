function changeBoxColor(color) {
  const box = document.getElementById("box");
  box.style["background-color"] = color;
}

function changeBoxBorderColor(borderColor) {
  const box = document.getElementById("box");
  box.style["border-color"] = borderColor;
}

function setInitialValues() {
  // 로컬 스토리지에 저장된 값이 있으면 해당 값으로 설정하고, 없다면 기본 "#ff0000"로 지정합니다.
  const currentBoxColor = localStorage.getItem("box-color") ?? "#ff0000";
  // 로컬 스토리지에 저장된 값이 있으면 해당 값으로 설정하고, 없다면 기본 "#000000"으로 지정합니다.
  const currentBoxBorderColor =
    localStorage.getItem("box-border-color") ?? "#000000";

  document.getElementById("box-color").value = currentBoxColor;
  document.getElementById("box-border-color").value = currentBoxBorderColor;

  changeBoxColor(currentBoxColor);
  changeBoxBorderColor(currentBoxBorderColor);
}

function setEventListeners() {
  const boxColorSelector = document.querySelector("#box-color");
  boxColorSelector.addEventListener("change", (e) => {
    // 박스 색깔이 바뀌면 로컬 스토리지에 저장된 값을 업데이트해 주세요.
    localStorage.setItem("box-color", e.target.value);
    changeBoxColor(e.target.value);
  });

  const boxBorderColorSelector = document.querySelector("#box-border-color");
  boxBorderColorSelector.addEventListener("change", (e) => {
    // 박스 테두리가 바뀌면 로컬 스토리지에 저장된 값을 업데이트해 주세요.
    localStorage.setItem("box-border-color", e.target.value);
    changeBoxBorderColor(e.target.value);
  });
}

setInitialValues();
setEventListeners();
