const toggleCategory = document.querySelectorAll('.inputData');
const toggleStudentClass = document.querySelectorAll('.list');

toggleCategory.forEach(function (item, index) {
    item.addEventListener('click', function () {
        toggleStudentClass.forEach((item) => {
            item.classList.remove('toggleCategory');
        });
        toggleStudentClass[index].classList.add('toggleCategory');
    })
});

setPage();
function setPage() {
    search();
}
function search() {
    toggleCategory.forEach((element, index) => {
        element.addEventListener('keyup', () => {
            const word = element.value.toLowerCase();
            const children = toggleStudentClass[index].childNodes;
            children.forEach((e) => {
                if (e.childNodes.length) {
                    if (e.textContent.toLowerCase().indexOf(word) > -1) {
                        e.style.display = "block";
                    }
                    else {
                        e.style.display = "none";
                    }
                }
            })
            if (index == 0) {
                const children1 = toggleStudentClass[0].childNodes;
                let value = false;
                const word2 = toggleCategory[0].value.toLowerCase();
                children1.forEach((e) => {
                    if (e.childNodes.length) {
                        if (e.textContent.toLowerCase() === word2) {
                            toggleCategory[1].disabled = false;
                            value = true;
                        }
                        else {
                            if (!value) {
                                toggleCategory[1].disabled = true;
                            }
                        }
                    }
                });
            }
        });
        const children = toggleStudentClass[index].childNodes;
        let index2 = 1;
        children.forEach((e, i) => {
            e.addEventListener('click', () => {
                children[index2].style.backgroundColor = "#40739e";
                element.value = e.textContent;
                e.style.backgroundColor = "#28699e";
                index2 = i;
                toggleCategory[1].disabled = false;
            })
        })
    })
}
