(function(){
  var navLinks = $('#topnav a');
  enterEffect(navLinks,"bounceIn", 200);
  $(".gallery-container").hide();
})();

// target is a jquery wrapped array of elements, anim is the animate.css class to be added and speed is the stagger
function enterEffect(target, anim, speed){
  target.each(function(i,v){
    var $self = $(this);
    var animClass = "animated "+anim;
    setTimeout(function(){
        $self.removeClass("invisible");
        $self.addClass(animClass);
    },i*speed);
  });
}

function slideUp(){
    $(".gallery-container").fadeToggle();
    $(".pageInfo").fadeToggle();
}

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
