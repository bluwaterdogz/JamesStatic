(function(){

$('a').removeClass("invisible");

})();
function slideUp(){
    $(".gallery-container").fadeToggle();
    $(".pageInfo").fadeToggle();
}

jQuery(document).ready(function(){
  $(".gallery-container").hide();
});


// var navLinks = $('a');
// navLinks.each(function(i,v){
//   var $self = $(this);
//   setTimeout(function(){
//       $self.removeClass("invisible");
//       $self.addClass("animated bounceIn");
//       console.log(i);
//   },i*200);
//
// });
function scrollUp(){
  $('html, body').animate({
    scrollTop:0
  },500);
}


function scrollDown(){
  var height = $(document).height();
  $('html, body').animate({
    scrollTop:height
  },1000);
}
