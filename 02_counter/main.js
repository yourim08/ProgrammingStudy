// function countPlus(){  
//     let number = document.getElementById("number");
//     let count = Number(number.textContent) + 1;
//     number.textContent = count;
// }


let count = 0;

// HTML -> JS
const resultH1 = document.getElementById("result");
// const resultH1 = document.querySelector("#result");
// const plusButton = document.getElementsByTagName("button")[0];

// button 누르면 숫자 증가하자
// plusButton.addEventListener("click",  () => {
//     count++;
//     resultH1.innerHTML = count;
// });

// onClick 속성
// plusButton.onClick = () => {
//     count++;
//     resultH1.innerHTML = count;
// };


// html태그에 자체 onclick 속성 주기
function plus (number = 1) {
    count += number;
    resultH1.innerHTML = count;
}

// const plus = (number = 1) => {
//     count += number;
//     resultH1.innerHTML = count;
// };
