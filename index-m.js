const nvbarmenu = document.querySelector('.nvbar-m-menu');
const nvbarclose = document.querySelector('.nvbar-m-close');
const nvbarlist = document.querySelector('.nvbar-list');

nvbarmenu.addEventListener('click', () => {
    nvbarlist.classList.add('nvactive');
    nvbarmenu.classList.add('remove');
    nvbarclose.classList.add('nvactive');
});

nvbarclose.addEventListener('click', () => {
    nvbarlist.classList.remove('nvactive');
    nvbarclose.classList.remove('nvactive');
    nvbarmenu.classList.remove('remove');
});