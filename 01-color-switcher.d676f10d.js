const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),d=document.querySelector("body");t.addEventListener("click",(function(){a=setInterval(n,1e3),t.disabled=!0,t.disabled=!1})),e.addEventListener("click",(function(){clearInterval(a),e.disabled=!1,e.disabled=!0}));let a=null;function n(){d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}
//# sourceMappingURL=01-color-switcher.d676f10d.js.map
