fetch("../json/articles.json")
  .then((response) => response.json())
  .then((data) => {
    console.log("Data: ", data);

    // at this point we can do something with our JSON data
    // it is available in the variable "data"
    data.forEach(addBlogToCityArticles);
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
    var blogs = document.querySelectorAll("#cityBlogListing li");
    blogs.forEach(filterCityArticles);
  });
});

function filterCityArticles(blog) {
  var blogElement = blog.querySelector("article");

  // if no filter value is set, show the planet
  if (filterValue === "all") {
    blog.classList.remove("hide");

    // if a filter term has been set,
    // only display the planet if its name matches the filter term
  } else {
    // get the name of the planet from its planet-name element
    var blogLocation = blogElement
      .querySelector(".blog-location")
      .textContent.toLowerCase();
    if (blogLocation.includes(filterValue)) {
      blog.classList.remove("hide");
    } else {
      blog.classList.add("hide");
    }
  }
}

function addBlogToCityArticles(blog) {
  var blogsList = document.querySelector("#cityBlogListing");

  // create a new element for each blog
  var blogListElement = document.createElement("li");
  blogListElement.classList.add(".blog-item");

  var blogWrapper = document.createElement("article");
  blogWrapper.classList.add("blogs");

  // add the blog name
  var blogImg = document.createElement("img");
  blogImg.src = blog.img;
  blogWrapper.appendChild(blogImg);

  var blogLocation = document.createElement("p");
  blogLocation.textContent = blog.category.toLowerCase();
  blogLocation.classList.add("blog-location");
  blogLocation.style.display = "none";

  blogWrapper.appendChild(blogLocation);

  // add other planet details
  var blogLink = document.createElement("a");
  blogLink.classList.add("blogs-title");
  blogLink.href = "/blog-details.html";
  var blogLinkTitle = document.createElement("p");
  blogLinkTitle.textContent = blog.title;
  blogLink.appendChild(blogLinkTitle);
  blogWrapper.appendChild(blogLink);

  var blogDesc = document.createElement("p");
  blogDesc.classList.add("blogs-desc");
  blogDesc.textContent = blog.desc;
  blogWrapper.appendChild(blogDesc);

  //Add blog wrapper to the list element
  blogListElement.appendChild(blogWrapper);

  // add the planet to the page
  blogsList.appendChild(blogListElement);
}
