const inputText = document.getElementById("inputText");
const form = document.getElementById("form");
const generalContainer = document.querySelector("#generalContainer");

//*---------------------------------------------------------*//

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (inputText.value.length === 0 && inputText.value.length < 21) {
    return alert("Por favor, insira de 1 e 20 caracteres.");
  }
  const ul = document.createElement("ul");
  const li = document.createElement("li");
  li.className = "dataList";

  ul.appendChild(li);

  let checked = document.createElement("input");
  let parag = document.createElement("p");
  let cross = document.createElement("i");

  checked.type = "checkbox";
  checked.className = "check";

  parag.textContent = inputText.value;

  cross.className = "fi fi-br-cross";

//   let edit = document.createElement("i");
//   edit.className = "fi fi-rr-edit";

  li.appendChild(checked);
  li.appendChild(parag);
//   li.appendChild(edit);
  li.appendChild(cross);

  generalContainer.appendChild(ul);

  checked.addEventListener("click", function (event) {
    const checkBoolean = event.target.checked;
    if (checkBoolean === true) {
      parag.style.textDecoration = "line-through";
    } else {
      parag.style.textDecoration = "none";
    }
  });

  cross.addEventListener("click", function () {
    ul.removeChild(li);
    if (ul.children.length === 0) {
      generalContainer.removeChild(ul);
    }
  });
  inputText.value = "";
});
