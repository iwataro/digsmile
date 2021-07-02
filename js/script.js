$(function(){


    // メニュー
    $('.nav_toggle').on('click', function () {
        $('.nav_toggle, .nav').toggleClass('show');
    });

});


// スクロール変化
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("header-scroll", window.scrollY > 450);
});