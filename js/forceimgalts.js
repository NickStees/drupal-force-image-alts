(function($) {
  Drupal.behaviors.force_img_alts = {
    attach: function (context, settings) {


          // Force all image alt tags and make them required on forms
          if ($('input[type=text]', context).length) {
            $('input[type=text]', context).each(function () {
              var thisId = $(this).attr('id') ? $(this).attr('id') : '';
              if (thisId.indexOf('image-alt') >= 1) {
                $(this).prop('required', true);
              }
            });
          }
    } //end drupal behaviors
  }
})(jQuery);




