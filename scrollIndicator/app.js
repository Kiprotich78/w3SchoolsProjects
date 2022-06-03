const windowLenght = document.querySelector("p");
const input = document.querySelector("input");

windowLenght.addEventListener("scroll", () => {
    input.max = windowLenght.scrollHeight - windowLenght.clientHeight;
    var height = windowLenght.scrollTop;
    console.log(height);
    input.addEventListener('change', () => {
        height = input.value;
        windowLenght.scrollTo(0, height);

    })
    console.log(height);
    input.value = parseInt(height);

});
