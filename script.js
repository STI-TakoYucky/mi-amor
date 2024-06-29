
try{
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
} catch (err){
    console.log(err);
}


try {
    let cards = [
        {
            title: "Reading",
            img: "/images/h2.png",
            desc: "Reading stories is my favorite thing to do whether I am busy or not. I read stories every day. It started when the pandemic happened.",
            link: "my reading list:"
        },
        {
            title: "Watching",
            img: "/images/h3.png",
            desc: "I love to watch series, especially Grey’s Anatomy.",
            link: ""
        },
        {
            title: "Listening Music!!",
            img: "/images/h1.png",
            desc: "Music is my comfort. It makes my heart happy.",
            link: "my playlist:"
        }
    ];
    
    const hobbyContainer = document.querySelector(".hobbies-container");
    let active = false;
    hobbyContainer.addEventListener('click', (e) => {
        const body = document.body;
        
       
        if (e.target.classList.contains('hob-img') && !active) {
            active = true;
            const id = e.target.id;
            let card;
            
            if (id === "readingCard") {
                card = cards[0];
       
            } else if (id === "watchingCard") {
                card = cards[1];
       
            } else if (id === "musicCard") {
                card = cards[2];
                
            }
            
            if (card) {
                const modalHtml = displayModal(card.title, card.img, card.desc, card.link);
                active = true;
                body.insertAdjacentHTML('beforeend', modalHtml);
                hobbyContainer.classList.add("mainBlur");
                
    
                const modalExit = document.getElementById("modal-exit-bttn");
    
                modalExit.addEventListener('click', () => {
                    const modal = document.querySelector(".hobby-modal");
                    hobbyContainer.classList.remove("mainBlur");
                    body.removeChild(modal);
                    active = false;
                });
            }
        } else {
            console.log("Clicked element is not a hobby image");
        }
    });
    
    
    
    function displayModal(title, img, desc, link) {
        
        return `<article class="hobby-modal">
            <div>
                <div class="modal-header">
                    <h1>${title}</h1>
                    <i class="fa-solid fa-circle-xmark" id="modal-exit-bttn"></i>
                </div>
                <div class="modal-container">
                    <div class="modal-img-container"><img src="${img}" alt=""></div>
                    <div class="modal-desc">
                        <div><p>${desc}</p></div>
                        <div><p>${link}</p></div>
                    </div>
                </div>
            </div>
        </article>`;
    }
    
    
} catch (error) {
    
}



try {
    const menuBttn = document.getElementById('home-page-bttn');
    const mobileMenu = document.querySelector('.mobile-nav');
    const close = document.querySelector('.mobile-nav-close')

    menuBttn.addEventListener('click', () => {
        mobileMenu.classList.add("activeMenu");
        console.log("HELLO");
    })

    close.addEventListener('click', () => {
        if (mobileMenu.classList.contains("activeMenu")) {
            mobileMenu.classList.remove("activeMenu")
        }
    })
} catch (err) {
    
}