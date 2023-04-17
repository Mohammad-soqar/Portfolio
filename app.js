const line1Text = "<Mohammad";
const line2Text = "Soqar/>";
const line1Span = $("#line1");
const line2Span = $("#line2");
const cursor1Span = $("#cursor1");
const cursor2Span = $("#cursor2");
let line1CharIndex = 0;
let line2CharIndex = 0;
let typingFinished = false;
const typingDelay = 100;

function typeLine1() {
  if (line1CharIndex < line1Text.length) {
    line1Span.text(line1Span.text() + line1Text.charAt(line1CharIndex));
    line1CharIndex++;
    cursor1Span.css("display", "inline-block");
    setTimeout(typeLine1, typingDelay);
  } else {
    cursor1Span.css("display", "none");
    typeLine2();
  }
}

function typeLine2() {
  if (line2CharIndex < line2Text.length) {
    line2Span.css("display", "inline");
    line2Span.text(line2Span.text() + line2Text.charAt(line2CharIndex));
    line2CharIndex++;
    cursor2Span.css("display", "inline-block");
    setTimeout(typeLine2, typingDelay);
  } else {
    typingFinished = true;
  }
}

typeLine1();

var scroll = window.requestAnimationFrame ||
  // IE Fallback
  function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = $('.show-on-scroll'); 
var elementsToShow2 = $('.show-on-scroll2'); 

function loop() {

  elementsToShow.each(function () {
    if (isElementInViewport($(this))) {
      $(this).addClass('is-visible');
    } else {
      $(this).removeClass('is-visible');
    }
  });
  elementsToShow2.each(function () {
    if (isElementInViewport($(this))) {
      $(this).addClass('is-visible2');
    } else {
      $(this).removeClass('is-visible2');
    }
  });
  scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el[0].getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}