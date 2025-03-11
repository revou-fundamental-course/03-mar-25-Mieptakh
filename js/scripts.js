document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("message-form");
    const welcomeMessage = document.getElementById("welcome-message");

    const outputName = document.getElementById("output-name");
    const outputDob = document.getElementById("output-dob");
    const outputGender = document.getElementById("output-gender");
    const outputMessage = document.getElementById("output-message");
    const currentTime = document.getElementById("current-time");

    const burgerMenu = document.querySelector(".burger-menu");
    const navLinks = document.querySelector(".nav-links");
    const notification = document.getElementById("notification");

    // Toggle menu saat tombol burger diklik dengan efek transisi
    burgerMenu.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        burgerMenu.classList.toggle("open");
    });

    // Fungsi untuk memperbarui waktu secara real-time dengan animasi
    function updateTime() {
        const now = new Date();
        currentTime.style.opacity = "0";
        setTimeout(() => {
            currentTime.textContent = now.toLocaleString();
            currentTime.style.opacity = "1";
        }, 300);
    }

    setInterval(updateTime, 1000);
    updateTime();

    // Fungsi untuk menampilkan notifikasi
    function showNotification(message) {
        notification.textContent = message;
        notification.classList.add("show");

        setTimeout(() => {
            notification.classList.remove("show");
        }, 3000);
    }

    // Event listener untuk form submit
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value.trim();
        const dob = document.getElementById("dob").value;
        const gender = document.querySelector('input[name="gender"]:checked');
        const message = document.getElementById("message").value.trim();
        
        if (name) {
            welcomeMessage.textContent = `Hi, ${name}! Welcome To Website`;
        } else {
            welcomeMessage.textContent = "Hi, Welcome To Website";
        }

        outputName.textContent = name || "-";
        outputDob.textContent = dob || "-";
        outputGender.textContent = gender ? gender.value : "-";
        outputMessage.textContent = message || "-";

        // Menampilkan notifikasi
        showNotification("Pesan berhasil dikirim!");

        form.reset();
    });
});
