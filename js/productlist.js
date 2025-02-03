const category = "appeal";
const listContainer = document.querySelector(".cards");
fetch(`https://kea-alt-del.dk/t7/api/products/`)
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
            <a href="./product.html">
              <img
                src='https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp'
                alt="Womens top"
            /></a>
          </div>
          <h3>${product.productdisplayname}</h3>
          <div class="card_desc">
            <div class="desc_content">
              <p>${product.articletype} | ${product.brandname	}</p>
              <p>DDK ${product.productdisplayname},-</p>
              <p></p>
              <a href="" class="readmore">Read More</a>
            </div>
          </div>
        </article>
`
)
)
.join('');
listContainer.innerHTML = markup;
}