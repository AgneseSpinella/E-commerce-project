

const productList = document.getElementById("productList");
const searchBar = document.getElementById("searchBar");
let products = [];

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();

  const filteredProducts = products.filter((product) => {
    return (
        product.title.toLowerCase().includes(searchString) ||
        product.category.toLowerCase().includes(searchString)
    );
  });
  displayProducts(filteredProducts);
});

const loadProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    products = await res.json();
    displayProducts(products);
};

const displayProducts = (product) => {
  const htmlString = product
    .map((product) => {
      return `
            <li class="product">
                <h2>${product.title}</h2>
                <img src="${product.image}"></img>
                <h3>Category: <br>${product.category}</h3>
                <p>${product.description}</p>
                <h3>${product.price} $</h3>
                
            </li>
        `;
    })
    .join("");
    productList.innerHTML = htmlString;
};

loadProducts();
