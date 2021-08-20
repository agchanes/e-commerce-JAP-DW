//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {


    fetch(PRODUCTS_URL)
        .then(result => result.json())
        .then(data => {

            let i = 0
            while (i < data.length) {

                let productNumber = data[i]

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
                        <img src="` + img + `" alt="` + description + `" class="img-thumbnail">
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
        })
});