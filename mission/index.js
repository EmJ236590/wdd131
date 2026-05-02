let selectElem = document.querySelector('select');
let logo = document.querySelector('#logo img'); // Make sure you target the image inside the #logo div

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.querySelector('body').classList.add('dark-theme');
        logo.setAttribute('src', 'byui-logo-dark.png'); // Replace with your dark mode logo image
    } else {
        document.querySelector('body').classList.remove('dark-theme');
        logo.setAttribute('src', 'byui-logo-blue.webp'); // Replace with your light mode logo image
    }
}                