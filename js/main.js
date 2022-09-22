/*ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ
# back-to-top
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
# setting box
ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ*/
let Setting_Btn = document.querySelector(".setting-box i");
let setting_box = document.querySelector(".setting-box");
let main_color = localStorage.getItem("color_option");
let box_Colors = document.querySelectorAll(".box-colors li ");

/********* # Setting button event # **************/
Setting_Btn.addEventListener("click", () => {
  setting_box.classList.toggle("open");
  Setting_Btn.classList.toggle("fa-spin");
});
/********* # Check local storage # **************/
if (main_color !== null) {
  box_Colors.forEach((li) => {
    li.classList.remove("active");
    if (li.dataset.color === main_color) {
      li.classList.add("active");
    }
  });
  document.documentElement.style.setProperty("--main-color", main_color);
}
/********* # change local storage and active class # **************/
box_Colors.forEach((li) => {
  li.addEventListener("click", (each_li) => {
    box_Colors.forEach((li) => {
      li.classList.remove("active");
      document.documentElement.style.setProperty(
        "--main-color",
        each_li.target.dataset.color
      );
    });
    each_li.target.classList.add("active");
    localStorage.setItem("color_option", each_li.target.dataset.color);
  });
});
/********* # change background active class # **************/
let random_bg_option = document.querySelectorAll(".random-background span");
let bg_localStorage = localStorage.getItem("background_roundom");
let backgroundOption = true;
let BG_ClearInterval;

if (bg_localStorage !== null) {
  random_bg_option.forEach((span) => {
    span.classList.remove("active");
  });
  if (bg_localStorage === "true") {
    backgroundOption = true;
    document.querySelector(".yes").classList.add("active");
  } else {
    backgroundOption = false;
    document.querySelector(".no").classList.add("active");
  }
}

random_bg_option.forEach((span) => {
  span.addEventListener("click", (ele) => {
    random_bg_option.forEach((span) => {
      span.classList.remove("active");
    });
    ele.target.classList.add("active");
    if (ele.target.dataset.background === "yes") {
      backgroundOption = true;
      randomImg();
      localStorage.setItem("background_roundom", backgroundOption);
    } else {
      backgroundOption = false;
      clearInterval(BG_ClearInterval);
      localStorage.setItem("background_roundom", backgroundOption);
    }
  });
});
/*ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ
# landing bg
ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ*/
let landing = document.querySelector(".landing");
let bg = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

randomImg = () => {
  if (backgroundOption === true) {
    BG_ClearInterval = setInterval(() => {
      let random = Math.floor(Math.random() * bg.length);
      landing.style.cssText = `background-image: url(../img/${bg[random]})`;
    }, 1000);
  }
};

randomImg();
