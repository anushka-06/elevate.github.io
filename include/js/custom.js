// Header fixed on scroll.
window.onscroll = function() {
    myFunction()
};
var body = document.getElementsByTagName("body")[0];
var sticky = body.offsetTop + 50;

function myFunction() {
    if (window.pageYOffset > sticky) {
        body.classList.add("fixed");
    } else {
        body.classList.remove("fixed");
    }
}



var $ = jQuery.noConflict();

jQuery(document).ready(function($){


 $('.logo-slider').slick({  
      slidesToShow: 7,
      slidesToScroll: 1,
      arrows:false,
      autoplay:true,
      infinite: false,
      speed: 2000,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1
          }
        },
        {
          breakpoint:991,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 579,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    });

/*==========================*/  
/* Mobile Slider */  
/*==========================*/ 
if($('.services-slider').length > 0){
jQuery('.services-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,  
  responsive: [
    {
      breakpoint: 5000,
      settings: "unslick"
    },
    {
      breakpoint: 991,
      settings: {
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,  
        adaptiveHeight: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,  
        adaptiveHeight: false
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,  
        adaptiveHeight: false
      }
    }
  ]
});
}
 

 /*==========================*/  
/* new-services-slider */  
/*==========================*/ 
if($('.new-services-slider').length > 0){
jQuery('.new-services-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false, 
  infinite: true, 
  centerMode: false, 
  responsive: [
    {
      breakpoint: 5000,
      settings: "unslick"
    },
    {
      breakpoint: 991,
      settings: {
        // arrows: false,
        slidesToShow:3,
        slidesToScroll: 1,
        dots: true,  
        adaptiveHeight: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        slidesToShow:2,
        slidesToScroll: 1,
        dots: true,  
        adaptiveHeight: true
      }
    },
    {
      breakpoint: 424,
      settings: {
        // arrows: false,
        slidesToShow:1,
        slidesToScroll: 1,
        dots: true,  
        adaptiveHeight: true
      }
    },
  ]
});
}
 
$('.counting').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 3000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  

});

});


/*==========================*/  
/* Scroll on animate */  
/*==========================*/
function onScrollInit( items, trigger ) {
  items.each( function() {
    var osElement = $(this),
        osAnimationClass = osElement.attr('data-os-animation'),
        osAnimationDelay = osElement.attr('data-os-animation-delay');
        osElement.css({
          '-webkit-animation-delay':  osAnimationDelay,
          '-moz-animation-delay':     osAnimationDelay,
          'animation-delay':          osAnimationDelay
        });
        var osTrigger = ( trigger ) ? trigger : osElement;
          osTrigger.waypoint( function() {
          osElement.addClass('animated').addClass(osAnimationClass);
          },{
              triggerOnce: true,
              offset: '95%',
        });
// osElement.removeClass('fadeInUp');
  });
}
onScrollInit( $('.os-animation') );
onScrollInit( $('.staggered-animation'), $('.staggered-animation-container'));
