/* global ga */

(function (ctx) {
  function Analytics() {
    /* eslint-disable */

    /**
     * Google Analytics
     */
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-319188-14', 'jit.si');
    ga('send', 'pageview');

    /* eslint-enable */
  }

  Analytics.prototype.sendEvent = function (action, data) {
    // empty label if missing value for it and add the value,
    // the value should be integer or null
    var value = data.value;
    value = value? Math.round(parseFloat(value)) : null;
    var label = data.label || "";
console.log("send data to analitics");
    ga('send', 'event', 'jit.si',
        action + '.' + data.browserName, label, value);
  };

  if(typeof ctx.analyticsHandlers === "undefined")
    ctx.analyticsHandlers = [];
  ctx.analyticsHandlers.push(Analytics);
}(window));
