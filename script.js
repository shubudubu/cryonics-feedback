document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");
    const spinner = document.getElementById("loading-spinner");
    const themeToggle = document.getElementById("theme-toggle");

    // Handle Form Submission
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent default form submission
        spinner.style.display = "block"; // Show loading spinner

        let formData = new FormData(form);

        fetch(form.action, {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            spinner.style.display = "none"; // Hide spinner
            if (data.success) {
                formMessage.innerHTML = "<p style='color: green;'>✅ Message sent successfully!</p>";
                form.reset(); // Reset form fields
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
        if (document.body.classList.contains("dark-mode")) {
            themeToggle.innerText = "☀️";
        } else {
            themeToggle.innerText = "🌙";
        }
    });
});
