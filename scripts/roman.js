const toggleSwitch = document.querySelector('.switch input');
const body = document.body;
const header = document.querySelector('header');
const footer = document.querySelector('footer');


function enableDarkMode() {
    body.classList.add('dark-mode');
    header.classList.add('dark-mode');
    footer.classList.add('dark-mode');
    toggleSwitch.checked = true;
    localStorage.setItem('theme', 'dark');
}


function disableDarkMode() {
    body.classList.remove('dark-mode');
    header.classList.remove('dark-mode');
    footer.classList.remove('dark-mode');
    toggleSwitch.checked = false;
    localStorage.setItem('theme', 'light'); 
}


if (localStorage.getItem('theme') === 'dark') {
    enableDarkMode();
} else {
    disableDarkMode();
}


toggleSwitch.addEventListener('change', function () {
    if (this.checked) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});