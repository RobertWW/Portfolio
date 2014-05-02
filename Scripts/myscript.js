  /*
  *Makes the pictures on the front page bigger when a cursor hovers over
  */
  $( document ).ready(function() {
  $('div div img').mouseenter(function() {
       $(this).animate({
           height: '+=20px'
       });
   });
   $('div div img').mouseleave(function() {
       $(this).animate({
           height: '-=20px'
       }); 
   });
 });

/*
*
*/