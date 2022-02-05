$(document).ready(function(){
    //type plugin
    var typed = new Typed('#type',{
      strings: ["i am a web desingar", "i am a freelancer"],
      typeSpeed: 200,
      loop: true,
      backSpeed: 150,
      
  });
      //slides plugin sevices
      $('.slide-service').slick({
        slidesToShow: 3,
        autoplay: true,
        prevArrow:'<i class="fas fa-long-arrow-alt-left left"></i> <i class="far fa-circle circle-left"></i>',
        nextArrow:'<i class="fas fa-long-arrow-alt-right right"></i> <i class="far fa-circle circle-right"></i>',
      });

      //slides plugin clints

      $('#test-slider').slick({
        slidesToShow: 2,
        autoplay: true,
        prevArrow:'<i class="fas fa-long-arrow-alt-left left"></i> <i class="far fa-circle circle-left"></i>',
        nextArrow:'<i class="fas fa-long-arrow-alt-right right"></i> <i class="far fa-circle circle-right"></i>',
      });

      //mixtiup

      var mixer = mixitup('.portfolio-box');

      //venobox

      new VenoBox({
        selector: ".my-image-links",
        spinner:'grid',
        spinColor:'red',
        navSpeed:500,
        border:'1px',
        bgcolor:'#222222',
        numeration:true,
    });

    //aenimet
    AOS.init({
      offset:300,
    });

    //coutner up

    $('.counter').counterUp({
      delay: 10,
      time: 1500
    });

    //preloder

     
})