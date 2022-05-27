const links = document.querySelectorAll('a');
const moreInfo = document.querySelectorAll('article');

links.forEach((element, index) => {
    element.addEventListener("click", () => {
        moreInfo.forEach((e, index) => {
            if (e.classList.contains("show")) {
                e.classList.remove("show");
                links[index].classList.remove("changeColor");
            }
        });
        moreInfo[index].classList.add('show');
        element.classList.add("changeColor");
    })
})
