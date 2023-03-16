let inputDOM = document.querySelector("#task");
let buttonDOM = document.querySelector(".button");
let ulDOM = document.querySelector("#list");

function newElement() {
  if (!inputDOM.value || !inputDOM.value.trim()) {
    $(".error").toast("show");
  } else {
    $(".success").toast("show");
    let liDOM = document.createElement("li");
    let deleteButton = document.createElement("button");

    deleteButton.innerText = "x";

    deleteButton.classList.add("del");

    liDOM.innerHTML = inputDOM.value;

    ulDOM.appendChild(liDOM);
    liDOM.append(deleteButton);

    liDOM.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center",
      "mt-2"
    );
    inputDOM.value = " ";

    deleteButton.addEventListener("click", function () {
      ulDOM.removeChild(liDOM);
    });
    let count = 0;

    liDOM.addEventListener("click", function () {
      liDOM.classList.toggle("deneme");
      if (count % 2 === 0) {
        liDOM.style.backgroundColor = "lightgreen";
      } else {
        liDOM.style.backgroundColor = "white";
      }
      count++;
    });
  }
}
