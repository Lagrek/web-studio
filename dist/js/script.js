$(document).ready(function(){
    $('.sidenav').sidenav();
  });

$(window).bind('scroll',function(e){
    parallaxScroll();
});
 
function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('#parallax').css('top',(0-(scrolled*.70))+'px');
}
