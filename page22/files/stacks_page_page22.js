/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;i[n]||(i[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function a(t,a,i,o){if(Object.defineProperty)try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(o),i},set:function(e){r(o),i=e}}),n}catch(s){}e._definePropertyBroken=!0,t[a]=i}var i={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;a(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,a,i,u){var c=a.toLowerCase(),g=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(g)&&(o?a in o:e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r);return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var a;return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r}},f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,a,i))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var a=(e.nodeName||"").toLowerCase();return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var g,h,v=e.fn.init,m=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,a){var i;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),i[3]&&r("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?v.call(this,e.parseHTML(i[2],n,!0),n,a):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(g=e.uaMatch(navigator.userAgent),h={},g.browser&&(h[g.browser]=!0,h.version=g.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h),a(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var a,i,o=this[0];return!o||"events"!==t||1!==arguments.length||(a=e.data(o,t),i=e._data(o,t),a!==n&&a!==i||i===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),i)};var j=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)},e.clean||(e.clean=function(t,a,i,o){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,a).childNodes),i)for(c=function(e){return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):i.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(i.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var Q=e.event.add,x=e.event.remove,k=e.event.trigger,N=e.fn.toggle,T=e.fn.live,M=e.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",C=RegExp("\\b(?:"+S+")\\b"),H=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(H,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,i){e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,i)},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1};for(s.guid=i;a.length>o;)a[o++].guid=i;return this.click(s)},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),T?T.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),M?M.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,a){return n||C.test(e)||r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)},e.each(S.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window);
var stacks = {};
stacks.jQuery = jQuery.noConflict(true);
stacks.stacks_in_247_page22 = {};
stacks.stacks_in_247_page22 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;/**
 * @name		Gallery Stack
 * @author		Futural UG (haftungsbeschraenkt)
 * @version 	1.1.0
 * @url			http://instacks.com/gallerystack
 */



