welcomeMessage();
/// Fungsi untuk menampilkan pesan sambutan
function welcomeMessage() {
    /// Minta input nama dari pengguna lewat prompt
    let username = prompt("Masukkan Nama:");

    /// Jika pengguna memasukkan nama
    if (username) {
        /// Tampilkan nama pengguna di elemen dengan id="username"
        document.getElementById("username").innerHTML = username;
    } else {
        /// Jika tidak ada nama dimasukkan, tampilkan pesan default
        alert("Selamat datang di portofolio saya!");
    }
}

/// Fungsi untuk validasi form
function validateForm() {
    /// Ambil nilai dari field form berdasarkan id
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    /// Cek apakah ada field yang kosong
    if (name === "" || email === "" || message === "") {
        /// Jika ada field kosong, tampilkan alert
        alert("Harap isi semua field!");
    } else {
        /// Jika semua field terisi, tampilkan pesan sukses
        alert(`Terima kasih, ${name}! Form berhasil dikirim.`);
    }
}
