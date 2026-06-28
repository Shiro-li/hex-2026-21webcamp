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