$(function _gallerystack(){

	var id = 'stacks_in_247_page22',
		url = '../photos_original/index.html',
		galleryType = 'photobox',
		displayTitle = !! 1,
		displayCaption = !! 0,
		lastSlash = url.lastIndexOf('/') + 1,
		folder = url.substring(0, lastSlash),
		file = url.substring(lastSlash, url.length);

	if (displayTitle){
		//load title
		$('#'+id+'_gallerystack_album_title').load(url + ' .album-title');
	}

	//load description
	$('#'+id+'_gallerystack_album_description').load(url + ' .album-description');

	//load and adapt photos, initialize gallery
	$('#'+id+'_gallerystack_album_wrapper').load(url + ' .album-wrapper', function _success(){

		//replace the link to the thumbnails
		var images = $('#' + this.id + ' img');
		images.each(function _replaceThumbnail(){
			//this.src = folder + $(this).attr('src');
			var src = $(this).attr('src');
			if (!src.indexOf('http://') == 0 && !src.indexOf('https://') == 0){
				$(this).attr('src', folder + src);
			}
		});

		//replace links to html with links to jpg, all picture types are exported as .jpg
		//add title
		var links = $('#' + this.id + ' a');
		links.each(function _replaceLink(){
			var href = $(this).attr('href');

			//normal case for RapidWeaver Album and Rapid Album
			if (href.match(/.html$/) && !href.match(/.HTML$/)){
				//this.href = folder + href.substring(0, href.length-4) + 'jpg';
				$(this).attr('href', folder + href.substring(0, href.length-4) + 'jpg');
				$(this).attr('rel', id);

			//case for Rapid Album Fancybox Theme, and when caption contains a link
			} else {

				//in case caption contains href, it does not start with 'files'
				if ($(this).attr('href').indexOf('files') == 0){
					$(this).attr('href', folder + href);
					$(this).attr('rel', id);
				}
			}
			if (displayCaption && this.nextSibling && this.nextSibling.nextSibling && this.nextSibling.nextSibling.innerHTML) {
				var caption = this.nextSibling.nextSibling.innerHTML;
				$(this).attr('title', caption);

			//photobox handles titles differently (title or alt on the picture instead of the link)
			
				var isURL = false;
				if ($(this).children()){
					if (caption.indexOf('<a href="') == 0){
						isURL = true;
					}
					if (isURL){
						$(this).children().attr('data-pb-captionLink', 
							caption.substring(caption.indexOf('>')+1, caption.indexOf('<', 1))
							 +'[' + caption.substring(9, caption.indexOf('"', 9)) + ']');
						$(this).children().attr('alt', '');
					} else {
						$(this).children().attr('alt', caption);
					}
				}
			} else {
				if ($(this).children()){
					$(this).children().attr('alt', '');
				}
			

			}
		});

		// jQuery(document).ready(function(){
		// 	if (jQuery('.album-wrapper').length) {
		// 	    jQuery('.thumbnail-frame').each(function() {
		// 	        var thisAnch = jQuery('a', this);
		// 	        var thisImg = jQuery('a img', this);
		// 	        var thisCap = jQuery('.thumbnail-caption', this);
		// 	        thisAnch.attr({
		// 	            'href': thisImg.attr('src').replace(/thumb/i, 'full'),
		// 	            'title': thisCap.text()
		// 	        });
		// 	    });
		// 	}
		// 	jQuery(function(){
		// 		jQuery('#lightbox a').Chocolat({overlayColor:'#000'});
		// 	});
		// });

		//initialize gallery
		switch (galleryType) {
			case 'touchtouch':
				$('#'+id+'_gallerystack_album_wrapper a[rel='+id+']').stacks_in_247_page22_touchTouch();
				break;
			case 'swipebox':
				$('#'+id+'_gallerystack_album_wrapper a[rel='+id+']').stacks_in_247_page22_swipebox();
				break;
			case 'fancybox':
				$('#'+id+'_gallerystack_album_wrapper a[rel='+id+']').fancybox();
				break;
			case 'chocolat':
				$('#'+id+'_gallerystack_album_wrapper a[rel='+id+']').Chocolat({
					setTitle: ' ',
					overlayColor: '#000',
					leftImg: 'files/chocolat_leftw.gif',
					rightImg: 'files/chocolat_rightw.gif',
					closeImg: 'files/chocolat_closew.gif',
					loadingImg: 'files/chocolat_loadingw.gif'
				});
				break;
			case 'magnificpopup':
				$('#'+id+'_gallerystack_album_wrapper a[rel='+id+']').magnificPopup({
					//delegate: 'a', // child items selector, by clicking on it popup will open
					type: 'image',
					gallery: {
            			enabled: true,
            			navigateByImgClick: true,
            			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
          			}
				});
				break;
			case 'photobox':
				$('#'+id+'_gallerystack_album_wrapper').photobox({
					thumbs: true
				});
				break;
			case 'none':
				break;
			default:
				break;
		}
	});

});



















