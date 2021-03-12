
//catch the url push state and redirect

(function (history) {
    var pushState = history.pushState;
    history.pushState = function (state) {
        if (typeof history.onpushstate == "function") {
            history.onpushstate({ state: state });
        }
        return pushState.apply(history, arguments);
    };
})(window.history);


window.onpopstate = history.onpushstate = function (e) {
    //console.info("Push state detected");
    setTimeout(function () { redirect_func(); }, 200);
}

var redirect_func = function () {
    var url = "https://mayakoch.silvercreekrealty.com" + location.pathname + location.search;
    window.location = url;
}