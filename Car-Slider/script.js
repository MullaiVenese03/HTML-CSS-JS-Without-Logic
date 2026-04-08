var next = document.getElementById('next');
var prev = document.getElementById('prev');

next.addEventListener('click', () => {
    let lists = document.querySelectorAll('.item');
    let slide = document.getElementById('slide');
    slide.appendChild(lists[0]);
});

prev.addEventListener('click', () => {
    let lists = document.querySelectorAll('.item');
    let slide = document.getElementById('slide');
    slide.prepend(lists[lists.length - 1]);
});