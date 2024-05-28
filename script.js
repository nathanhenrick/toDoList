const inputText = document.getElementById("inputText");
const form = document.getElementById("form");
const generalContainer = document.querySelector("#generalContainer");
// const close = document.querySelector(".fi-br-cross");
// const checked = document.querySelector(".check");
//*---------------------------------------------------------*//

form.addEventListener("submit", function (e) {
  let checked = document.createElement("input");
  let parag = document.createElement("p");
  let cross = document.createElement("i");

  e.preventDefault();

  const ul = document.createElement("ul");
  const li = document.createElement("li");
  li.className = "dataList";

  ul.appendChild(li);

  checked.type = "checkbox";
  checked.className = "check";

  parag.textContent = inputText.value;

  cross.className = "fi fi-br-cross";

  li.appendChild(checked);
  li.appendChild(parag);
  li.appendChild(cross);

  generalContainer.appendChild(ul);

  if (inputText.value.length > 0 && inputText.value.length < 21) {
    inputText.value = "";
  } else {
  }
  checked.addEventListener("click", function (event) {
    const checkBoolean = event.target.checked;
    if (checkBoolean === true) {
      parag.style.textDecoration = "line-through";
    } else {
      parag.style.textDecoration = "none";
    }
  });
});


// cross.addEventListener('click', function(event) {

// });
