const input = document.querySelector("input");

const ul = document.querySelector("ul");
const li = document.createElement("li");

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    li.textContent = input.value;
    console.log(li);
    ul.appendChild(li);
  }
});
