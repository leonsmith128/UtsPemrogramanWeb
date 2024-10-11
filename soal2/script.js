document.getElementById("registrationForm").addEventListener("submit", function(event) {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Kata sandi dan konfirmasi kata sandi tidak cocok!");
        return;
    }
    alert("Terima kasih, registrasi berhasil!");
});
