///////////////////HIGHLIGHT MENU ON SCROLL//////////////////
let sections = $('section'),
    nav = $('nav'),
    nav_height = nav.outerHeight();

$(window).on('scroll', function() {
    let cur_pos = $(this).scrollTop() + 100;

    sections.each(function() {
        let top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').removeClass('active');
            sections.removeClass('active');

            $(this).addClass('active');
            nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
        }

    });
});
///////////////////HIGHLIGHT MENU ON CLICK//////////////////
nav.find('a').on('click', function() {
/*  stopImmediatePropagation();
*/
    let $el = $(this),
        id = $el.attr('href');
    $('html, body').animate({
        scrollTop: $(id).offset().top - nav_height
    }, 500);

    return false;
});
//////////////////MENU TOGGLE////////////////////
$('#toggle-btn').on('click',function(){
  $('nav ul').toggleClass('active');
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
///////////////////////////////////////
/*$(window).scroll(function(){
    scrollTop = $(window).scrollTop();    
    if (scrollTop > 500) {
      $('.nav').addClass('scrolled-nav');
    } 
  })*/