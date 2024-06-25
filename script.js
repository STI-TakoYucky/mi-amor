const introbttn = document.getElementById("intro-next");
const firstPage = document.getElementById("firstPage");
const secondPage = document.getElementById("secondPage");

introbttn.addEventListener('click', () => {

        if(!firstPage.classList.contains("page-active-block")){
            firstPage.classList.add("page-active-block");
            secondPage.classList.add("page-active-flex");
            introbttn.classList.remove("fa-chevron-right");
            introbttn.classList.add("fa-chevron-left");
        } else {
            firstPage.classList.remove("page-active-block");
            secondPage.classList.remove("page-active-flex");
            introbttn.classList.add("fa-chevron-right");
            introbttn.classList.remove("fa-chevron-left");
        }
});