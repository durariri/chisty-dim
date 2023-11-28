document.querySelector('.menu-toggle').addEventListener('click', function() {
    var menuToggle = document.querySelector('.menu-toggle');
    var icon = document.querySelectorAll('.menu-toggle .icon .bar');
    var nav = document.querySelector('.nav');

    menuToggle.classList.toggle('active');
    icon.forEach(bar => bar.classList.toggle('active'));
    nav.classList.toggle('active');
});
function clearInput() {
    document.getElementById('text-input').value = '';
}
