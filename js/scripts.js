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

    // Toggle menu saat tombol burger diklik
    burgerMenu.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Fungsi untuk memperbarui waktu secara real-time
    function updateTime() {
        const now = new Date();
        currentTime.textContent = now.toLocaleString();
    }

    setInterval(updateTime, 1000);
    updateTime();

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
        
        form.reset();
    });
});