/*!
    photobox v1.8.0
    (c) 2013 Yair Even Or <http://dropthebit.com>
    
    Uses jQuery-mousewheel Version: 3.0.6 by:
    (c) 2009 Brandon Aaron <http://brandonaaron.net>
    
    MIT-style license.
*/
(function(e,t,n){"use strict";function W(){b&&z.addClass("msie");w&&z.hide();I.off().on("click",g.toggle);q.off().on("click","a",v.click);E&&q.css("overflow","auto");z.off().on("click","img",function(e){e.stopPropagation()});e(t.body).prepend(e(z));m=t.documentElement}function X(e,t,n){if(t==1){_.css({transform:"translateX(25%)",transition:".7s",opacity:0});setTimeout(function(){Q(p)},200)}else if(t==-1){_.css({transform:"translateX(-25%)",transition:".7s",opacity:0});setTimeout(function(){Q(d)},200)}if(n==1)q.addClass("show");else if(n==-1)q.removeClass("show")}function V(e){var n,r=t.createElement("p").style,i=["ms","O","Moz","Webkit"];if(r[e]=="")return e;e=e.charAt(0).toUpperCase()+e.slice(1);for(n=i.length;n--;)if(r[i[n]+e]=="")return i[n]+e}function $(e){var t=e.keyCode,n=o.keys,r;return n.close.indexOf(t)>=0&&ut()||n.next.indexOf(t)>=0&&Q(d)||n.prev.indexOf(t)>=0&&Q(p)||true}function J(){var e=this.id=="pbPrevBtn"?p:d;Q(e);return false}function K(e){c=f;f=e;l=u[e][0];p=(f||(o.loop?u.length:0))-1;d=(f+1)%u.length||(o.loop?0:-1)}function Q(e,t,n){if(!e||e<0)e=0;z.removeClass("error").addClass(e>f?"next":"prev");K(e);ot();D.empty();L.onerror=null;_.add(D).data("zoom",1);h=a[e].rel=="video"?"video":"image";if(h=="video"){D.html(G()).addClass("hide");tt(t)}else{var r=setTimeout(function(){z.addClass("pbLoading")},50);if(!o.loop){H[e==u.length-1?"addClass":"removeClass"]("hide");P[e==0?"addClass":"removeClass"]("hide")}if(p>=0)A.src=u[p][0];if(d>=0)O.src=u[d][0];if(b)z.addClass("hide");o.autoplay&&g.progress.reset();L=new Image;L.onload=function(){clearTimeout(r);tt(t)};L.onerror=et;L.src=l}j.on(y,Y).addClass("change");if(t||b)Y();if(o.thumbs)v.changeActive(e,t,n);Z.save()}function G(){var t=u[f][0],n=e("<a>").prop("href",u[f][0])[0].search?"&":"?";t+=n+"vq=hd720&wmode=opaque";return e("<iframe>").prop({scrolling:"no",frameborder:0,allowTransparency:true,src:t}).attr({webkitAllowFullScreen:true,mozallowfullscreen:true,allowFullScreen:true})}function Y(){j.off(y).removeClass("change");o.counter&&B.find(".counter").text("("+(f+1)+" / "+u.length+")");o.title&&B.find(".title").html(u[f][1])}function et(){z.addClass("error");_[0].src=N;L.onerror=null}function tt(e){function r(){clearTimeout(n);t.off(y).css({transition:"none"});z.removeClass("video");if(h=="video"){_[0].src=N;D.addClass("prepare");z.addClass("video")}else _.prop({src:l,"class":"prepare"});setTimeout(function(){_.add(D).removeAttr("style").removeClass("prepare");z.removeClass("hide next prev");setTimeout(function(){_.add(D).on(y,nt);if(b)nt()},0)},50)}var t,n;n=setTimeout(r,2e3);z.removeClass("pbLoading").addClass("hide");_.add(D).removeAttr("style").removeClass("zoomable");if(!e&&a[c].rel=="video"){t=D;_.addClass("prepare")}else t=_;if(e||b)r();else t.on(y,r)}function nt(){_.add(D).off(y).addClass("zoomable");if(h=="video")D.removeClass("hide");else I&&o.autoplay&&g.play();if(typeof s.callback=="function")s.callback.apply(a[f])}function rt(n,r){if(h=="video"){var i=D.data("zoom")||1;i+=r/10;if(i<.5)return false;D.data("zoom",i).css({width:624*i,height:351*i})}else{var i=_.data("zoom")||1,s=_[0].getBoundingClientRect();i+=r/10;if(i<.1)i=.1;_.data("zoom",i).css({transform:"scale("+i+")"});if(s.height>m.clientHeight||s.width>m.clientWidth){e(t).on("mousemove.photobox",st)}else{e(t).off("mousemove.photobox");_[0].style[C]="50% 50%"}}return false}function it(e,t){e.preventDefault();e.stopPropagation();var n=s.thumbsList;n.css("height",n[0].clientHeight+t*10);var r=B[0].clientHeight/2;R[0].style.cssText="margin-top: -"+r+"px; padding: "+r+"px 0;";q.hide().show(0);v.calc()}function st(e){var t=e.clientY/m.clientHeight*(m.clientHeight+200)-100,n=t/m.clientHeight*100,r=e.clientX/m.clientWidth*100,i=r.toFixed(2)+"% "+n.toFixed(2)+"%";_[0].style[C]=i}function ot(){clearTimeout(g.autoPlayTimer);e(t).off("mousemove.photobox");L.onload=function(){};L.src=A.src=O.src=l}function ut(){function e(){if(z[0].className=="")return;z.removeClass("show hide error pbLoading");_.removeAttr("class").removeAttr("style").off().data("zoom",1);if(w)setTimeout(function(){z.hide()},200)}ot();D.find("iframe").prop("src","").empty();r.prototype.setup();Z.clear();z.removeClass("on video").addClass("hide");_.on(y,e);b&&e();setTimeout(e,500)}function lt(t){var r=t||n.event,i=[].slice.call(arguments,1),s=0,o=true,u=0,a=0;t=e.event.fix(r);t.type="mousewheel";if(r.wheelDelta){s=r.wheelDelta/120}if(r.detail){s=-r.detail/3}a=s;if(r.axis!==undefined&&r.axis===r.HORIZONTAL_AXIS){a=0;u=-1*s}if(r.wheelDeltaY!==undefined){a=r.wheelDeltaY/120}if(r.wheelDeltaX!==undefined){u=-1*r.wheelDeltaX/120}i.unshift(t,s,u,a);return(e.event.dispatch||e.event.handle).apply(this,i)}var r,i=[],s,o,u=[],a,f=-1,l,c,h,p,d,v,m,g,y="transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",b=!("placeholder"in t.createElement("input")),w=function(){var t=e("<p>")[0];t.style.cssText="pointer-events:auto";return!t.style.pointerEvents}(),E="ontouchend"in t,S,x,T=e(),N="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",C=V("transformOrigin"),k=V("transition"),L={},A=new Image,O=new Image,M,_,D,P,H,B,j,F,I,q,R,U={loop:true,thumbs:true,counter:true,title:true,autoplay:false,time:3e3,history:true,hideFlash:true,zoomable:true,keys:{close:"27, 88, 67",prev:"37, 80",next:"39, 78"}},z=e('<div id="pbOverlay">').append(F=e('<div class="pbLoader"><b></b><b></b><b></b></div>'),P=e('<div id="pbPrevBtn" class="prevNext"><b></b></div>').on("click",J),H=e('<div id="pbNextBtn" class="prevNext"><b></b></div>').on("click",J),R=e('<div class="wrapper">').append(_=e("<img>"),D=e("<div>")),M=e('<div id="pbCloseBtn">').on("click",ut)[0],I=e('<div id="pbAutoplayBtn">').append(e('<div class="pbProgress">')),B=e('<div id="pbCaption">').append(j=e('<div class="pbCaptionText">').append('<div class="title"></div><div class="counter">'),q=e("<div>").addClass("pbThumbs")));e.fn.photobox=function(t,n,s){if(e(this).data("_photobox"))return this;if(typeof t!="string")t="a";if(t==="prepareDOM"){W();return this}var o=e.extend({},U,n||{}),u=new r(o,this,t);e(this).data("_photobox",u);u.callback=s;i.push(u);return this};r=function(n,r,i){this.options=e.extend({},n);this.target=i;this.selector=e(r||t);this.thumbsList=null;var s=this.imageLinksFilter(r.find(i));this.imageLinks=s[0];this.images=s[1];this.init()};r.prototype={init:function(){var e=this;if(this.options.thumbs)this.thumbsList=v.generate(this.imageLinks);this.selector.on("click.photobox",this.target,function(t){t.preventDefault();e.open(this)});this.observerTimeout=null;if(this.selector[0].nodeType==1)e.observeDOM(e.selector[0],function(){clearTimeout(e.observerTimeout);e.observerTimeout=setTimeout(function(){var t=e.imageLinksFilter(e.selector.find(e.target)),n=0;e.imageLinks=t[0];e.images=t[1];u=e.images;a=e.imageLinks;e.thumbsList=v.generate(e.imageLinks);q.html(e.thumbsList);if(l){n=e.thumbsList.find('a[href="'+l+'"]').eq(0).parent().index();K(n);v.changeActive(n,0)}},50)})},open:function(t){var n=e.inArray(t,this.imageLinks);if(n==-1)return false;o=this.options;u=this.images;a=this.imageLinks;s=this;this.setup(1);z.on(y,function(){z.off(y).addClass("on");Q(n,true)}).addClass("show");if(b)z.trigger("MSTransitionEnd");return false},imageLinksFilter:function(t){var n=[],r={},i;return[t.filter(function(t){var s=this,o=e(s).find("img")[0];if(!o)return false;r.content="<span>"+(o.getAttribute("alt")||o.getAttribute("title")||"")+"</span>";i=o.getAttribute("data-pb-captionlink");if(i){i=i.split("[");if(i.length==2){r.linkText=i[0];r.linkHref=i[1].slice(0,-1)}else{r.linkText=i;r.linkHref=i}r.content+=' <a href="'+r.linkHref+'">'+r.linkText+"</a>"}n.push([s.href,r.content]);return true}),n]},observeDOM:function(){var e=n.MutationObserver||n.WebKitMutationObserver,t=n.addEventListener;return function(n,r){if(e){var i=new e(function(e,t){if(e[0].addedNodes.length||e[0].removedNodes.length)r()});i.observe(n,{childList:true,subtree:true})}else if(t){n.addEventListener("DOMNodeInserted",r,false);n.addEventListener("DOMNodeRemoved",r,false)}}}(),setup:function(r){var i=r?"on":"off";_[0].src=N;if(r){_.css({transition:"0s"}).removeAttr("style");z.show();q.html(this.thumbsList);z[o.thumbs?"addClass":"removeClass"]("thumbs");if(o.thumbs){T.removeAttr("class");e(n).on("resize.photobox",v.calc);v.calc()}if(this.images.length<2)z.removeClass("thumbs hasArrows hasCounter hasAutoplay");else{z.addClass("hasArrows hasCounter");if(o.time>1e3){z.addClass("hasAutoplay");if(o.autoplay)g.progress.start();else g.pause()}else z.removeClass("hasAutoplay")}}else{e(n).off("resize.photobox")}if(o.hideFlash){e.each(["object","embed"],function(t,n){e(n).each(function(){if(r)this._photobox=this.style.visibility;this.style.visibility=r?"hidden":this._photobox})})}e(t).off("keydown.photobox")[i]({"keydown.photobox":$});if("ontouchstart"in document.documentElement){z.removeClass("hasArrows");R[i]("swipe",X)}if(o.zoomable){z[i]({"mousewheel.photobox":rt});if(!b)q[i]({"mousewheel.photobox":it})}},destroy:function(){this.selector.off("click.photobox",this.target).removeData("_photobox");ut();return this.selector}};v={generate:function(t){var n=e("<ul>"),r,i=[],s,o=t.size(),u,a,f;for(s=0;s<o;s++){r=t[s];a=e(r).find("img");u=a[0].title||a[0].alt||"";f=r.rel?" class='"+r.rel+"'":"";i.push("<li"+f+'><a href="'+r.href+'"><img src="'+a[0].src+'" alt="" title="'+u+'" /></a></li>')}n.html(i.join(""));return n},click:function(t){t.preventDefault();T.removeClass("active");T=e(this).parent().addClass("active");var n=e(this.parentNode).index();return Q(n,0,1)},changeActiveTimeout:null,changeActive:function(e,t,n){var r=T.index();T.removeClass("active");T=q.find("li").eq(e).addClass("active");if(n)return;clearTimeout(this.changeActiveTimeout);this.changeActiveTimeout=setTimeout(function(){var e=T[0].offsetLeft+T[0].clientWidth/2-m.clientWidth/2;t?q.delay(800):q.stop();q.animate({scrollLeft:e},500,"swing")},200)},calc:function(){S=q[0].clientWidth;x=q[0].firstChild.clientWidth;var e=x>S?"on":"off";!E&&q[e]("mousemove",v.move);return this},move:function(e){var t=x/S;q[0].scrollLeft=e.pageX*t-500}};g={autoPlayTimer:false,play:function(){g.autoPlayTimer=setTimeout(function(){Q(d)},o.time);g.progress.start();I.removeClass("play");g.setTitle("Click to stop autoplay");o.autoplay=true},pause:function(){clearTimeout(g.autoPlayTimer);g.progress.reset();I.addClass("play");g.setTitle("Click to resume autoplay");o.autoplay=false},progress:{reset:function(){I.find("div").removeAttr("style");setTimeout(function(){I.removeClass("playing")},200)},start:function(){if(!b)I.find("div").css(k,o.time+"ms");I.addClass("playing")}},setTitle:function(e){if(e)I.prop("title",e+" (every "+o.time/1e3+" seconds)")},toggle:function(e){e.stopPropagation();g[o.autoplay?"pause":"play"]()}};var Z={save:function(){if("pushState"in window.history&&decodeURIComponent(window.location.hash.slice(1))!=l&&o.history){window.history.pushState("photobox",t.title+"-"+u[f][1],window.location.pathname+window.location.search+"#"+encodeURIComponent(l))}},load:function(){if(o&&!o.history)return false;var e=decodeURIComponent(window.location.hash.slice(1)),t,n;if(!e&&z.hasClass("show"))ut();else for(t=0;t<i.length;t++)for(n in i[t].images)if(i[t].images[n][0]==e){i[t].open(i[t].imageLinks[n]);return true}},clear:function(){if(o.history&&"pushState"in window.history)window.history.pushState("photobox",t.title,window.location.pathname+window.location.search)}};window.onpopstate=function(){var e=window.onpopstate;return function(t){e&&e.apply(this,arguments);if(t.state=="photobox")Z.load()}}();var at=["DOMMouseScroll","mousewheel"];if(e.event.fixHooks){for(var ft=at.length;ft;)e.event.fixHooks[at[--ft]]=e.event.mouseHooks}e.event.special.mousewheel={setup:function(){if(this.addEventListener){for(var e=at.length;e;)this.addEventListener(at[--e],lt,false)}else this.onmousewheel=lt},teardown:function(){if(this.removeEventListener){for(var e=at.length;e;)this.removeEventListener(at[--e],lt,false)}else this.onmousewheel=null}};e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}});e.event.special.swipe={setup:function(){e(this).bind("touchstart",e.event.special.swipe.handler)},teardown:function(){e(this).unbind("touchstart",e.event.special.swipe.handler)},handler:function(t){function f(){a.removeEventListener("touchmove",l);i=s=null}function l(r){r.preventDefault();var l=i-r.touches[0].pageX,c=s-r.touches[0].pageY;if(Math.abs(l)>=20){f();o=l>0?-1:1}else if(Math.abs(c)>=20){f();u=c>0?1:-1}t.type="swipe";n.unshift(t,o,u);return(e.event.dispatch||e.event.handle).apply(a,n)}var n=[].slice.call(arguments,1),r=t.originalEvent.touches,i,s,o=0,u=0,a=this;t=e.event.fix(t);if(r.length==1){i=r[0].pageX;s=r[0].pageY;this.addEventListener("touchmove",l,false)}}};e(t).ready(W);window._photobox={history:Z}})(jQuery,document,window);


return stack;})(stacks.stacks_in_247_page22);