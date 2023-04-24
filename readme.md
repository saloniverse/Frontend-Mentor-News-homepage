# **DOM Assignment 09**
>**Note**: To complete all the given task.

## Tech Stack

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

---

## **Task 1**

To create a new content in sidebar and make them scrollable

### **Initial Output**

![](./ass8.1-before.png)

### **After Update**

![](./ass8.1-after.png)

### **Project Solution**

```
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
```

---

## **Task 2**

To remove background image

### **Initial Output**

![](./ass8.2-before.png)

### **After Update**

![](./ass8.2-after.png)

### **Project Solution**

```
document.body.style.backgroundImage = "none";
```

---

## **Task 3**

To make hamburger navbar work

### **Initial Output**

![](./ass8.3-before.png)

### **After Update**

![](./ass8.3-after.png)

### **Project Solution**

```
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
```

---