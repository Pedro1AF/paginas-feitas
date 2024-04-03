function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    if (name === "" || email === "" || phone === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }
    return true;
}