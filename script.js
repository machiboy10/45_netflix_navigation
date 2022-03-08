const open_btn = document.querySelector('.open-btn');
const close_btn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav');

//add delay through js
// open_btn.addEventListener('click', () => {
//     nav.forEach((nav_el,idx) => {
//         setTimeout(() => {
//             nav_el.classList.add('visible');
//         }, (idx + 1) * 100);
//     })
// })

// close_btn.addEventListener('click', () => {
//     nav.forEach((nav_el,idx) => {
//         setTimeout(() => {
//             nav_el.classList.remove('visible');
//         }, (idx + 1) * 100);
//     })
// })

open_btn.addEventListener('click', () => {
    nav.forEach((nav_el) => {
        nav_el.classList.add('visible');
    })
})
close_btn.addEventListener('click', () => {
    nav.forEach((nav_el) => {
        nav_el.classList.remove('visible');
    })
})