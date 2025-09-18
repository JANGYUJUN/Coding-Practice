alert("Hello World");

const btnLight = document.getElementById("theme-light");
const btnDark = document.getElementById("theme-dark");

btnDark.addEventListener("click", () => {
    document.body.classList.add("dark");
});

btnLight.addEventListener("click", () => {
    document.body.classList.remove("dark");
});

const btns = document.querySelectorAll(".album-list button");
const view = document.querySelector(".album-view");
const bigImg = document.querySelector(".album-view img");

console.log('btns : ', btns );

btns[0].addEventListener("click", () => {
    view.style.backgroundColor = '#ffd6d4';
    bigImg.src = './images/irangi_3.png';
});
btns[1].addEventListener("click", () => {
    view.style.backgroundColor = '#c4d39f';
    bigImg.src = './images/irangi_4.png';
});
btns[2].addEventListener("click", () => {
    view.style.backgroundColor = '#bce0ff';
    bigImg.src = './images/irangi_5.png';
});
btns[3].addEventListener("click", () => {
    view.style.backgroundColor = '#d4c4da';
    bigImg.src = './images/irangi_6.png';
});
