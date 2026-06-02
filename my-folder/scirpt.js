let productContainer = document.querySelector("#product")
let totalproduct = document.querySelector("#totalproduct")
let finalDiv = document.querySelector(".final");
let apilink = "https://fakestoreapi.com/products";
fetch(apilink).then((data)=>{
    return data.json()
})

.then((products)=>{

       totalproduct.textContent =
        `Total Products: ${products.length}`;

    products.forEach(product => {
        const card = document.createElement("div")
        card.setAttribute("class","post-card")

        const title = document.createElement("h3")
        title.textContent = product.title.length > 30 
        ? product.title.slice(0, 30) + "..."
        : product.title; 

        const image = document.createElement("img")
        image.setAttribute ("src",product.image)
        image.setAttribute("width","120")

           // Price
        const price = document.createElement("p");
        price.textContent = `Price: $${product.price}`;

        // Category
        const category = document.createElement("p");
        category.textContent = `Category: ${product.category}`;

        // Description
        const description = document.createElement("p");
        description.textContent = product.description.length > 50
        ? product.description.slice(0,50) + "..."
        : product.description

        const tag = document.createElement("p");

        tag.textContent =
            product.price > 100
                ? "Expensive Product"
                : "Budget Product";

        // Show Price Button
        const priceBtn = document.createElement("button");
        priceBtn.textContent = "Show Price";

        priceBtn.addEventListener("click", () => {
            alert(product.price);
        });

        // Show Category Button
        const categoryBtn = document.createElement("button");
        categoryBtn.textContent = "Show Category";

        categoryBtn.addEventListener("click", () => {
            alert(product.category);
        });

        // View Details Button
                const detailsBtn = document.createElement("button");
                detailsBtn.textContent = "View Details";

                detailsBtn.addEventListener("click", () => {
                    alert(
                        `Title: ${product.title}
        Price: $${product.price}
        Category: ${product.category}`
                    );
                });

        

        card.append(title,image,price,category,description,tag,priceBtn,
            categoryBtn,
            detailsBtn);
        productContainer.append(card);
        
    });
    
        
})
.catch((err)=>{
    const Msg = document.createElement("h2");

    Msg.textContent = "Something Went Wrong";

    Msg.style.backgroundColor = "red";
    Msg.style.color = "white";
    Msg.style.textAlign = "center";

    productContainer.append(Msg);
})
.finally(()=>{
    finalDiv.textContent =
        "API Request Completed Successfully";
    
})
