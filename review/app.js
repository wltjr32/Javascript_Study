const reviewList = [
    {
        id: 1,
        name: "Duck",
        type: "indoor",
        img: "다운로드.jpg",
        text: "very Cute"
    },
    {
        id: 2,
        name: "Duck",
        type: "outdoor",
        img: "오리.jpg",
        text: "Duck is Cute"
    },
    {
        id: 3,
        name: "Duck",
        type: "animals",
        img: "오리투.jpg",
        text: "CUTE."
    }
]
const mainImg = document.querySelector("#main-img");
const animalsName = document.querySelector("#animals-img");
const type = document.querySelector("#type");
const info = document.querySelector("#info");

const preBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");

let currentIndex = 1;

window.addEventListener("DOMContentLoaded", function() {
    let item = reviewList[currentIndex];
    mainImg.src = item.img;
    animalsName.textContent = item.name;
    type.textContent = item.type;
    info.textContent = item.text;
});
function showReview(index) {
    const item = reviewList[index];
    mainImg.src = item.img;
    animalsName.textContent = item.name;
    type.textContent = item.type;
    info.textContent = item.text;
}

preBtn.addEventListener("click", function() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = reviewList.length -1
    }
    showReview(currentIndex);
})

nextBtn.addEventListener("click", function() {
    currentIndex++;
    if (currentIndex >= reviewList.length) {
        currentIndex = 0
    }
    showReview(currentIndex);
})