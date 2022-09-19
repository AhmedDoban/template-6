/*ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ
back-to-top
ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ*/
let btn = document.querySelector(".back-to-top");
btn.addEventListener("click", (e) => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
window.onscroll = (ele) => {
  if (window.scrollY >= 250) {
    btn.style.cssText = "display : flex";
  } else {
    btn.style.cssText = "display : none";
  }
};
/*ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ
landing bg
ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ*/
let landing = document.querySelector(".landing");
let bg = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
  "07.jpg",
  "09.jpg",
  "10.jpg",
];
setInterval(function () {
  let random = (Math.random() * bg.length).toFixed();
  landing.style.cssText = `background-image: url(../img/${bg[random]})`;
}, 10000);
