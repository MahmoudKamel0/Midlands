$(document).ready(function () {
       // fade out the loading page 
       $("#loading-page").fadeOut("slow")

       // show menu on click button menu
       $("button.btn-menu").click(function () {
              $("ul.right").toggleClass("active");
       }),

       $(document).click(function (t) {
              $(t.target).closest("ul.right").length ||
              $(t.target).closest("button.btn-menu").length ||
              $("ul.right").removeClass("active");
       }),

       $(".owl-carousel").owlCarousel({
              autoplay: !0,
              autoplayTimeout: 2e3,
              lazyLoad: !0,
              margin: 10,
              responsive: { 0: { items: 1, loop: !0 }, 800: { items: 3 } },
       });
});
