const toggleSwitch = document.querySelector('.switch input');
const body = document.body;
const header = document.querySelector('header');
const footer = document.querySelector('footer');

// Function to enable dark mode
function enableDarkMode() {
    body.classList.add('dark-mode');
    header.classList.add('dark-mode');
    footer.classList.add('dark-mode');
    toggleSwitch.checked = true;
    localStorage.setItem('theme', 'dark'); // Save preference
}

// Function to disable dark mode
function disableDarkMode() {
    body.classList.remove('dark-mode');
    header.classList.remove('dark-mode');
    footer.classList.remove('dark-mode');
    toggleSwitch.checked = false;
    localStorage.setItem('theme', 'light'); // Save preference
}

// Check stored theme preference on page load
if (localStorage.getItem('theme') === 'dark') {
    enableDarkMode();
} else {
    disableDarkMode();
}

// Listen for toggle switch change
toggleSwitch.addEventListener('change', function () {
    if (this.checked) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});