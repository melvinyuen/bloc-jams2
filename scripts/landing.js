var animatePoints = function() {
  var revealPoint = function() {
    $(this).css({
      opacity: 1,
      transform: 'scaleX(1) translateY(0)'
    });
  };
  $.each($('.point'), revealPoint);
};



$(window).load(function() { //MY First time using jQuerry checkpoint-16 -- missing close parenthesis?
  /* We add $() to convert all instances of window into a jQuery object
  At #1 and #2, we update the .innerHeight property to jQuery's height() method,
  which gets or sets an object's height. Since we pass no arguments to the function,
  we get the height.
  */
  if ($(window).height() > 950) { //#1
    animatePoints();
  }

  var scrollDistance = $('.selling-points').offset().top - $(window).height() + 200;
  /* #2 we no longer need a separate variable to hold the .selling-points element since
  jQuery can select the element with many fewer characters. We replace
  getBoundingClientRect() with jQuery's .offset() method. */
  $(window).scroll(function(event) {
  /* #3 the addEventListener() method becomes jQuery's scroll() method, which takes a function as an argument.
  jQuery's scroll() "method" is still an event handler like addEventListener(), but the jQuery wrapper obscures
  the appearance of events. When the window scrolls, the function executes. */
    if ($(window).scrollTop() >= scrollDistance) {
      animatePoints();
      /* #4  we replace  document.documentElement.scrollTop || document.body.scrollTop with the jQuery equivalent
      of $(window).scrollTop(). */
    }
  });
});
