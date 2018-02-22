/*--------------------------------------------------
Expand Search
---------------------------------------------------*/


/*!
 * jquery.expand-search.js - v0.0.1 - https://github.com/kerotaa/jquery.expand-search.js
 * A jQuery plugin that makes search form full screen.
 * 
 * 
 * Copyright (c) 2013 kerotaa (http://kerotaa.github.io)
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php).
 * 2013-06-26
 **/
;!function(a,b,c){var d;d=function(){function d(d,e){var f,g,h,i,j,k,l,m,n,o;m="."+c+(new Date).getTime(),o=a(b),j=a(document),h=a(e.CloseButton,d).first(),n=a(e.TextField,d).first(),g=!1,k=!1,l=function(){return a(document.createElement("div")).outerWidth(d.outerWidth(!0)).outerHeight(d.outerHeight(!0)).hide()},f=function(){var a;d.addClass(e.ActiveClassName).animate({opacity:1},300),g.show(),a=n.data("active-placeholder"),a&&(n.data("deactive-placeholder",n.attr("placeholder")),n.attr("placeholder",a)),j.on("keyup"+m,function(a){var b;return b=a.keyCode||a.which,27===b?i.call(self,a):void 0})},i=function(){var a;j.off("keyup"+m),n.blur(),a=n.data("deactive-placeholder"),d.animate({opacity:0},200,"swing",function(){return a&&n.attr("placeholder",a),g.hide(),d.removeClass(e.ActiveClassName).css("opacity","")})},this.on=function(){var b;k||(k=!0,b=this,g=l(),d.after(g),n.on("focus"+m,a.proxy(f,this)),h.on("click"+m,a.proxy(i,this)),o.on("scroll"+m,function(a){return a.preventDefault()}))},this.off=function(){k&&(g.remove(),n.off("focus"+m),h.off("click"+m),j.off("keyup"+m),o.off("scroll"+m),k=!1)}}return d}(),a.fn[c]=function(b){var e;return e=a.extend(!0,{},a.fn[c].defaults,b),this.each(function(){var b,f;return f=a(this),b=f.data(c),b||(b=new d(f,e),f.data(c,b)),b.on()})},a.fn[c].defaults={CloseButton:".btn-close",TextField:"input[type=text]",ActiveClassName:"active"}}(jQuery,window,"expandSearch");