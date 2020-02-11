//nav -mouseenter
document.querySelectorAll('.nav-link').forEach(el => {
    el.addEventListener('mouseenter', () => {
        el.style.color = 'red';
        el.style.transform = 'scale(1.3)';
    });
});

//nav -mouseleave
document.querySelectorAll('.nav-link').forEach(el => {
    el.addEventListener('mouseleave', () => {
        el.style.color = 'black';
        el.style.transform = 'scale(1)';
    });
});

//nav links -click + stop propagation
document.querySelectorAll('.nav-link').forEach(el => {
    el.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        el.style.background = 'pink';
    });
});

//header image -dbl click
let changeImg = document.querySelector('#bus');
changeImg.addEventListener('dblclick', () => {
    changeImg.src = 'img/bus2.jpg';
});


//logo -click + stop propagation
let logo = document.querySelector('.logo-heading');
const grow = (event) => {
    event.stopPropagation();
    event.target.style.color = '#FF00FF';
}
logo.addEventListener('click', grow);

//nav -click
const navigation = document.querySelector('.main-navigation');
navigation.addEventListener('click', () => {
    navigation.style.background = 'purple';
})

//paragraphs -mouseenter
document.querySelectorAll('div p').forEach(el => {
    el.addEventListener('mouseenter', () => {
        el.style.background = '#AFEEEE';
    });
});

//paragraphs -mouseleave
document.querySelectorAll('div p').forEach(el => {
    el.addEventListener('mouseleave', () => {
        el.style.background = 'transparent';
    });
});

//window -scroll
const body = document.querySelector('body');
window.addEventListener('scroll', () => {
    body.style.background = '#FFB6C1';
});

//window -load
window.addEventListener('load', () => {
    alert('fully loaded :p');
});

//window -resize
window.addEventListener('resize', () => {
    logoColor.style.transform = 'scale(2)';
});

//window -mousedown
window.addEventListener('mousedown', () => {
    body.style.background = '#C71585';
});

//window -mouseup
window.addEventListener('mouseup', () => {
    body.style.background = 'salmon';
});

//window -keypress
window.addEventListener('keypress', () => {
    body.style.background = '#ff6347'
});

