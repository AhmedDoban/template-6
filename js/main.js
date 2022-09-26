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
/********* # Show And hide bullets # **************/
let bullets = document.querySelectorAll(".show-bullets span");
let show = localStorage.getItem("show-bullets");
let nav_bullets = document.querySelector(".nav-bullets");
if (show !== null) {
  bullets.forEach((e) => {
    e.classList.remove("active");
  });
  if (show === "true") {
    nav_bullets.style.display = "block";
    document.querySelector(".show-bullets .yes").classList.add("active");
  } else {
    nav_bullets.style.display = "none";
    document.querySelector(".show-bullets .no").classList.add("active");
  }
}
bullets.forEach((bull) => {
  bull.addEventListener("click", (e) => {
    bullets.forEach((e) => {
      e.classList.remove("active");
    });
    e.target.classList.add("active");
    if (e.target.dataset.bullets == "yes") {
      nav_bullets.style.display = "block";
      localStorage.setItem("show-bullets", true);
    } else {
      nav_bullets.style.display = "none";
      localStorage.setItem("show-bullets", false);
    }
  });
});

/*ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ
# landing bg
ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ*/
let landing = document.querySelector(".landing");
let bg = [
  "../img/01.jpg",
  "../img/02.jpg",
  "../img/03.jpg",
  "../img/04.jpg",
  "../img/05.jpg",
];

randomImg = () => {
  if (backgroundOption === true) {
    BG_ClearInterval = setInterval(() => {
      let random = Math.floor(Math.random() * bg.length);
      landing.style.cssText = `background-image: url(${bg[random]})`;
    }, 10000);
  }
};

randomImg();
/*ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ
# our Skills
ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ*/
let ourSkills = document.querySelector(".our-skills");

window.onscroll = () => {
  // offsetTop  mean the value of the height before the section
  let offsetTop = ourSkills.offsetTop;
  // offsetHeight  mean the value of the height of the section skills
  let offsetHeight = ourSkills.offsetHeight;
  // WindowHeight  mean the value of the height of the hole window
  let WindowHeight = window.innerHeight;
  // windowScrollTop  mean the value of the current hight from the WindowHeight
  let windowScrollTop = window.pageYOffset;
  if (windowScrollTop > offsetTop + offsetHeight - WindowHeight) {
    let allSkills = document.querySelectorAll(
      ".skill-box .skill-progress span "
    );
    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.proggress;
    });
  }
};
/*ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ
# our gallary
ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ*/
let allImgs = document.querySelectorAll(".our-gallary img");
allImgs.forEach((img) => {
  img.addEventListener("click", (e) => {
    //overlay
    let overlay = document.createElement("div");
    overlay.className = "popup-overlay";
    document.body.appendChild(overlay);
    // popup box
    let popupBox = document.createElement("div");
    popupBox.className = "popup-Box";
    // alt text
    if (img.alt !== null) {
      let altHeading = document.createElement("h3");
      textNode = document.createTextNode(img.alt);
      altHeading.appendChild(textNode);
      popupBox.appendChild(altHeading);
    }

    // img popup
    let img_pop = document.createElement("img");
    img_pop.className = "poped-img";
    img_pop.src = img.src;
    popupBox.appendChild(img_pop);
    document.body.appendChild(popupBox);
    // close button
    let closeButton = document.createElement("span");
    let closeButtonText = document.createTextNode("X");
    closeButton.appendChild(closeButtonText);
    closeButton.className = "close-button";
    popupBox.appendChild(closeButton);
  });
});

document.addEventListener("click", (e) => {
  if (e.target.className == "close-button") {
    e.target.parentNode.remove();
    document.querySelector(".popup-overlay").remove();
  }
});
/*ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ
# Nav Bullets
ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ*/
let AllBullets = document.querySelectorAll(".nav-bullets .bullet");
let links = document.querySelectorAll(".main-header a");

scrollToSomewhere = (elements) => {
  elements.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
};
scrollToSomewhere(AllBullets);
scrollToSomewhere(links);
