function validateForm() {
    var password = document.getElementById('confirmPassword').value;
    var username = document.getElementById('username').value;

    if (password.length < 7) {
        alert('La contraseña debe tener al menos 8 caracteres.');
        return false;
    }

    if (password !== "3022nit" && username !== "Nayra") {
        alert('Las contraseñas o el usuario no coinciden.');
        return false;
    }

    return true;
}
