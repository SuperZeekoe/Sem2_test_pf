// read json file
fetch("./json/art.json")
  .then((Response) => Response.json())
  .then((data) => jsGetData(data));

// function to display json data on screen
const shop = document.querySelector(".artShop");
const itemData = [];
let filters = [];

function jsGetData(data) {
  itemData.push(data);
}

function giveAction() {
  document
    .querySelectorAll(
      ".clickAble, .drawings, .paintings, .sculptures, .photography, .toys"
    )
    .forEach((img) => {
      img.addEventListener("click", function () {
        localStorage.setItem("img", img.src);
        window.location.href = "./detail.html";
      });
    });
}

function loadAll() {
  itemData[0].drawings.forEach((drawing) => {
    const shopItem = document.createElement("img");
    shopItem.src = "./img/drawings/" + drawing;
    shopItem.classList.add("clickAble");
    shop.appendChild(shopItem);
  });
  itemData[0].paintings.forEach((painting) => {
    const shopItem = document.createElement("img");
    shopItem.src = "./img/paintings/" + painting;
    shopItem.classList.add("clickAble");
    shop.appendChild(shopItem);
  });
  itemData[0].sculptures.forEach((sculpture) => {
    const shopItem = document.createElement("img");
    shopItem.src = "./img/sculptures/" + sculpture;
    shopItem.classList.add("clickAble");
    shop.appendChild(shopItem);
  });
  itemData[0].photography.forEach((photo) => {
    const shopItem = document.createElement("img");
    shopItem.src = "./img/photography/" + photo;
    shopItem.classList.add("clickAble");
    shop.appendChild(shopItem);
  });
  giveAction();
}

function loadDrawings() {
  filters.push("drawings");
  itemData[0].drawings.forEach((drawing) => {
    const shopItem = document.createElement("img");
    shopItem.classList.add("drawings");
    shopItem.src = "./img/drawings/" + drawing;
    shop.appendChild(shopItem);
  });
}

function loadPaintings() {
  filters.push("paintings");
  itemData[0].paintings.forEach((painting) => {
    const shopItem = document.createElement("img");
    shopItem.classList.add("paintings");
    shopItem.src = "./img/paintings/" + painting;
    shop.appendChild(shopItem);
  });
}

function loadSculptures() {
  filters.push("sculptures");
  itemData[0].sculptures.forEach((sculpture) => {
    const shopItem = document.createElement("img");
    shopItem.classList.add("sculptures");
    shopItem.src = "./img/sculptures/" + sculpture;
    shop.appendChild(shopItem);
  });
}

function loadPhotography() {
  filters.push("photography");
  itemData[0].photography.forEach((photo) => {
    const shopItem = document.createElement("img");
    shopItem.classList.add("photography");
    shopItem.src = "./img/photography/" + photo;
    shop.appendChild(shopItem);
  });
}

function loadToys() {
  filters.push("toys");
  itemData[0].toys.forEach((toy) => {
    const shopItem = document.createElement("img");
    shopItem.classList.add("toys");
    shopItem.src = "./img/toys/" + toy;
    shop.appendChild(shopItem);
  });
}
function filterScan() {
  if (filters.length <= 0) {
    shop.innerHTML = "";
  }
}

document.querySelectorAll('input[type="checkbox"]').forEach((input) => {
  input.addEventListener("click", function () {
    // paintings
    if (input.id == "paintings" && input.checked == true) {
      filterScan();
      loadPaintings();
      giveAction();
    }
    if (input.id == "paintings" && input.checked == false) {
      filters.splice(filters.indexOf("paintings"), 1);
      document.querySelectorAll(".paintings").forEach((painting) => {
        painting.remove();
      });
    }
    // sculptures
    if (input.id == "sculpture" && input.checked == true) {
      filterScan();
      loadSculptures();
      giveAction();
    }
    if (input.id == "sculpture" && input.checked == false) {
      filters.splice(filters.indexOf("sculptures"), 1);
      document.querySelectorAll(".sculptures").forEach((sculpture) => {
        sculpture.remove();
      });
    }
    // drawings
    if (input.id == "drawings" && input.checked == true) {
      filterScan();
      loadDrawings();
      giveAction();
    }
    if (input.id == "drawings" && input.checked == false) {
      filters.splice(filters.indexOf("drawings"), 1);
      document.querySelectorAll(".drawings").forEach((drawing) => {
        drawing.remove();
      });
    }
    // photography
    if (input.id == "photography" && input.checked == true) {
      filterScan();
      loadPhotography();
      giveAction();
    }
    if (input.id == "photography" && input.checked == false) {
      filters.splice(filters.indexOf("photography"), 1);
      document.querySelectorAll(".photography").forEach((photo) => {
        photo.remove();
      });
    }
    // toys
    if (input.id == "toys" && input.checked == true) {
      filterScan();
      loadToys();
      giveAction();
    }
    if (input.id == "toys" && input.checked == false) {
      filters.splice(filters.indexOf("toys"), 1);
      document.querySelectorAll(".toys").forEach((toy) => {
        toy.remove();
      });
    }
    // all
    if (filters.length == 0) {
      loadAll();
      giveAction();
    }
  });
});

