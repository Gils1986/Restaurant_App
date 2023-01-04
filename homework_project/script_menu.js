import { GoToUrl } from "./goToUrl.js";
import { MakeAlert } from "./makeAlert.js";

let goingToUrl_1 = new GoToUrl("userData.html", "btnDelivery");

let goingToUrl_2 = new GoToUrl("orderTable.html", "btnOrderTable");

let goingToUrl_3 = new GoToUrl("index.html", "btnMainPage");

let newMakeAlert = new MakeAlert(
  "btnGallery",
  "The site is under construction, you can try the 'Delivery' and 'Order a table' features"
);

let newMakeAlert_2 = new MakeAlert(
  "btnAbout",
  "The site is under construction, you can try the 'Delivery' and 'Order a table' features"
);

let products = [
  {
    id: 1,
    name: "Entrecote Steak",
    price: 119,
    image: "./pictures/entricute.webp",
    buttonAddDishId: "addDish1",
  },
  {
    id: 2,
    name: "Beef Fillet",
    price: 139,
    image: "./pictures/beefFillet.jpg",
    buttonAddDishId: "addDish2",
  },
  {
    id: 3,
    name: "Chicken Steak",
    price: 89,
    image: "./pictures/chickenSteak.jpg",
    buttonAddDishId: "addDish3",
  },
  {
    id: 4,
    name: "Hamburger",
    price: 79,
    image: "./pictures/hamburger.jpg",
    buttonAddDishId: "addDish4",
  },
  {
    id: 5,
    name: "Schnitzel",
    price: 59,
    image: "./pictures/schnitzel.jpg",
    buttonAddDishId: "addDish5",
  },
  {
    id: 6,
    name: "Roast beef sandwich",
    price: 69,
    image: "./pictures/roastBeef.jpg",
    buttonAddDishId: "addDish6",
  },
  {
    id: 7,
    name: "Chicken Pad Thai",
    price: 59,
    image: "./pictures/ChickenPadThai.webp",
    buttonAddDishId: "addDish7",
  },
  {
    id: 8,
    name: "Tofu Pad Thai",
    price: 49,
    image: "./pictures/tofu.jpg",
    buttonAddDishId: "addDish8",
  },
  {
    id: 9,
    name: "Sichuan Beef",
    price: 69,
    image: "./pictures/sichuanBeef.jpg",
    buttonAddDishId: "addDish9",
  },
];

let productsInShoppingCart = [];

