"use strict";

const input = document.querySelector(".main__input");
const items = document.querySelector(".items");
const form = document.querySelector(".main__form");

// 삭제버튼용 id
let id = 0;

//리스트 만들기
function createItem(text) {
  const itemList = document.createElement("li");
  itemList.setAttribute("class", "itemList");
  itemList.setAttribute("data-id", id);

  itemList.innerHTML = `
    <div class="item">
      <span class="item__name">${text}</span>
      <button class="item__del">
      <i class="fas fa-trash-alt" data-id=${id}></i>
      </button>
    </div>
  `;
  id++;
  return itemList;
}

//리스트 추가
function addItem() {
  const text = input.value;

  if (text === "") {
    return;
  }

  const item = createItem(text);
  items.append(item);
  input.value = "";
  input.focus();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addItem();
});

items.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (id) {
    const deleteList = document.querySelector(`.itemList[data-id="${id}"]`);
    deleteList.remove();
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addItem();
});
