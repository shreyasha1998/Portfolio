// $(window).on('load', function() {
//     $('.isotope-wrapper').isotope({
//         itemSelector: '.grid-item',
//         layoutMode: 'masonry',
//     })
//  });

  // setTimeout(function(){$('.isotope-wrapper').isotope('layout')}, 500);


(function($) {
$(".isotope-wrapper").each(function() {
    var $isotope = $(".isotope-box", this);
    var $filterCheckboxes = $('input[type="radio"]', this);

    var filter = function() {
      var type = $filterCheckboxes.filter(":checked").data("type") || "*";
      if (type !== "*") {
        type = '[data-type="' + type + '"]';
      }
      $isotope.isotope({ filter: type });
    };

    $(this).on("change", filter);
    filter();
  });

})(jQuery);