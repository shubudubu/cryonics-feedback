document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");
    const spinner = document.getElementById("loading-spinner");
    const themeToggle = document.getElementById("theme-toggle");

    // Handle Form Submission
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        spinner.style.display = "block";

        let formData = new FormData(form);

        fetch(form.action, {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            spinner.style.display = "none";
            if (data.success) {
                formMessage.innerHTML = "<p style='color: green;'>✅ Message sent successfully!</p>";
                form.reset();
            } else {
                formMessage.innerHTML = "<p style='color: red;'>❌ Failed to send message. Try again.</p>";
            }
        })
        .catch(error => {
            spinner.style.display = "none";
            formMessage.innerHTML = "<p style='color: red;'>❌ An error occurred. Please try again.</p>";
        });
    });

    // Dark Mode Toggle
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        themeToggle.innerText = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });
});
