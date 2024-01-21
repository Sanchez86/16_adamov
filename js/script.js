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
    



    var map;
    var mapCoordinates = new google.maps.LatLng(59.934320, 30.437247);

    var markers = [];
    var image = new google.maps.MarkerImage('images/marker.png', // иконка
    new google.maps.Size(171, 169), // размеры иконок
    new google.maps.Point(0, 0),
    new google.maps.Point(42, 56)
    );

    function addMarker() {
        markers.push(new google.maps.Marker({
            position: mapCoordinates,
            raiseOnDrag: false,
            icon: image,
            map: map,
            draggable: false
        }));
    }
 
function initialize()
{
var mapOptions = {
backgroundColor: "#ffffff", // цвет фона
zoom: 8, // масштаб
disableDefaultUI: true,
draggable: true,
scrollwheel: true,
center: mapCoordinates,
mapTypeId: google.maps.MapTypeId.ROADMAP,
//----------- стили ----------
styles: [{ "elementType": "geometry", "stylers": [{ "hue": "#ff4400" }, { "saturation": -68 }, { "lightness": -4 }, { "gamma": 0.72 }] }, { "featureType": "road", "elementType": "labels.icon" }, { "featureType": "landscape.man_made", "elementType": "geometry", "stylers": [{ "hue": "#0077ff" }, { "gamma": 3.1 }] }, { "featureType": "water", "stylers": [{ "hue": "#00ccff" }, { "gamma": 0.44 }, { "saturation": -33 }] }, { "featureType": "poi.park", "stylers": [{ "hue": "#44ff00" }, { "saturation": -23 }] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "hue": "#007fff" }, { "gamma": 0.77 }, { "saturation": 65 }, { "lightness": 99 }] }, { "featureType": "water", "elementType": "labels.text.stroke", "stylers": [{ "gamma": 0.11 }, { "weight": 5.6 }, { "saturation": 99 }, { "hue": "#0091ff" }, { "lightness": -86 }] }, { "featureType": "transit.line", "elementType": "geometry", "stylers": [{ "lightness": -48 }, { "hue": "#ff5e00" }, { "gamma": 1.2 }, { "saturation": -23 }] }, { "featureType": "transit", "elementType": "labels.text.stroke", "stylers": [{ "saturation": -64 }, { "hue": "#ff9100" }, { "lightness": 16 }, { "gamma": 0.47 }, { "weight": 2.7 }] }]
//------------конец --------------
};
map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
addMarker();
}
google.maps.event.addDomListener(window, 'load', initialize);

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







