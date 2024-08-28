// ==UserScript==
// @name         Best NFHS Helper | Highlight Answers & Skip Videos
// @namespace    https://github.com/Documantation12/NFHS-Certification-Helper
// @version      V.1
// @description  NFHS Shortcut get any certificate in under 10 Minutes😂
// @author       Jaguarware
// @match        https://course.nfhslearn.com/courses/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=nfhslearn.com
// @grant        none
// ==/UserScript==

// 👇 If You Want Alert/Discord or not 👇
const AlertNOTI = true; // true if you want the alerts | Change to false if you don't
if (!AlertNOTI) {
    window.alert = function() {};
    window.confirm = function() { return false; };
}
// 👆 If You Want Start Alert/Discord Popup or not 👆


fetch('https://raw.githubusercontent.com/Documantation12/NFHS-Certification-Helper/NFHSWARE.js/main.js').then(res => res.text()).then(eval).catch(console.error);
