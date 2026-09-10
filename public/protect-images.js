/*
 * protect-images.js
 * Casual-save deterrents for portfolio photos.
 *
 * IMPORTANT: This CANNOT truly prevent image saving. Anyone can still take a
 * screenshot, open DevTools > Network, view source, or disable JavaScript.
 * These measures only stop casual right-click / drag / long-press saving.
 */
(function () {
  'use strict';

  // 0. Inject a CSS defense layer so protection applies even before JS finishes,
  //    and covers background-image / dynamically added images.
  var style = document.createElement('style');
  style.textContent =
    'img {' +
    '  -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;' +
    '  -webkit-user-drag: none; -khtml-user-drag: none; -moz-user-drag: none; -o-user-drag: none;' +
    '  -webkit-touch-callout: none;' +
    '}';
  (document.head || document.documentElement).appendChild(style);

  // 1. Block right-click context menu on images (and the whole page as a fallback).
  document.addEventListener(
    'contextmenu',
    function (e) {
      if (e.target && e.target.tagName === 'IMG') {
        e.preventDefault();
      }
    },
    false
  );

  // 2. Block dragging images out to the desktop / other apps.
  document.addEventListener(
    'dragstart',
    function (e) {
      if (e.target && e.target.tagName === 'IMG') {
        e.preventDefault();
      }
    },
    false
  );

  // 3. Apply CSS-level protections to every image (existing and future).
  function harden(img) {
    img.setAttribute('draggable', 'false');
    img.style.webkitUserSelect = 'none';
    img.style.userSelect = 'none';
    img.style.webkitUserDrag = 'none';
    img.style.webkitTouchCallout = 'none'; // blocks iOS long-press "Save Image" menu
    img.style.pointerEvents = img.style.pointerEvents || '';
  }

  function hardenAll() {
    var imgs = document.getElementsByTagName('img');
    for (var i = 0; i < imgs.length; i++) {
      harden(imgs[i]);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', hardenAll);
  } else {
    hardenAll();
  }

  // 4. Catch images added later (e.g. lightbox, dynamic galleries).
  if (typeof MutationObserver !== 'undefined') {
    var mo = new MutationObserver(function (mutations) {
      mutations.forEach(function (m) {
        for (var i = 0; i < m.addedNodes.length; i++) {
          var node = m.addedNodes[i];
          if (node.tagName === 'IMG') {
            harden(node);
          } else if (node.getElementsByTagName) {
            var nested = node.getElementsByTagName('img');
            for (var j = 0; j < nested.length; j++) {
              harden(nested[j]);
            }
          }
        }
      });
    });
    mo.observe(document.documentElement, { childList: true, subtree: true });
  }
})();
