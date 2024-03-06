
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // change fag icon

        const icon = faq.querySelector('.faq-icon i');
        if(icon.className === 'fas fa-minus') {
            icon.className = 'fas fa-plus';
        } else{
            icon.className = 'fas fa-minus';
        }
    })
})



const test= document.querySelector('#disNone');




//show nav menu

const menu = document.querySelector('.navlinks');
const menuBtn = document.querySelector('#open-menu');
const closeBtn = document.querySelector('#close-menu');



menuBtn.addEventListener('click', () =>{
    menu.style.display = "block";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";

})

const closeNav = () =>{
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav);



// TO TOP BUTTON SMOOTH EFFECT..
// TO TOP BUTTON JS

const scrollUpBtn = document.getElementById('scroll-up-btn');

scrollUpBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

