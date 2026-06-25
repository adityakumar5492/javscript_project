const colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "orange",
    "purple",
    "pink",
    "cyan",
    "brown",
    "black",
    "white",
    "gray",
    "#f15025",
    "#3498db",
    "#2ecc71",
    "#9b59b6",
    "rgb(255,0,0)",
    "rgb(0,255,255)"
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",function(){
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}