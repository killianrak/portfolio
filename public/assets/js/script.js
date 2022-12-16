const paragraph = document.querySelector('header h1');
const phrase = "Don\'t search the keys of success, just break the door.";


function typewriter(phrase, index) {
        if(index < phrase.length){

            setTimeout(() => {
                paragraph.innerHTML = phrase.substring(0, index+1)  + "<span aria-hidden=\"true\"></span>"
                typewriter(phrase, index + 1)
            }, Math.floor(Math.random() * (100 - 50 + 1)) + 50)
        }
        
    }


typewriter(phrase, 0);

const bubble = document.querySelectorAll('.bubble')

window.addEventListener('scroll', () => {

    const {scrollTop, clientHeight} = document.documentElement
    for(i = 0; i < bubble.length; i++) {
        if(scrollTop > (scrollTop + bubble[i].getBoundingClientRect().top - clientHeight * 0.8)){
            bubble[i].classList.add('active')
       }
    }


})

const web_button = document.querySelector('.nav span:nth-child(1)')
const gs_button = document.querySelector('.nav span:nth-child(2)')

const web = document.querySelector('.web')
const gs = document.querySelector('.gs')

web_button.addEventListener('click', () => {

    if(gs.classList.contains('isshowed')){
        web.classList.add('isshowed')
        gs.classList.remove('isshowed')
    }

})

gs_button.addEventListener('click', () => {

    if(web.classList.contains('isshowed')){
        web.classList.remove('isshowed')
        gs.classList.add('isshowed') 
    }

})

const largeur = window.innerWidth

const profile = document.querySelector('header .profile img')
