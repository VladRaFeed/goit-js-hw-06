const allCategories = document.querySelectorAll(".item");
// console.log(allCategories);

const numberOfCategories = allCategories.length;
console.log(`Number of categories: ${numberOfCategories}`);

allCategories.forEach((element) => {
  //   console.log(element);
  const categoryName = element.querySelector("h2");
  //   console.log(categoryName);
  const numberOfItems = element.querySelectorAll("li");
  //   console.log(numberOfItems.length);
  return console.log(`Category: ${categoryName.textContent}
Elements: ${numberOfItems.length}`);
});
