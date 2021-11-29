//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

      
    function modifyData() {

        document.getElementById("nameInput").removeAttribute("readonly")
        document.getElementById("lastNameInput").removeAttribute("readonly")
        document.getElementById("ageInput").removeAttribute("readonly")
        document.getElementById("usernameInput").removeAttribute("readonly")
        document.getElementById("mailInput").removeAttribute("readonly")
        document.getElementById("telInput").removeAttribute("readonly")
    }

    function localStorageSave(){

        let firstName = document.getElementById("nameInput").value
        let lastName = document.getElementById("lastNameInput").value
        let age = document.getElementById("ageInput").value
        let username = document.getElementById("usernameInput").value
        let mail = document.getElementById("mailInput").value
        let tel = document.getElementById("telInput").value

        let usersData = { "firstName": firstName, "lastName": lastName, "age": age, "username": username, "mail": mail, "tel": tel}

        localStorage.setItem('usersData', JSON.stringify(usersData))
    }

    function showData() {

        let userData = JSON.parse(localStorage.getItem('usersData'))


        let firstName = userData.firstName
        let lastName = userData.lastName
        let age = userData.age
        let username = userData.username
        let mail = userData.mail
        let tel = userData.tel


        document.getElementById("nameInput").value = firstName
        document.getElementById("lastNameInput").value = lastName
        document.getElementById("ageInput").value = age
        document.getElementById("usernameInput").value = username
        document.getElementById("mailInput").value = mail
        document.getElementById("telInput").value = tel
    }

    if(!localStorage.getItem('usersData')){
        localStorageSave();
    };

    showData();

    document.getElementById("modifyBTN").onclick = function () {
        modifyData();
    }

    document.getElementById("saveBTN").onclick = function () {
        localStorageSave();
        window.location.href="my-profile.html";
    }

});


