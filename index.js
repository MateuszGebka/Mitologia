const toggleSwitch = document.querySelector('.switch input');
const body = document.body;
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const nav = document.querySelector('nav');


toggleSwitch.addEventListener('change', function() {
    if (this.checked) {
        body.classList.add('dark-mode');
        header.classList.add('dark-mode');
        footer.classList.add('dark-mode');
        nav.classList.add('dark-mode');
    }
    else{
        body.classList.remove('dark-mode');
        header.classList.remove('dark-mode');
        footer.classList.remove('dark-mode');
        nav.classList.remove('dark-mode');
    }
});
