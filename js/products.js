//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.



document.addEventListener("DOMContentLoaded", function (e) {

    let misDatosJSON = []

    fetch(PRODUCTS_URL)
        .then(result => result.json())
        .then(data => {

            console.log(data)


            misDatosJSON = data

            listProducts();
    });


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
                    <div class="col-md-4">
                    <a href="product-info.html" class="card mb-4 shadow-sm custom-card">
                      <img class="bd-placeholder-img card-img-top"  src="${img}">
                      <h3 class="m-3">${name}</h3>
                      <h5 class="ml-3">${currency} ${cost}</h3>
                      <div class="card-body">
                        <p class="card-text">${description}</p>
                        <small class="card-text">${soldcount} vendidos</small>
                      </div>
                    </a>
                  </div>

                `

            } else {
                if (minCost === "" && maxCost === "") {

                    productList +=
                        `                   
                        <div class="col-md-4">
                        <a href="product-info.html" class="card mb-4 shadow-sm custom-card">
                          <img class="bd-placeholder-img card-img-top"  src="${img}">
                          <h3 class="m-3">${name}</h3>
                          <h5 class="ml-3">${currency} ${cost}</h3>
                          <div class="card-body">
                            <p class="card-text">${description}</p>
                            <small class="card-text">${soldcount} vendidos</small>
                          </div>
                        </a>
                      </div>
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

    function cleanFilter() {
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



    document.getElementsByClassName("cleanFilterBTN").onclick = function () {
        cleanFilter();
        listProducts();
    }


});


function redirect(algo) {
    localStorage.setItem("currentAuto", algo)
}