function loadPage() {
  const url = window.location.href;
  if (url.includes("shop")) {
    loadAll();
    giveAction();
  }
  if (url.includes("drawings")) {
    loadDrawings();
    giveAction();
  }
  if (url.includes("paintings")) {
    loadPaintings();
    giveAction();
  }
  if (url.includes("photography")) {
    loadPhotography();
    giveAction();
  }
  if (url.includes("sculptures")) {
    loadSculptures();
    giveAction();
  }
  if (url.includes("toys")) {
    loadToys();
    giveAction();
  }
  if (url.includes("detail")) {
    loadDetail();
  }
  giveAction();
}

window.onload = setTimeout(loadPage, 500);

//basket

let basket = [];
const countItem = document.createElement("div");

function checkBasket() {
  count = 0;
  if (localStorage.getItem("basket") == null) {
  } else {
    localStorage
      .getItem("basket")
      .split(",")
      .forEach((basketItem) => {
        if (basketItem != "") {
          count++;
        }
      });
    const icon = document.querySelector(".cartIcon");

    countItem.classList.add("count");
    if (count > 9) {
      countItem.innerHTML = "9+";
      icon.appendChild(countItem);
    } else if (count <= 0) {
      countItem.style.display = "none";
      icon.appendChild(countItem);
    } else {
      countItem.style.display = "block";
      countItem.innerHTML = count;
      icon.appendChild(countItem);
    }
  }
}
checkBasket();

// loads the cart
function loadCart() {
  if (localStorage.getItem("basket").length > 0) {
    localStorage
      .getItem("basket")
      .split(",")
      .forEach((item) => {
        basket.push(item);
      });
    document.querySelector(".cartNo").style.display = "none";
    document.querySelector(".cartFilled").style.display = "grid";
    loadCartItems();
  } else if (
    localStorage.getItem("basket") == "" ||
    localStorage.getItem("basket") == null ||
    basket.length === 0
  ) {
    document.querySelector(".cartNo").style.display = "flex ";
    document.querySelector(".cartFilled").style.display = "none";
  }
}
setTimeout(loadCart, 500);

// loads the cart items
let cartItems = document.querySelector("#cart-items");
function loadCartItems() {
  basket.forEach((item) => {
    item.split(",").forEach((item) => {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item-individual");
      const cartImg = document.createElement("img");
      cartImg.id = item;
      cartItem.appendChild(cartImg);
      if (Object.values(itemData[0].drawings).includes(item + ".jpg")) {
        cartImg.src = "./img/drawings/" + item + ".jpg";
      }
      if (Object.values(itemData[0].paintings).includes(item + ".jpg")) {
        cartImg.src = "./img/paintings/" + item + ".jpg";
      }
      if (Object.values(itemData[0].photography).includes(item + ".jpg")) {
        cartImg.src = "./img/photography/" + item + ".jpg";
      }
      if (Object.values(itemData[0].sculptures).includes(item + ".jpg")) {
        cartImg.src = "./img/sculptures/" + item + ".jpg";
      }
      if (Object.values(itemData[0].toys).includes(item + ".jpg")) {
        cartImg.src = "./img/toys/" + item + ".jpg";
      }
      cartItem.innerHTML +=
        "<h4>" +
        item +
        "</h4>" +
        "<p>" +
        "Item dimensions" +
        "</p>" +
        "<p>" +
        "$100 bigdollar" +
        "</p>" +
        "<button class='remove-item'>" +
        '<i class="fa-sharp fa-solid fa-xmark"></i>' +
        "</button>";
      cartItems.appendChild(cartItem);
    });
  });
  document.querySelectorAll(".remove-item").forEach((button) =>
    button.addEventListener("click", function () {
      basket.splice(basket.indexOf(button.parentElement.firstChild.id), 1);
      localStorage.setItem("basket", basket);
      button.parentElement.remove();
      checkBasket();
      if (basket.length === 0) {
        document.querySelector(".cartNo").style.display = "flex ";
        document.querySelector(".cartFilled").style.display = "none";
      }
    })
  );
}

// detail page
let locallyStored = localStorage
  .getItem("img")
  .split("/")
  .pop()
  .split(".")
  .shift()
  .replace(/%20/g, " ");

const detailPage = document.querySelector("#imgDetail");
function loadDetail() {
  const img = document.createElement("img");
  img.src = localStorage.getItem("img");
  detailPage.appendChild(img);
}

const orderButton = document.querySelector("#order");
orderButton.addEventListener("click", function () {
  basket.push(locallyStored);
  localStorage.setItem("basket", basket);
  checkBasket();
  orderButton.disabled = true;
  orderButton.innerHTML = "Item is already in your cart";
});

const object = localStorage.getItem("basket").split(",");
function history() {
  if (object.includes(locallyStored)) {
    orderButton.disabled = true;
    orderButton.innerHTML = "Item is already in your cart";
  }
}
setTimeout(history, 500);
