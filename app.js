const btn = document.querySelector(".btn");
const ul = document.querySelector(".ul-wrap");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const input = document.querySelector(".input");

  if (input.value) {
    const data = [{ description: input.value }];
    addList(data);
  }

  if (input.value == "") {
    alert("Siz malumot kiritmadingiz iltimos molumot kiriting");
  }

  input.value = "";
});

function addList(listData = []) {
  listData.forEach((list) => {
    const li = document.createElement("li");
    const h = document.createElement("h2");
    const ic = document.createElement("i");
    const div = document.createElement("div");
    const div2 = document.createElement("div");
    const check = document.createElement("i");

    div.classList.add(
      "rounded-full",
      "w-4",
      "h-4",
      "border",
      "border-gray-500"
    );

    div2.classList.add("flex", "gap-4", "items-center");
    div2.append(div, h);

    ic.classList.add("fa-solid", "fa-xmark");
    li.classList.add("flex", "justify-between", "items-center", "mt-2");
    ic.classList.add("i");
    li.append(div2, ic);
    

    ic.addEventListener("click", () => {
      ul.removeChild(li);
    });

    li.addEventListener("click", () => {
      h.classList.toggle("line");
      div.classList.toggle("color");
      check.classList.toggle("fa-solid");
      check.classList.toggle("fa-check");
      check.classList.toggle("check");
      div.appendChild(check);
      div.classList.add("flex", "items-center", "justify-center");
      
    });

    h.textContent = list.description;
    ul.appendChild(li);
  });
}
