
const input = document.querySelector('.input');
const links = document.querySelectorAll('a');
const li = document.querySelectorAll('li');
const count = document.querySelector('.count');
let count2 = 0;
let valueNumber;

input.addEventListener('keyup', () => {
    count2 = 0;
    valueNumber = 0;
    let inputWord = input.value.toUpperCase();
    if (inputWord != "") {
        links.forEach((element, index) => {
            if (element.textContent.toUpperCase().indexOf(inputWord) > -1) {
                li[index].style.display = "";
                valueNumber += 1;
                count.textContent = valueNumber;
            }
            else {
                count2++;
                li[index].style.display = "none";
                if (count2 === li.length) {
                    count.textContent = 0;
                }
            }
        })
    }
    else {
        for (let i = 0; i < li.length; i++){
            li[i].style.display = "";
            count.textContent = 0;
        }
    }
});