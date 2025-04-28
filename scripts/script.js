$(document).ready(function() {
       
       // fade out loading screen
       $("#loading-page").fadeOut("slow");

       // show menu button 
       $("button.btn-menu").click(function() {
              $("ul.right").toggleClass("active");
       })

       // if click in anything outside the menu, hide the menu
       $(document).click(function(event) {
              if (!$(event.target).closest("ul.right").length && !$(event.target).closest("button.btn-menu").length) {
                     $("ul.right").removeClass("active");
              }
       })

       // Initialize the carousel and slide effect
       $('.owl-carousel').owlCarousel({
              autoplay:true,
              autoplayTimeout: 2000,
              lazyLoad: true,
              margin:10,
              responsive:{
                     0:{
                            items:1,
                            loop:true,
                     },
                     800:{
                            items:3,
                     },
              //     1000:{
              //         items:5
              //     }
              }
       })

})
