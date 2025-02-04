console.log("index script loaded");

let mySorting = new URLSearchParams(window.location.search).get("sort");
console.log(mySorting);

fetch(`https://kea-alt-del.dk/t7/api/categories`)
.then((response) => response.json())
.then(showCategory);

function showCategory(data) {
console.log("mine data er:", data);

const markup = data.map((element) =>
    `
          <a href="productlist.html?category=${element.category}">${element.category}</a>
`
)
.join("");

console.log("min markup er", markup)
document.querySelector("nav.category_list_container").innerHTML = markup;

const breadCrumbs = ` 
<a href='index.html?sort=${mySorting}'>${mySorting}</a>
`

document.querySelector("h1").innerHTML = breadCrumbs;


}
