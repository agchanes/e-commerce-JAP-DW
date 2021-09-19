//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var product = {};

let commentList = ""

var today = new Date();

document.addEventListener("DOMContentLoaded", function (e) {

    function showImagesGallery(array) {

        let gallery = "";
    
        for (let i = 0; i < array.length; i++) {
            let imageSrc = array[i];
    
            gallery += `
            <div class="col-lg-3 col-md-4 col-6">
                <div class="d-block mb-4 h-100">
                    <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
                </div>
            </div>
            `
    
            document.getElementById("productImagesGallery").innerHTML = gallery;
        }
    }

    function showInfo() {

        fetch(PRODUCT_INFO_URL)
            .then(result => result.json())
            .then(data => {
                product = data;


                let productNameHTML = document.getElementById("productName");
                let productDescriptionHTML = document.getElementById("productDescription");
                let productCostHTML = document.getElementById("productCost");
                let productSoldCountHTML = document.getElementById("productSoldCount");
                let productCategoryHTML = document.getElementById("productCategory");


                productNameHTML.innerHTML = product.name;
                productDescriptionHTML.innerHTML = product.description;
                productCostHTML.innerHTML = product.currency + " " + product.cost;
                productSoldCountHTML.innerHTML = product.soldCount;
                productCategoryHTML.innerHTML = product.category;

                //Muestro las imagenes en forma de galería
                showImagesGallery(product.images);
            })
    }

    function showComments() {
        fetch(PRODUCT_INFO_COMMENTS_URL)
            .then(result => result.json())
            .then(data => {


                for (let i = 0; i < data.length; i++) {

                    let commentInfo = data[i]

                    let score = commentInfo.score
                    let description = commentInfo.description
                    let user = commentInfo.user
                    let dateTime = commentInfo.dateTime

                    commentList +=
                        `
                <hr class="my-3">
                <div class="row">
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">Puntuación: `+ score + `</h4>
                        </div>
                        <p class="mb-1">` + user + `</p>
                        <p class="mb-1">` + description + `</p>
                        <p class="mb-1">` + dateTime + `</p>
                    </div>
                </div>
                
                `
                }

                document.getElementById("productComments-container").innerHTML = commentList
            })
    }

    function readStars() {

        if (document.getElementById("star-1").checked) {
            return 1
        } else {
            if (document.getElementById("star-2").checked) {
                return 2
            } else {
                if (document.getElementById("star-3").checked) {
                    return 3
                } else {
                    if (document.getElementById("star-4").checked) {
                        return 4
                    } else {
                        if (document.getElementById("star-5").checked) {
                            return 5
                        }
                    }

                }

            }
        }


    }

    function clearStars() {
        document.getElementById("star-1").checked = false
        document.getElementById("star-2").checked = false
        document.getElementById("star-3").checked = false
        document.getElementById("star-4").checked = false
        document.getElementById("star-5").checked = false
    }

    function sendComment() {

        let score = readStars();
        let user = localStorage.getItem("username");
        let commentText = document.getElementById("commentText").value
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


        document.getElementById("productComments-container").innerHTML +=
            `
        <hr class="my-3">
                <div class="row">
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">Puntuación: `+ score + `</h4>
                        </div>
                        <p class="mb-1">` + user + `</p>
                        <p class="mb-1">` + commentText + `</p>
                        <p class="mb-1">` + date + ` ` + time + ` </p>
                    </div>
                </div>

        `

        document.getElementById("commentText").value = ""
        alert("¡Se ha enviado tu comentario!");
        clearStars();


    }

    document.getElementById("commentBTN").onclick = function () {
        sendComment();
    }

    
    showInfo();

    showComments();
})
