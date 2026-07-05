const article = document.querySelectorAll('article');
const modal = document.getElementById('mymodal');
const closebtn = document.getElementById('closeModalBtn');

article.forEach((item) => {
    item.addEventListener('click',() => {
        modal.classList.add('active');
    });
});

closebtn.addEventListener('click',() => {
    modal.classList.remove('active');
});

//首頁 nvbar

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