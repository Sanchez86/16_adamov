/*кнопка на верх*/

var top_show = 150; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
var delay = 1000; // Задержка прокрутки
$(document).ready(function () {



    $(window).scroll(function () { // При прокрутке попадаем в эту функцию
        /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
        if ($(this).scrollTop() > top_show) $('#top').fadeIn();
        else $('#top').fadeOut();
    });
    $('#top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
        /* Плавная прокрутка наверх */
        $('body, html').animate({
            scrollTop: 0
        }, delay);
    });


/* конец кнопка на верх*/

$('#myTab a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
})

 
var top_show3 = 1300;
    $(window).scroll(function () {
        if ($(this).scrollTop() > top_show3) $('.line1').css('width', '326px')
    });

    var top_show4 = 1350;
    $(window).scroll(function () {
        if ($(this).scrollTop() > top_show4) $('.line2').css('width', '342px')
    });

    var top_show5 = 1400;
    $(window).scroll(function () {
        if ($(this).scrollTop() > top_show5) $('.line3').css('width', '743px')
    });
    var top_show6 = 1450;
    $(window).scroll(function () {
        if ($(this).scrollTop() > top_show6) $('.line4').css('width', '522px')
    });
    var top_show7 = 1500;
    $(window).scroll(function () {
        if ($(this).scrollTop() > top_show7) $('.line5').css('width', '618px')
    });
    var top_show8 = 1550;
    $(window).scroll(function () {
        if ($(this).scrollTop() > top_show8) $('.line6').css('width', '498px')
    });
    var top_show9 = 1600;
    $(window).scroll(function () {
        if ($(this).scrollTop() > top_show9) $('.line7').css('width', '353px')
    });
    var top_show16 = 1700;
    $(window).scroll(function () {
        if ($(this).scrollTop() > top_show16) $('.line8').css('width', '599px')
    });


/*
$(window).scroll(function () {
    console.log($(this).scrollTop());
});
  */

    $(".subCol").on("mouseenter",  function () {
        $(".colIcon", this).css('transform', 'rotateY(360deg)')
    });
    $(".subCol").on("mouseleave", function () {
        $(".colIcon", this).css('transform', 'rotateY(0deg)')
    });

var w = window.innerWidth;
if (w < 1400) {
    $(".col").removeClass('wow').addClass('animated');
    $('.radio').addClass('animated flash');
    
}
if (w < 768) {
    $(".col").addClass('wow').removeClass('animated');

}
var time = 3000;

$(".radio1").on("mouseenter", function () {$(".col1").css('display', 'block')});
$(".radio1").on("mouseleave", function () { setTimeout(' $(".col1").fadeOut()', time) });

$(".radio2").on("mouseenter", function () { $(".col2").css('display', 'block') });
$(".radio2").on("mouseleave", function () { setTimeout('$(".col2").fadeOut()', time) });

$(".radio3").on("mouseenter", function () { $(".col3").css('display', 'block') });
$(".radio3").on("mouseleave", function () { setTimeout('$(".col3").fadeOut()', time) });

$(".radio4").on("mouseenter", function () { $(".col4").css('display', 'block') });
$(".radio4").on("mouseleave", function () { setTimeout('$(".col4").fadeOut()', time) });

$(".radio5").on("mouseenter", function () { $(".col5").css('display', 'block') });
$(".radio5").on("mouseleave", function () { setTimeout('$(".col5").fadeOut()', time) });

$(".radio6").on("mouseenter", function () { $(".col6").css('display', 'block') });
$(".radio6").on("mouseleave", function () { setTimeout(' $(".col6").fadeOut()', time) });

$(".radio7").on("mouseenter", function () { $(".col7").css('display', 'block') });
$(".radio7").on("mouseleave", function () { setTimeout('$(".col7").fadeOut()', time) });

$(".radio8").on("mouseenter", function () { $(".col8").css('display', 'block') });
$(".radio8").on("mouseleave", function () { setTimeout(' $(".col8").fadeOut()', time) });

});

$(".radio").on("mouseenter", function () { $(".col").css('z-index', '100') });
$(".radio").on("mouseleave", function () { $(".col").css('z-index', '0') });







