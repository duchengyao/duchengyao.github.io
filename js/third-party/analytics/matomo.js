/* global CONFIG */

if (CONFIG.matomo.enable) {
  var _paq = window._paq = window._paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  if (document.domain.indexOf('com') != -1){
    _paq.push(["setCookieDomain", "*.s1nh.com"]);
  } else if(document.domain.indexOf('org') != -1){
    _paq.push(["setCookieDomain", "*.s1nh.org"]);
  }
  _paq.push(["setDomains", ["*.s1nh.org","*.s1nh.com"]]);
  _paq.push(["enableCrossDomainLinking"]);
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="https://home.s1nh.com:32443/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    
    if (document.domain.indexOf('com') != -1){
      _paq.push(['setSiteId', '2']);
    } else if(document.domain.indexOf('org') != -1){
      _paq.push(['setSiteId', '3']);
    }
    
    // Will also collect the website data into Website ID = 2,3
    _paq.push(['addTracker', u+'matomo.php', 1]);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
  })();
}