class ButtonAddDish {
  #btnId;
  constructor(btnId) {
    this.#btnId = btnId;
    document.getElementById(this.#btnId).addEventListener("click", () => {
      //catch the buttons of addDish
      let productIndex = this.#btnId.substring("addDish".length) - 1;

      let i = 0;
      let found = false;
      for (i = 0; i < productsInShoppingCart.length; i++) {
        if (productsInShoppingCart[i].id == products[productIndex].id) {
          productsInShoppingCart[i].quantity =
            productsInShoppingCart[i].quantity + 1; //To multiple the quantity
          found = true;
          break;
        }
      }

      if (!found) {
        productsInShoppingCart.push({
          id: products[productIndex].id,
          name: products[productIndex].name,
          quantity: 1,
          price: products[productIndex].price, //To get the first quantity
        });
      }

      let shoppingCartWrapper = document.getElementById("shoppingCart"); //div from html
      shoppingCartWrapper.innerHTML = "";

      let shoppingCartProductDescription;

      productsInShoppingCart.forEach((product) => {
        shoppingCartProductDescription = document.createTextNode(
          product.quantity + " * " + product.name + " ... " + product.price
        );

        let shoppingCartDiv = document.createElement("div");
        let elP = document.createElement("p");
        elP.setAttribute("class", `product-${product.id}`);
        elP.innerHTML = shoppingCartProductDescription.textContent;
        shoppingCartDiv.appendChild(elP);

        let btnRemoveProduct = document.createElement("button");
        btnRemoveProduct.setAttribute("class", "btnRemoveProduct");
        btnRemoveProduct.innerText = "Remove dish";
        btnRemoveProduct.id = "btnRemoveProduct-" + product.id;
        btnRemoveProduct.addEventListener("click", () => {
          let productIdToRemove = btnRemoveProduct.id.substring(
            "btnRemoveProduct-".length
          );

          for (i = 0; i < productsInShoppingCart.length; ++i) {
            if (product.id === parseInt(productIdToRemove)) {
              if (product.quantity == 1) {
                productsInShoppingCart.splice(i, 1);
                let productDiv = document.querySelector(
                  `.product-${productIdToRemove}`
                );

                let productBtn = document.getElementById(
                  `btnRemoveProduct-${product.id}`
                );
                productBtn.remove();

                productDiv.remove();
                break;
              } else {
                product.quantity = --product.quantity;
                shoppingCartProductDescription =
                  product.quantity +
                  " * " +
                  product.name +
                  " ... " +
                  product.price;
                break;
              }
            }
          }

          let productDiv = document.querySelector(
            `.product-${productIdToRemove}`
          );

          if (productDiv !== null) {
            productDiv.innerHTML = shoppingCartProductDescription;
          }
        });

        shoppingCartDiv.appendChild(btnRemoveProduct);
        shoppingCartWrapper.appendChild(shoppingCartDiv);

        let totalBill = document.getElementById("bill");

        let totalBillValue = 0;
        productsInShoppingCart.forEach((product) => {
          totalBillValue = totalBillValue + product.price * product.quantity;
        });

        totalBill.innerHTML = "";
        let billContent = document.createTextNode(
          "My bill " + totalBillValue + "............NIS"
        );
        totalBill.appendChild(billContent);
        let btnSendOrder = document.createElement("button");
        btnSendOrder.setAttribute("class", "btnSendOrder");
        let btnDeleteOrder = document.createElement("button");
        btnDeleteOrder.setAttribute("class", "btnDeleteOrder");
        btnSendOrder.addEventListener("click", () => {
          alert("We are starting to make your reservation");
          shoppingCartWrapper.innerText = "";
          totalBill.innerText = "";
          localStorage.removeItem("myArray");
          location.href = "index.html";
        });

        btnDeleteOrder.addEventListener("click", () => {
          shoppingCartWrapper.innerText = "";
          totalBill.innerText = "";
          productsInShoppingCart = [];
          shoppingCartWrapper.innerText = "My order.......";
          totalBill.innerText = "My bill.......";
        });

        btnSendOrder.innerText = "Send Order";
        btnDeleteOrder.innerText = "Delete Order";
        totalBill.appendChild(btnSendOrder);
        totalBill.appendChild(btnDeleteOrder);
      });
    });
  }
}

let productsContainer = document.getElementById("productsContainer");
let allProductsHtml = "";
let productsRowHtml = "";

for (let row = 0; row < products.length / 3; row++) {
  productsRowHtml = `<div class="picRow">`; // Start of row
  for (let col = 0; col < 3; col++) {
    productsRowHtml += `<div class="pic">
             <img class="imgi" src="${products[row * 3 + col].image}" />
             <div class="description">${products[row * 3 + col].name} - ${
      products[row * 3 + col].price
    } NIS<button 
                id="${
                  products[row * 3 + col].buttonAddDishId
                }" class="btnAddDish">Add Dish</button>
             </div>
        </div>`;
  }

  if (row == 0) {
    productsRowHtml += `<div class="showUserData" id="showUserData">Your details</div>`;
  }

  if (row == 1) {
    productsRowHtml += `<div class="shoppingCart" id="shoppingCart">Your order...</div>`;
  }

  if (row == 2) {
    productsRowHtml += `<div class="bill" id="bill">Your bill...</div>`;
  }

  productsRowHtml += `</div>`; // end of row

  allProductsHtml += productsRowHtml;
}

productsContainer.innerHTML = allProductsHtml;

let arrayButtonsAddDish = [];
let arrayElementsBtnAddDish = document.getElementsByClassName("btnAddDish");
[...arrayElementsBtnAddDish].forEach((element) => {
  let btnAddDish = new ButtonAddDish(element.id);
  arrayButtonsAddDish.push(btnAddDish);
});

let userDataFromForm = localStorage.getItem("myArray");
console.log(userDataFromForm);
let newUserDataFromForm = JSON.parse(userDataFromForm);
let newDiv = document.createElement("div");
newDiv.innerHTML = `<br><p>Name: ${newUserDataFromForm[0]}</p><br>
<p>Last Name: ${newUserDataFromForm[1]}</p><br>
<p>Email: ${newUserDataFromForm[2]}</p><br>
<p>Street Address: ${newUserDataFromForm[3]}</p><br>
<p>City: ${newUserDataFromForm[4]}</p>`;
let oldDiv = document.getElementById("showUserData");
oldDiv.appendChild(newDiv);
