function AddProduct() {
    var products = {
        productSku: document.getElementById("productSku").value,
        productName: document.getElementById("productName").value,
        dateCreation: document.getElementById("dateCreation").value,
        quantity: document.getElementById("quantity").value,
        price: document.getElementById("price").value,
        tax: document.getElementById("tax").value,
        discount: document.getElementById("discount").value,
        vendor: document.getElementById("vendor").value,
        brief: document.getElementById("brief").value
    }

    if( products.productSku != "" && products.productName != "" &&
        products.dateCreation != "" && products.quantity != "" &&
        products.price != "" && products.tax != "" &&
        products.discount != "" && products.brief != ""
    ){
        alert(
            "Produto cadastrado \n\n"+
            "Product SKU: "+products.productSku +"\n"+
            "Product Name: "+products.productName +"\n"+
            "Date Creation: "+products.dateCreation +"\n"+
            "Quantity: "+products.quantity +"\n"+
            "Price: "+products.price +"\n"+
            "Tax: "+products.tax +"\n"+
            "Discount: "+products.discount +"\n"+
            "Brief: "+products.brief
        )
    }else{
        alert("Informe todos os campos para salvar o cadastro do produto!")
    }
}