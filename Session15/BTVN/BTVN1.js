const products = [
    { id: 1, name: "Bánh Chưng", price: 150000 },
    { id: 2, name: "Giò Lụa", price: 180000 },
    { id: 3, name: "Canh Đào", price: 500000 },
    { id: 4, name: "Mứt Tết", price: 120000 },
    { id: 5, name: "Bao Lì Xì", price: 25000 },
    { id: 6, name: "Dưa Hấu Tết", price: 80000 },
];

let productList = document.getElementById("product-list");
let inputProduct = document.getElementById("product-name"); 
let productPriceInput = document.getElementById("product-price");

const renderProducts = () => {
    productList.innerHTML = "";

    products.forEach((product, index) => {
        let dives = document.createElement("div");
        dives.className = "product";

        dives.innerHTML = `
        <ul>
            <li>Tên sản phẩm: ${product.name}</li>
            <li>Giá: ${product.price}</li>
            <button class="delete-btn">Xóa</button>
        </ul>
        `;

        dives.querySelector(".delete-btn").addEventListener("click", () => {
            if (confirm("Bạn có chắc muốn xóa sản phẩm này?")) {
                products.splice(index, 1);
                renderProducts();
            }
        });

        productList.appendChild(dives);
    });
};

renderProducts();

const addProducts = () => {
    let newName = inputProduct.value;
    let newPrice = productPriceInput.value;

    let newProduct = {
        id: Date.now(),
        name: newName,
        price: newPrice,
    };

    products.push(newProduct);

    renderProducts();

    inputProduct.value = "";
    productPriceInput.value = "";
};