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

        function listaProductos() {

            document.getElementById("list-container").innerHTML = ""
            
            let i = 0
            while (i < misDatosJSON.length) {

            let productNumber = misDatosJSON[i]

            let name = productNumber.name
            let description = productNumber.description
            let cost = productNumber.cost
            let currency = productNumber.currency
            let img = productNumber.imgSrc
            let soldcount = productNumber.soldCount


            document.getElementById("list-container").innerHTML +=
            `
            <div class="row">
                <div class="col-3">
                    <img src="` + img + `" alt="` + name + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">`+ name + `</h4>
                        <small class="text-muted"> Vendidos: ` + soldcount +`<hr>`+ currency +` `+ cost +`</small>
                    </div>
                    <p class="mb-1">` + description + `</p>
                </div>
            </div>
            `
            i++
        }
    }

    function sortByCostAZ() {
        misDatosJSON.sort(function(a, b){return a.cost - b.cost});
    };

    function sortByCostDZ() {
        misDatosJSON.sort(function(a, b){return b.cost - a.cost});
    };

    function sortBySells() {
        misDatosJSON.sort(function(a, b){return b.soldCount - a.soldCount});
    }
    
    document.getElementById("sortCostAZBTN").onclick = function(){
        sortByCostAZ();
        listaProductos();
    }  

    document.getElementById("sortCostDZBTN").onclick = function(){
        sortByCostDZ();
        listaProductos();
    }  

    document.getElementById("sortSellsBTN").onclick = function(){
        sortBySells();
        listaProductos();
    }  
    
    listaProductos();

});