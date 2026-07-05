// service手風琴區域
//https://hackmd.io/ZTlojGilTy21i8iEh_xNkw?view
const faqheader = document.querySelectorAll('.faq-header');

faqheader.forEach((item) => {
  item.addEventListener('click',() => {
    const currentItem = item.parentElement;
    currentItem.classList.toggle('faqactive');
  });
});

// 首頁nvbar

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