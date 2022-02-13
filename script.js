const input = document.querySelector("input");

const ul = document.querySelector("ul");

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const li = document.createElement("li");
    li.textContent = input.value;
    ul.appendChild(li);
    input.value = "";
  }
});
