async function fetchAPIData() {
    const productsTable = document.getElementById('productsTable');
  try {
    const response = await fetch("https://s3.amazonaws.com/open-to-cors/assignment.json");

    const data = await response.json();
    const products = data["products"]

    const productsArray = Object.values(products);
    const sortedProducts = productsArray.sort((a, b) => b.popularity - a.popularity);

    productsTable.innerHTML = sortedProducts.map((product) => 
        `<tr>
            <td>${product.subcategory}</td>
            <td>${product.title}</td>
            <td>${product.price}</td>
            <td>${product.popularity}</td>
        </tr>`
    ).join("")

    
  } catch (error) {
    console.error("Error While fetching data", error);
  }
}
fetchAPIData()
