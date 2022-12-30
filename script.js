"use strict";

let select = function () {
  let selectHeader = document.querySelectorAll(".select_header");
  let selectItem = document.querySelectorAll(".select_item");
  
  
  selectHeader.forEach(item => {
    item.addEventListener("click", selectToggle);
  });
  
  selectItem.forEach(item => {
    item.addEventListener("click", selectChoose);
  });
  
  
  function selectToggle() {
    this.parentElement.classList.toggle("is-active");
  }
  
  function selectChoose() {
    let text = this.innerText;
    let select = this.closest(".select");
    let currentText = select.querySelector(".select_current");
    currentText.innerText = text;
    select.classList.remove("is-active");
  }
  
  
/*  function selectChoose() {
    let text = document.querySelector(".select_item");
    let currentText = document.querySelector(".select_current");
    currentText.innerText = text.innerText;
  }
*/  
  
};

select();
