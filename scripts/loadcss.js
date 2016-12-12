// Load Google Fonts

WebFontConfig = {
    google: { families: [ 'Roboto+Condensed:400', 'Roboto:300,700' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = '//ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();

//Async Load CSS //

(function(w){
  "use strict";
  var loadCSS = function( href, before, media ){
    var doc = w.document;
    var ss = doc.createElement( "link" );
    var ref;
    if( before ){
      ref = before;
    }
    else {
      var refs = ( doc.body || doc.getElementsByTagName( "head" )[ 0 ] ).childNodes;
      ref = refs[ refs.length - 1];
    }

    var sheets = doc.styleSheets;
    ss.rel = "stylesheet";
    ss.href = href;
    ss.media = "only x";

    ref.parentNode.insertBefore( ss, ( before ? ref : ref.nextSibling ) );
    var onloadcssdefined = function( cb ){
      var resolvedHref = ss.href;
      var i = sheets.length;
      while( i-- ){
        if( sheets[ i ].href === resolvedHref ){
          return cb();
        }
      }
      setTimeout(function() {
        onloadcssdefined( cb );
      });
    };
    ss.onloadcssdefined = onloadcssdefined;
    onloadcssdefined(function() {
      ss.media = media || "all";
    });
    return ss;
  };
  if( typeof module !== "undefined" ){
    module.exports = loadCSS;
  }
  else {
    w.loadCSS = loadCSS;
  }
}( typeof global !== "undefined" ? global : this ));
loadCSS( "/css/main.css" );
