// const category = "appeal";

let myCategory = new URLSearchParams(window.location.search).get("category");
console.log(myCategory);


const listContainer = document.querySelector(".cards");
fetch(`https://kea-alt-del.dk/t7/api/products?category=${myCategory}`)
.then ((response) => response.json())
.then((data) => showProductLst(data));

function showProductLst(products) {
    console.log(products);
    const markup = 
    products.map
        ((product) => (
 `
                    <article class="card">
          <div class="card_hero">
            <a href='./product.html?id=${product.id}&category=${myCategory}'>
              <img
                src='https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp'
                alt="${product.description}"
            /></a>
            <span class='stock ${product.soldout && "soldOut"}'>
            Sold Out
            </span>
          </div>
          <h3>${product.productdisplayname}</h3>
          <div class="card_desc">
            <div class="desc_content">
              <p>${product.articletype} | ${product.brandname}</p>
  <p>
            ${product.discount > 0 
              ? `<span class="old-price">DDK ${product.price},-</span>  <br>
                 <span class="new-price">DDK ${(product.price * (1 - product.discount / 100)).toFixed(2)},-</span>` 
              : `DDK ${product.price},-`}
          </p>
              <a href="" class="readmore">Read More</a>
            </div>
                          <span class='discount ${product.discount && "isOnSale"}'>
              -${product.discount}%  </span>
          </div>
        </article>
`
)
)
.join('');

listContainer.innerHTML = markup;

const breadCrumbs = ` 
<a href="index.html?sort=Categories">Categories</a>
 > 
 <a href="/productlist.html"> ${myCategory} </a> `

document.querySelector("h1").innerHTML = breadCrumbs;

const filterSort = ` 
<a href="index.html?sort=Categories" class="button_1">Alle produkter</a>
<a href="productlist.html" class="button_1">På Tilbud</a> `

document.querySelector(".filters").innerHTML = filterSort;

}