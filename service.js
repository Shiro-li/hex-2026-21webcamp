// service手風琴區域
//https://hackmd.io/ZTlojGilTy21i8iEh_xNkw?view
const faqheader = document.querySelectorAll('.faq-header');

faqheader.forEach((item) => {
  item.addEventListener('click',() => {
    const currentItem = item.parentElement;
    currentItem.classList.toggle('faqactive');
  });
});