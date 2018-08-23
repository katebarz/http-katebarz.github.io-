///////////////////HIGHLIGHT MENU ON SCROLL//////////////////
let sections = $('section'),
    nav = $('nav'),
    nav_height = nav.outerHeight();

$(window).on('scroll', function() {
    let cur_pos = $(this).scrollTop();

    sections.each(function() {
        let top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight()-50;

        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').removeClass('active');
            nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            if ($(this).attr('id') > 1) {
                $('nav').addClass('scrolled-nav');
            } else {
                $('nav').removeClass('scrolled-nav');
            }
        }
    });
});
///////////////////HIGHLIGHT MENU ON CLICK//////////////////
nav.find('a').on('click', function() {
    let $el = $(this),
        id = $el.attr('href');
    $('html, body').animate({
        scrollTop: $(id).offset().top - nav_height
    }, 500);

    return false;
});
//////////////////MENU TOGGLE////////////////////
$('#toggle-btn').on('click', function() {
    $('nav ul').toggleClass('active');
    $('#toggle-btn').toggleClass('menu-toggle_active');
})
///////////////////TYPE WRITER/////////////////////
let i = 0;
let txt = 'Lorem ipsum dummy text blabla.';
let speed = 100;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
///////////////////SLIDE BUTTON////////////////////
$("#slide-btn").on('click',function() {
    $('html,body').animate({
        scrollTop: $("#2").offset().top-50},
        'slow');
});
/////////////////////////////////////////////