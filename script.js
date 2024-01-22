// navbar mobile(hamburger)
const ham = document.querySelector('.hamburger')
const nav = document.querySelector('nav')

ham.addEventListener('click', ()=>{
    nav.classList.toggle('nav--open')
})


// navbar scrolled
const navbar = document.getElementsByTagName('header')[0];

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 0){
        navbar.classList.add('header--scroled')
    }else{
        navbar.classList.remove('header--scroled')
    }
})

// products cards svg color
const products = document.querySelectorAll('.product__cards');
const startGrowing = document.querySelectorAll('.startgrowing__cards');
const combined = [...products, ...startGrowing];

combined.forEach(combinedElement => {
    const cardsItems = combinedElement.querySelectorAll('.cards-item');

    cardsItems.forEach(cardsItem => {
        const svgPaths = cardsItem.querySelectorAll('path');

        cardsItem.addEventListener('mouseover', () => {
            svgPaths.forEach(path => {
                path.setAttribute('stroke', '#FFF');
            });
        });

        cardsItem.addEventListener('mouseout', () => {
            svgPaths.forEach(path => {
                path.setAttribute('stroke', '#640EF1');
            });
        });
    });
});


// brands change color
const brand = document.querySelector('.brands')
const logo = brand.querySelectorAll('svg')

logo.forEach(l => {
    const logoPath = l.querySelectorAll('path')

    l.addEventListener('mouseover', ()=>{
        logoPath.forEach(path => {
            path.setAttribute('fill', '#640EF1')
        })
    })

    l.addEventListener('mouseout', ()=>{
        logoPath.forEach(path => {
            path.setAttribute('fill', '#080C2E')
        })
    })
})

// faq drop down
const faqs = document.querySelectorAll('.faq__item')

faqs.forEach(faq => {
    const svgPaths = faq.querySelectorAll('path')
    let isFaqActive = false;

    faq.addEventListener('click', ()=>{
        isFaqActive = !isFaqActive;

        faq.classList.toggle('faq-active')
        svgPaths.forEach(path => {
            const newColor = isFaqActive ? '#FFF' : '#080C2E';
            path.setAttribute('stroke', newColor);
        })
    })
})