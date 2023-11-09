const searchByName = document.getElementById("search-name");
const products = document.querySelectorAll(".product-item");
const filterBtn = document.querySelectorAll(".search-btn");
const searchByPriceBtn = document.querySelector(".search-input-btn");

const searchByNameHandler = () => {
  const searchByNameValue = searchByName.value.toLowerCase().trim();
  products.forEach((product) => {
    const searchByNameProduct = product.children[1].innerText.toLowerCase();
    if (searchByNameProduct.includes(searchByNameValue)) {
      product.style.display = "flex";
    } else {
      product.style.display = "none";
    }
  });
};

const selectedBtn = (filter) => {
  filterBtn.forEach((button) => {
    if (button.dataset.filter === filter) {
      button.classList.add("selected");
    } else {
      button.classList.remove("selected");
    }
  });
};

const filterBtnHandler = (event) => {
  const filter = event.target.dataset.filter;
  selectedBtn(filter);
  products.forEach((product) => {
    const category = product.dataset.category;
    if (filter === "all") {
      product.style.display = "flex";
    } else {
      filter === category
        ? (product.style.display = "flex")
        : (product.style.display = "none");
    }
  });
};

const searchByPriceHandler = (event) => {
  const searchByPriceValue = +event.target.parentElement.children[1].value;
  products.forEach((product) => {
    const priceValue = +product.children[2].innerText.slice(2);
    if (!searchByPriceValue) {
      product.style.display = "flex";
    } else {
      searchByPriceValue === priceValue
        ? (product.style.display = "flex")
        : (product.style.display = "none");
    }
  });
};

const start = () => {
  searchByName.addEventListener("keyup", searchByNameHandler);
  filterBtn.forEach((button) => {
    button.addEventListener("click", filterBtnHandler);
  });
  searchByPriceBtn.addEventListener("click", searchByPriceHandler);
};

window.addEventListener("load", start);
