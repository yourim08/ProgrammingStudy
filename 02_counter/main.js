// function countPlus(){  
//     let number = document.getElementById("number");
//     let count = Number(number.textContent) + 1;
//     number.textContent = count;
// }


let count = 0;

// HTML -> JS
const resultH1 = document.getElementsByTagName("h1")[0];
const plusButton = document.getElementsByTagName("button")[0];

// button 누르면 숫자 증가하자
plusButton.addEventListener("click",  () => {
    count++;
    resultH1.innerHTML = count;
});