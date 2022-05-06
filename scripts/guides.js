fetch("../json/guides.json")
  .then((response) => response.json())
  .then((data) => {
    console.log("Data: ", data);

    // at this point we can do something with our JSON data
    // it is available in the variable "data"
    data.museums.forEach(function (mueseum) {
      addMueseumToCityGuides(mueseum, "#mueseumGuides");
    });

    // at this point we can do something with our JSON data
    // it is available in the variable "data"
    data.cities.forEach(function (city) {
      addMueseumToCityGuides(city, "#cityGuides");
    });

    // at this point we can do something with our JSON data
    // it is available in the variable "data"
    data.food.forEach(function (food) {
      addMueseumToCityGuides(food, "#foodGuides");
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });

var filterValue = "";

var searchFilterOptions = document.querySelectorAll(".filter-option");
searchFilterOptions.forEach(function (option) {
  option.addEventListener("click", function (e) {
    filterValue = e.target.textContent.toLowerCase();

    searchFilterOptions.forEach((opt) =>
      opt.classList.remove("filter-option-active")
    );

    option.classList.add("filter-option-active");
    // loop through all blogs
    // show or hide each one based on the search term
    var mueseumGuides = document.querySelectorAll("#mueseumGuides li");
    mueseumGuides.forEach(filterGuides);
    // loop through all blogs
    // show or hide each one based on the search term
    var cityGuides = document.querySelectorAll("#cityGuides li");
    cityGuides.forEach(filterGuides);
    // loop through all blogs
    // show or hide each one based on the search term
    var foodGuides = document.querySelectorAll("#foodGuides li");
    foodGuides.forEach(filterGuides);
  });
});

function filterGuides(blog) {
  var blogElement = blog.querySelector("article");

  // if no filter value is set, show the planet
  if (filterValue === "all") {
    blog.classList.remove("hide");

    // if a filter term has been set,
    // only display the planet if its name matches the filter term
  } else {
    // get the name of the planet from its planet-name element
    var blogLocation = blogElement
      .querySelector(".guide-location")
      .textContent.toLowerCase();
    if (blogLocation.includes(filterValue)) {
      blog.classList.remove("hide");
    } else {
      blog.classList.add("hide");
    }
  }
}

function addMueseumToCityGuides(guide, eleId) {
  var guidesList = document.querySelector(eleId);

  // create a new element for each guide
  var guideListElement = document.createElement("li");
  guideListElement.classList.add("mueseum-item");

  var guideWrapper = document.createElement("article");
  guideWrapper.classList.add("guide");

  // add the guide name
  var guideImg = document.createElement("img");
  guideImg.classList.add("guide-img");
  guideImg.src = guide.img;
  guideWrapper.appendChild(guideImg);

  var guideContent = document.createElement("div");
  guideContent.classList.add("guide-content");

  var guideHeading = document.createElement("h4");
  guideHeading.classList.add("guide-name");
  guideHeading.textContent = guide.title;
  guideContent.appendChild(guideHeading);

  var guideDesc = document.createElement("p");
  guideDesc.classList.add("guide-desc");
  guideDesc.textContent = guide.desc;

  var guideViewMore = document.createElement("span");
  guideViewMore.textContent = "more";
  guideDesc.appendChild(guideViewMore);

  guideContent.appendChild(guideDesc);

  var guideLocation = document.createElement("p");
  guideLocation.textContent = guide.category.toLowerCase();
  guideLocation.classList.add("guide-location");
  guideLocation.style.display = "none";
  guideContent.appendChild(guideLocation);

  var guideLink = document.createElement("a");
  guideLink.classList.add("guide-book-now");
  guideLink.href = "#";
  guideLink.textContent = "book now";
  guideContent.appendChild(guideLink);

  guideWrapper.appendChild(guideContent);

  //Add guide wrapper to the list element
  guideListElement.appendChild(guideWrapper);

  // add the planet to the page
  guidesList.appendChild(guideListElement);
}
