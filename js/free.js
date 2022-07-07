/* -------------------------- document Start ------------------ */
   $(function(){
    /*Mobile Menu start*/    
    $("#nav-toggle").on( "click", function() {
        $(this).toggleClass( "active" );
        $("header").removeClass("newnav");
        $(".mainNav").toggleClass("openmenu");

    });
});


    
$(document).ready(function () {
/* -------------------------- carosel------------------ */  
    
 
        
var windowWidth = $(window).width();
if(windowWidth < 992){
    $(".mainNav li a.submenu").on( "click", function() {
        $(this).parent().toggleClass( "opensub" );
 });
}
    
$('.mama-voice-carosel').slick({
    slidesToShow: 1,
 	slidesToScroll: 1,
 	arrows: true,
    dots:false,
 	infinite:true,
	autoplay:false,
 	speed:800,
 
    
});   
    


    $('.few-moments-carosel').slick({
    slidesToShow: 3,
 	slidesToScroll: 1,
 	arrows: false,
    dots:true,
 	infinite:true,
	autoplay:false,
 	speed:800,
        
        
        responsive: [
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
         dots:true,
         variableWidth: true,
      }
    }
    
  ]   
    
});  

    
    
    
$('.spotlight-carosel').slick({
    slidesToShow: 1,
 	slidesToScroll: 1,
 	arrows: true,
    dots:false,
 	infinite:true,
	autoplay:false,
 	speed:800,
 
    
});    
    
 
 
    
    
    
    

    $('.preschool-carosel').slick({
    slidesToShow: 3,
 	slidesToScroll: 1,
 	arrows: false,
    dots:true,
 	infinite:true,
	autoplay:false,
 	speed:800,
        
        
        responsive: [
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
         dots:true,
         variableWidth: true,
      }
    }
    
  ]   
    
});      
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
$('.c-faq-title').click(function (){
        if($(this).hasClass("open")){
            $(this).removeClass("open");
            $(this).next(".c-faq-content").removeClass("showng");
            $(this).next(".c-faq-content").slideUp();
        }
        else{
            $(this).next(".c-faq-content").slideDown();
            $(this).addClass("open");
            $(this).parent().siblings().find(".c-faq-content").slideUp();
            $(this).next(".c-faq-content").addClass("showng");
            $(this).parent().siblings().find(".c-faq-title").removeClass("open");
        }   
    });    
    
    
    
    
    
    
    
// $('input').focus(function(){
//  $(this).parents('.form-group').addClass('focused');
//});
//
//$('input').blur(function(){
//  var inputValue = $(this).val();
//  if ( inputValue == "" ) {
//    $(this).removeClass('filled');
//    $(this).parents('.form-group').removeClass('focused');  
//  } else {
//    $(this).addClass('filled');
//  }
//})   
    
    
// $('.form-js-label').find('input').on('input', function (e) {
//  $(e.currentTarget).attr('data-empty', !e.currentTarget.value);
//});   
//  
    
    
    
 $(function() { 
    var videos  = $(".video");
 
        videos.on("click", function(){
            var elm = $(this),
                conts   = elm.contents(),
                le      = conts.length,
                ifr     = null;
 
            for(var i = 0; i<le; i++){
              if(conts[i].nodeType == 8) ifr = conts[i].textContent;
            }
 
            elm.addClass("player").html(ifr);
            elm.off("click");
        });
});   
    
    
    
/* -------------------------- document end ------------------ */   
     
       
});








