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
    categoryLi.innerHTML = `
    <button class="cursor-pointer" onclick ="loadCategoryFruit(${category.id})">${category.category_name}</button>`;
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
              <h1 class="text-lg font-semibold px-3">${categoryPlant.name}</h1>
              <p class="text-sm p-3">
                ${categoryPlant.description}
              </p>
              <div class="flex justify-between pb-3">
                <h1 class="px-4 bg-[#dcfce7] rounded-3xl">${categoryPlant.category}</h1>
                <h1 class="block font-semibold font-lg px-3">৳${categoryPlant.price}</h1>
              </div>
              <button
                class="btn bg-[#15803d] text-white rounded-3xl mb-2 px-28 mx-auto block"
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
              <div class="">
                <img class="p-3 h-[300px] object-cover w-full" src="${plant.image}" alt="" />
              </div>
              <h1  onclick="my_modal_5.showModal()" class="text-lg font-semibold px-3 cursor-pointer">${plant.name}</h1>
              <p class="text-sm p-3">
                ${plant.description}
              </p>
              <div class="flex justify-between pb-3">
                <h1 class="px-4 bg-[#dcfce7] rounded-3xl">${plant.category}</h1>
                <h1 class="block font-semibold font-lg px-3">৳${plant.price}</h1>
              </div>
              <button
                class="btn bg-[#15803d] text-white rounded-3xl mb-2 px-28 mx-auto block"
              >
                Add to Cart
              </button>
</div>
            `;
    middleMainContainer.appendChild(mainDiv);
  }
};

loadPlants();
loadCategories();
