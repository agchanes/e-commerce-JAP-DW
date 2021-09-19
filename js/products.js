//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {


    fetch(PRODUCTS_URL)
        .then(result => result.json())
        .then(data => {

            localStorage.setItem("products", JSON.stringify(data));

        });

    let misDatos = localStorage.getItem("products");
    let misDatosJSON = JSON.parse(misDatos)

    function listProducts() {

        productList = ""
        let minCost = document.getElementById("minCost").value;
        let maxCost = document.getElementById("maxCost").value;


        for (let i = 0; i < misDatosJSON.length; i++) {

            let productNumber = misDatosJSON[i]

            let name = productNumber.name
            let description = productNumber.description
            let cost = productNumber.cost
            let currency = productNumber.currency
            let img = productNumber.imgSrc
            let soldcount = productNumber.soldCount


            if (minCost < cost && cost < maxCost) {
                productList +=
                    `
                    <a href="product-info.html" class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                        <img src="` + img + `" alt="` + name + `" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ name + `</h4>
                            <small class="text-muted"> Vendidos: ` + soldcount + `<hr>` + currency + ` ` + cost + `</small>
                        </div>
                        <p class="mb-1">` + description + `</p>
                    </div>
                </div>
                </a>
                `

            } else {
                if (minCost === "" && maxCost === "") {

                    productList +=
                        `<a href="product-info.html" class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                        <img src="` + img + `" alt="` + name + `" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ name + `</h4>
                            <small class="text-muted"> Vendidos: ` + soldcount + `<hr>` + currency + ` ` + cost + `</small>
                        </div>
                        <p class="mb-1">` + description + `</p>
                    </div>
                </div>
                </a>
                `
                }
            }
        }
        document.getElementById("list-container").innerHTML = productList
    }

    function sortByCostAZ() {
        misDatosJSON.sort(function (a, b) { return a.cost - b.cost });
    };

    function sortByCostDZ() {
        misDatosJSON.sort(function (a, b) { return b.cost - a.cost });
    };

    function sortBySells() {
        misDatosJSON.sort(function (a, b) { return b.soldCount - a.soldCount });
    }

    function cleanFilter(){
        document.getElementById("minCost").value = ""
        document.getElementById("maxCost").value = ""
    }

    document.getElementById("sortCostAZBTN").onclick = function () {
        sortByCostAZ();
        listProducts();
    }

    document.getElementById("sortCostDZBTN").onclick = function () {
        sortByCostDZ();
        listProducts();
    }

    document.getElementById("sortSellsBTN").onclick = function () {
        sortBySells();
        listProducts();
    }

    document.getElementById("costFilterBTN").onclick = function () {
        listProducts();
    }

    document.getElementById("cleanFilterBTN").onclick = function () {
        cleanFilter();
        listProducts();
    }

    function redirect(){
        window.location.href="product-info.html"
    }

    listProducts();

});