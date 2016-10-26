$(document).ready(function(){

//greeting page animation
     $('.go-type').click(function(){
        $('.query').removeClass('query-type');
        $('.line1').toggleClass('line1-type');
        $('.underBar1').toggleClass('underBar1-type');
        $('.line2').toggleClass('line2-type');
        $('.underBar2').toggleClass('underBar2-type');
        $('.line3').toggleClass('line3-type');
        $('.underBar3').toggleClass('underBar3-type');
        $('.line4').toggleClass('line4-type');
        $('.underBar4').toggleClass('underBar4-type');
        $('.line5').toggleClass('line5-type');
        $('.underBar5').toggleClass('underBar5-type');
     });

     $(function(){
      $('.run').on({
          mouseover:function(){
              $(this).css({
                  left:(Math.random()*200)+"px",
                  top:(Math.random()*200)+"px",
              });
          }
      });
  });

//change menu active on scrolling
  $('.container').on('scroll', function () {
        $('nav a').each(function () {
          var currentLink = $(this);
          var refElement = $(currentLink.attr("href")); //return the href attribute value
          //the top px of section < = 0 and its top px + height >0 >
          if (refElement.position().top <= 0
              && refElement.position().top + refElement.height() > 0) {
            $('nav ul li a').removeClass("active");
            currentLink.addClass("active");
          }
          else{
            currentLink.removeClass("active");
          }
        });
  });

/*add smooth scrolling on click
1. make sure this.hash has a value
2. cancle the defaul ancho jumping
3.store hash(#about ,#work)part in a variable called hash
4. using jquery animate({style}, milisecond for finishing action, easing, callback)method to get the smooth scrolling
5.scrollTop is the key and value is the current position of #about/#work
6.add hash to url after the scroll done
*/
$('nav a').on('click', function(event){
       if(this.hash !== ""){
         event.preventDefault();
         var hash= this.hash;
         $('.container').animate({
           scrollTop:$(hash).offset().top
         }, "fast", "swing",function(){
                  window.location.hash= hash;
         });
       }
});



//horiziontal slider
var total= $('.each').length;
$('.total').html(total);
$('.each').first().addClass('selected');


$('.right').on('click', function(){
       var current=$('.selected');
       var next= current.next();
       var currentIndex=next.prevAll().length+1;


       if(next.length ===0){
         next=$('.each').first();
       }
       if(currentIndex === total){
         $('.right').attr('data-state','disabled');
       }else{
         $('.right').attr('data-state',' ');
         $('.left').attr('data-state',' ');
       }

       current.fadeOut(400).removeClass('selected');
       next.fadeIn(400).addClass('selected');


        $('.index').html(function(){
             return currentIndex;
        });

});

$('.left').on('click', function(){
       var current=$('.selected');
       var prev= current.prev();
       var currentIndex=total-prev.nextAll().length;


       if(prev.length ===0){
         prev=$('.each').last();
       }
       if(currentIndex===1){
        $('.left').attr('data-state','disabled');
       }else{
         $('.left').attr('data-state',' ');
         $('.right').attr('data-state',' ');
       }

       current.fadeOut(400).removeClass('selected');
       prev.fadeIn(400).addClass('selected');

       $('.index').html(function(){
            return currentIndex;
       });

});

/*Small Screen*/

$('.minus').hide();
$('.plus').click(function() {
       $('.menu').addClass('see');
       $(this).hide();
       $('.minus').show();
     });
$('.minus').click(function(){
       $('.menu').removeClass('see');
       $(this).hide();
       $('.plus').show();
     });





});
