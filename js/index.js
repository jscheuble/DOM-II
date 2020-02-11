//nav -mouseenter/leave
document.querySelectorAll('.nav-link').forEach(el => {
    el.addEventListener('mouseenter', () => {
        el.style.color = 'red';
        el.style.transform = 'scale(1.3)';
    });
});

document.querySelectorAll('.nav-link').forEach(el => {
    el.addEventListener('mouseleave', () => {
        el.style.color = 'black';
        el.style.transform = 'scale(1)';
    });
});

//header image -dbl click
let changeImg = document.querySelector('#bus');
changeImg.addEventListener('dblclick', () => {
    changeImg.src = 'img/bus2.jpg';
});


//logo -click
let logoColor = document.querySelector('.logo-heading');
logoColor.addEventListener('click', () => {
    logoColor.style.color = '#FF00ff'
});

//paragraphs -mouseenter/leave
document.querySelectorAll('div p').forEach(el => {
    el.addEventListener('mouseenter', () => {
        el.style.background = '#AFEEEE';
    });
});
document.querySelectorAll('div p').forEach(el => {
    el.addEventListener('mouseleave', () => {
        el.style.background = 'transparent';
    });
});

//window -scroll
window.addEventListener('scroll', () => {
    const body = document.querySelector('body');
    body.style.background = '#FFB6C1';
});

//window -load
window.addEventListener('load', () => {
    alert('fully loaded :p');
})