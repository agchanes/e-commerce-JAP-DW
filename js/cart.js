//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

let productName = ""
let count = ""
let unitCost = ""
let currency = ""
let img = ""
let subTotal = ""
let total = ""

let cartProduct = {}
let cart = ""
let infoMissing = true;


function setSubtotal() {
    quantity = document.getElementById("product1").value
    subTotal = quantity * unitCost
    document.getElementById("subtotal").innerHTML = "Total en productos: UYU " + subTotal

}

function setTotal() {

    if (document.getElementById("premiumRadio").checked) {
        total = subTotal + subTotal * 0.15
    } else {
        if (document.getElementById("expressRadio").checked) {
            total = subTotal + subTotal * 0.07
        } else {
            if (document.getElementById("standardRadio").checked) {
                total = subTotal + subTotal * 0.05
            }
        }
    }
    document.getElementById("total-container").innerHTML = "Total: $ " + total
}

function checkInfo() {



    let street = document.getElementById("streetInput");
    let number = document.getElementById("numberInput");
    let esquina = document.getElementById("esquinaInput");
    let country = document.getElementById("countryInput");


    //Quito las clases que marcan como inválidos
    street.classList.remove('is-invalid');
    number.classList.remove('is-invalid');
    esquina.classList.remove('is-invalid');
    country.classList.remove('is-invalid');

    //Se realizan los controles necesarios,
    //En este caso se controla que se haya ingresado el nombre y categoría.
    //Consulto por el nombre del producto
    if (street.value === "") {
        street.classList.add('is-invalid');
        infoMissing = true;
    }

    //Consulto por el costo
    if (number.value <= 0) {
        number.classList.add('is-invalid');
        infoMissing = true;
    }

    //Consulto por la categoría del producto
    if (esquina.value === "") {
        esquina.classList.add('is-invalid');
        infoMissing = true;
    }

    //Consulto por la categoría del producto
    if (country.value === "") {
        country.classList.add('is-invalid');
        infoMissing = true;
    }

    if (!(street.value === "" || number.value <= 0 || esquina.value === "" || country.value === "")){
        infoMissing = false
    }
}

function modalDisplayConditions(){

    checkInfo();


    if(!infoMissing){


    document.getElementById("modalBTN").setAttribute("data-toggle" , "modal")
    document.getElementById("modalBTN").setAttribute("data-target" , "#exampleModal")
    } else {

    document.getElementById("modalBTN").removeAttribute("data-toggle")
    document.getElementById("modalBTN").removeAttribute("data-target")

    }
}




document.addEventListener("DOMContentLoaded", function (e) {

    function showCartItems() {

        fetch(CART_INFO_URL)
            .then(result => result.json())
            .then(data => {

                cartProduct = data.articles[0]

                productName = cartProduct.name
                count = cartProduct.count
                unitCost = cartProduct.unitCost
                currency = cartProduct.currency
                img = cartProduct.src
                subTotal = count * unitCost



                cart =

                    `

                    <div class="list-group-item">
                        <div class="row">
                            <div class="col-3">
                                <img src="` + img + `" alt="` + productName + `" class="img-thumbnail">
                            </div>
                            <div>
                                <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ productName + `</h4>
                        </div>                    
                        <div class="mb-1">Costo por unidad: `+ currency + ` ` + unitCost + `
                        </div>                  
                        <div class="mb-1"> Cantidad: <input id=product1 type="number" value="`+ count + `" onchange="setSubtotal(), setTotal()" /input>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="list-group-item">
                    <div class="row">
                    <b class="mb-1" id="subtotal">Total en productos: UYU ${subTotal}</b>
                    </div>
                    </div>

                    `

                document.getElementById("cart-container").innerHTML = cart
                setTotal()

            });
    }

    showCartItems();

    // function addatts(){

       

    // }






    //Se obtiene el formulario de publicación de producto
    var sellForm = document.getElementById("cart-info");

    //Se agrega una escucha en el evento 'submit' que será
    //lanzado por el formulario cuando se seleccione 'Vender'.
    sellForm.addEventListener("submit", function (e) {
        
        checkInfo();

        //Esto se debe realizar para prevenir que el formulario se envíe (comportamiento por defecto del navegador)
        if (e.preventDefault) e.preventDefault();
        return false;
    });
});