let loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
};

const displayCategories = (categories) => {
  let categoriesSection = document.getElementById("categories-section");
  categoriesSection.innerHTML = "";
  for (let category of categories) {
    let categoryLi = document.createElement("div");
    categoryLi.classList.add("active");
    categoryLi.innerHTML = `
    <button id="category-btn-${category}" class="cursor-pointer py-4 px-2 rounded-xl" onclick ="loadCategoryFruit(${category.id})">${category.category_name}</button>`;
    categoriesSection.appendChild(categoryLi);
  }
};

let loadCategoryFruit = (id) => {
  fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then((res) => res.json())
    .then((data) => dispalyCategoryFruit(data.plants));
};

let dispalyCategoryFruit = (categoryPlants) => {
  let mainContainer = document.getElementById("main-container");
  mainContainer.innerHTML = "";
  for (let categoryPlant of categoryPlants) {
    let categoryPlantBtn = document.createElement("div");
    categoryPlantBtn.innerHTML = ` 
            <div class="bg-white rounded-xl shadow p-2">
              <div class="">
                <img class="p-3 h-[300px] object-cover w-full" src="${categoryPlant.image}" alt="" />
              </div>
              <h1 onclick="loadModalsDetails(${categoryPlant.id})" class="text-lg font-semibold px-3 cursor-pointer" >${categoryPlant.name}</h1>
              <p class="text-sm p-3">
                ${categoryPlant.description}
              </p>
              <div class="flex justify-between pb-3">
                <h1 class="px-4 bg-[#dcfce7] rounded-3xl">${categoryPlant.category}</h1>
                <h1 class="block font-semibold font-lg px-3">৳${categoryPlant.price}</h1>
              </div>
              <button onclick="clickBtn('${categoryPlant.name}',${categoryPlant.price})" id="add-to-cart-btn" 
                class="btn  bg-[#15803d] text-white rounded-3xl mb-2 px-28 mx-auto block"
              >
                Add to Cart
              </button>
</div>
            `;

    mainContainer.appendChild(categoryPlantBtn);
  }
};

let loadPlants = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => displayPlants(data.plants));
};

let displayPlants = (plants) => {
  let middleMainContainer = document.getElementById("main-container");
  middleMainContainer.innerHTML = "";
  for (let plant of plants) {
    let mainDiv = document.createElement("div");
    mainDiv.innerHTML = ` 
            <div class="bg-white rounded-xl shadow p-2">
              <div >
                <img class="p-3 h-[300px] object-cover w-full" src="${plant.image}" alt="" />
              </div>
              <h1  onclick="loadModalsDetails(${plant.id})" class="text-lg font-semibold px-3 cursor-pointer">${plant.name}</h1>
              <p class="text-sm p-3">
                ${plant.description}
              </p>
              <div class="flex justify-between pb-3">
                <h1 class="px-4 bg-[#dcfce7] rounded-3xl">${plant.category}</h1>
                <h1 class="block font-semibold font-lg px-3">৳${plant.price}</h1>
              </div>
              <button onclick="clickBtn('${plant.name}',${plant.price})"
                class="btn bg-[#15803d] text-white rounded-3xl mb-2 px-28 mx-auto block"
              >
                Add to Cart
              </button>
</div>
            `;
    middleMainContainer.appendChild(mainDiv);
  }
};

let loadModalsDetails = (id) => {
  fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
    .then((res) => res.json())
    .then((data) => showModalDetails(data.plants));
};
let showModalDetails = (details) => {
  let modalDetailsContainer = document.getElementById(
    "modal-details-container"
  );
  modalDetailsContainer.innerHTML = `<h1 class="font-semibold text-2xl">${details.name}</h1>
  <div>
  <img class="h-[250px] w-full object-cover mt-3" src="${details.image}"/>
  <div> <span class="font-medium text-lg">Category:</span><span class="">${details.category}</span></div>

 <div><span class="font-medium text-lg">Price:</span><span>${details.price}</span></div>
 <div><span class="font-medium text-lg">Description:</span><span>${details.description}</span></div>
 
  `;
  document.getElementById("my_modal_5").showModal();
};

loadPlants();
loadCategories();

// Add to Cart section

let cart = {};
let total = 0;
let clickBtn = (name, price) => {
  if (cart[name]) {
    cart[name].quantity += 1;
  } else {
    cart[name] = { price: price, quantity: 1 };
  }
  total += price;
  renderCart();
};
let removeItem = (name) => {
  if (cart[name]) {
    total -= cart[name].price * cart[name].quantity;
    delete cart[name];
    renderCart();
  }
};

let renderCart = () => {
  let addCartSection = document.getElementById("add-cart-section");
  addCartSection.innerHTML = `<h2 class="font-semibold text-xl mb-3">Your Cart</h2>`;

  for (let item in cart) {
    addCartSection.innerHTML += `<div class="flex justify-between items-center bg-gray-50 rounded-lg p-3 mb-2">
    <div>
    <div>
    <h3 class="font-semibold">${item}</h3>
    <p class="text-gray-600">৳${cart[item].price} x ${cart[item].quantity}</p>
    </div>
    <button onclick="removeItem('${item}')" class="text-gray-500 hover:text-red-600 font-bold text-lg">x</button>
    `;
  }
};
addCartSection.innerHTML += `
    <hr class="my-2">
    <h3 class="font-semibold text-lg flex justify-between">
      <span>Total:</span> <span>৳${total}</span>
    </h3>
  `;
