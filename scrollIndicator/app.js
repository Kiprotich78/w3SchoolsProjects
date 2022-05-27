const windowLenght = document.querySelector('p');
const input = document.querySelector('input');
const lenght = windowLenght.getBoundingClientRect().height;
input.max = lenght - 476;
console.log(lenght);
window.addEventListener('scroll', () => {
    input.value = parseInt(window.scrollY);
    console.log(input.value);
})