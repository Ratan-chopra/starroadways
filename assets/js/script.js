$(document).ready(function() {
    //Preloader
    preloaderFadeOutTime = 500;
    function hidePreloader() {
    var preloader = $('.spinner-wrapper');
    preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
});

var hidden,visibilityChange;let a;function handleVisibilityChange(){document[hidden]?a=setInterval(()=>{"Aww..."==document.title?document.title="Please Come Back":document.title="Aww..."},1500):(document.title="Star Roadways",clearInterval(a))}void 0!==document.hidden?(hidden="hidden",visibilityChange="visibilitychange"):void 0!==document.msHidden?(hidden="msHidden",visibilityChange="msvisibilitychange"):void 0!==document.webkitHidden&&(hidden="webkitHidden",visibilityChange="webkitvisibilitychange"),void 0===document.addEventListener||void 0===hidden?console.log("This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API."):document.addEventListener(visibilityChange,handleVisibilityChange,!1)