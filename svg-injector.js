/*
 * SVG Injector
 *
 * Copyright (C) 2018 Boris Raicheff
 * All rights reserved
 */


// https://codepen.io/eltonmesquita/post/loading-inline-svg

// https://css-tricks.com/ajaxing-svg-sprite/
// https://css-tricks.com/svg-symbol-good-choice-icons/
// https://css-tricks.com/forums/topic/svg-sprite-symbols-as-css-content-or-background/


(function(window, document) {

  "use strict";

  var element, request;

  if (window.SVGRect === void 0) return;

  element = document.querySelector("link[rel=preload][as=fetch][type='image/svg+xml']");
  if (element === null) return;

  document.addEventListener("DOMContentLoaded", function() {
    request = new XMLHttpRequest();
    request.addEventListener("load", function() {
      element = document.createElement("div");
      element.hidden = true;
      element.innerHTML = this.responseText;
      document.body.appendChild(element);
    });
    request.open("GET", element.href);
    request.send();
  });

})(window, document);


/* EOF */
