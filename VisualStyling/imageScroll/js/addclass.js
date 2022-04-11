window.addEventListener('scroll', addClassOnScroll)


let elements = [...document.querySelectorAll('[data-addclass-on-scroll]')]


function addClassOnScroll(){

    if(elements.length === 0){
        window.removeEventListener('scroll', addClassOnScroll)
    }
    function isElementIntoView(el){
        let rect = el.getBoundingClientRect()
        return (
           ( rect.top <= 0 && rect.bottom >= 0) ||
           (rect.top >= 0 && rect.bottom <= innerHeight )
        )
    }



    elements.forEach(el => {
        if(isElementIntoView(el)){
            let delay = parseInt(el.getAttribute('data-addclass-on-scroll-delay')) || 0;

            setTimeout(function(){
                let _class = el.getAttribute('data-addclass-on-scroll');
                el.classList.add(_class);
                el.removeAttribute('data-addclass-on-scroll');
                el.removeAttribute('data-addclass-on-scroll-delay');

                elements = [...document.querySelectorAll('[data-addclass-on-scroll]')]
            }, delay);
        }
    })
}

addClassOnScroll()