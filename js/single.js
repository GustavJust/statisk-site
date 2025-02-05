
let productId = new URLSearchParams(window.location.search).get("id");

let myCategory = new URLSearchParams(window.location.search).get("category");

let productContainer = document.querySelector(".product");
fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
.then((response) => response.json())
.then((data) => {
    productContainer.innerHTML = `
        <img
          src='https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp'
          alt=""
        />
        <article>
          <h2>${data.productdisplayname}</h2>
          <p>
          ${data.description}
          </p>

          <dl>
            <dt>Brand</dt>
            <dd>${data.brandname}</dd>
            <dt>Color</dt>
            <dd>${data.basecolour}</dd>
            <dt>Inventory number</dt>
            <dd>${productId}</dd>
          </dl>

          <h2> 
            ${data.discount > 0 
              ? `<span class="old-price">DDK ${data.price},-</span>  <br>
                 <span class="new-price">DDK ${(data.price * (1 - data.discount / 100)).toFixed(2)},-</span>` 
              : `DDK ${data.price},-`}
          </h2>
        </article>
        <article>
          <h2>${data.variantname}</h2>
          <p>${data.articletype} | ${data.brandname}	</p>
          <div class="inputs">
            <div>
              <p>Choose size:</p>
              <select id="options" name="options">
                <option value="option1">S</option>
                <option value="option2">M</option>
                <option value="option3">L</option>
                <option value="option4">XL</option>
              </select>
            </div>
            <div>
              <label for="quantity">Choose amount:</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="0"
                max="10"
                step="1"
                value="0"
              />
            </div>
            <button>Add to basket</button>
          </div>
        </article>
    `;
});


const breadCrumbs = ` 
<a href="index.html?sort=Categories">Categories</a>
 > 
 <a href="productlist.html?category=${myCategory}"> ${myCategory} </a>
 >
 <a href=""> ${productId} </a>
  `

document.querySelector("h1").innerHTML = breadCrumbs;