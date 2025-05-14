// SweetAlert2 Functions
function showAlert(message, iconType = 'success') {
    Swal.fire({
        title: message,
        icon: iconType,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
    });
}

// Typing Effect
var typed = new Typed('#typed-text', {
    strings: ['Welcome to the Hospital Management System'],
    typeSpeed: 60,
    backSpeed: 30,
    loop: false
});

// Theme Toggle Function
function toggleTheme() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
}

// Example: Bind the toggleTheme function to a button or event
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
