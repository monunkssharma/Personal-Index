let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sendMessageBtn=document.getElementById('sendMessage');


sendMessageBtn.onclick=()=>{
    alert("Your message has been sent successfully");
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



/*------- about me read more page - activate---------

let btn = document.querySelector('.about .about-content .btn');
let readmore = document.querySelector('.hidden')

btn.onclick = () => {
    readmore.classList.toggle('active');
};


*/
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let heigth = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + heigth) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            });
        };
    });

    /*----------------------sticky navbar ------------*/

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*----------------------remove toggle icon and navbar when click navbar link (scroll) ------------*/

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};




    /*----------------------scroll reveal ------------*/

    ScrollReveal({ 
        reset: true,
        distance: '20px',
        duration: 2000,
        delay: 200

     });

     ScrollReveal().reveal('.home-content, .heading',{ origin: 'top'});
     ScrollReveal().reveal('.home-img, .service-container, .portfolio-box, .contact form, .services-box',{ origin: 'bottom'});
     ScrollReveal().reveal('.home-content h1, .about-img',{ origin: 'left'});
     ScrollReveal().reveal('.home-content p, .about-content',{ origin: 'right'});

     
    /*---------------------typed js ------------*/

    const typed = new Typed('.multiple-text',{
        strings:['Frontend Developer','Java Backend Developer','Oracle Databases','SpringBoot Framework'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    })
