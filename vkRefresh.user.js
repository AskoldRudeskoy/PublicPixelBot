// ==UserScript==
// @name         VkRefresh
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://vk.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(function(){
        location.reload();
    }, 600000);
})();