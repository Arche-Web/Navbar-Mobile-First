const toggleBtn = document.querySelector('.toggle-btn')
const nav = document.querySelector('nav')

toggleBtn.addEventListener('click', function() {
    nav.classList.toggle('is-open')
})