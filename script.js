// Task 1

const element = document.querySelector(".new");

const mynewhr = document.createElement("hr");
mynewhr.className = "hr-line";

const mynewhead = document.createElement("h2");
mynewhead.className = "new-head";
mynewhead.textContent = "This is my custom heading";

const mynewpara = document.createElement("p");
mynewpara.className = "new-p";
mynewpara.textContent = "This is my custom paragraph";

element.appendChild(mynewhr);
element.appendChild(mynewhead);
element.appendChild(mynewpara);

element.style.overflowY = "scroll";

// Task 2

document.body.style.backgroundImage = "none";

// Task 3

const element2 = document.querySelector("nav button");
element2.addEventListener("click", myFunction);

function myFunction() {
    var x = document.querySelector("#navbarTogglerDemo01");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}
