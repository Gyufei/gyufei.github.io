// build time:Thu Sep 06 2018 00:08:01 GMT+0800 (CST)
NexT.utils=NexT.$u={wrapImageWithFancyBox:function(){$(".content img").not("[hidden]").not(".group-picture img, .post-gallery img").each(function(){var e=$(this);var i=e.attr("title");var t=e.parent("a");if(t.size()<1){t=e.wrap('<a href="'+this.getAttribute("src")+'"></a>').parent("a")}t.addClass("fancybox fancybox.image");t.attr("rel","group");if(i){t.append('<p class="image-caption">'+i+"</p>");t.attr("title",i)}});$(".fancybox").fancybox({helpers:{overlay:{locked:false}}})},lazyLoadPostsImages:function(){$("#posts").find("img").lazyload({placeholder:"/images/loading.gif",effect:"fadeIn"})},registerESCKeyEvent:function(){$(document).on("keyup",function(e){var i=e.which===27&&$(".search-popup").is(":visible");if(i){$(".search-popup").hide();$(".search-popup-overlay").remove();$("body").css("overflow","")}})},registerBackToTop:function(){var e=50;var i=$(".back-to-top");$(window).on("scroll",function(){i.toggleClass("back-to-top-on",window.pageYOffset>e);var t=$(window).scrollTop();var o=$(document).height();var r=$(window).height();var n=t/(o-r);var a=Math.round(n*100);$("#scrollpercent>span").html(a)});i.on("click",function(){$("body").velocity("scroll")})},embeddedVideoTransformer:function(){var e=$("iframe");var i=["www.youtube.com","player.vimeo.com","player.youku.com","music.163.com","www.tudou.com"];var t=new RegExp(i.join("|"));e.each(function(){var e=this;var i=$(this);var n=o(i);var a;if(this.src.search(t)>0){var s=r(n.width,n.height);i.width("100%").height("100%").css({position:"absolute",top:"0",left:"0"});var c=document.createElement("div");c.className="fluid-vids";c.style.position="relative";c.style.marginBottom="20px";c.style.width="100%";c.style.paddingTop=s+"%";var d=e.parentNode;d.insertBefore(c,e);c.appendChild(e);if(this.src.search("music.163.com")>0){a=o(i);var l=a.width>n.width||a.height<n.height;if(l){c.style.paddingTop=r(a.width,n.height)+"%"}}}});function o(e){return{width:e.width(),height:e.height()}}function r(e,i){return i/e*100}},addActiveClassToMenuItem:function(){var e=window.location.pathname;e=e==="/"?e:e.substring(0,e.length-1);$('.menu-item a[href="'+e+'"]').parent().addClass("menu-item-active")},hasMobileUA:function(){var e=window.navigator;var i=e.userAgent;var t=/iPad|iPhone|Android|Opera Mini|BlackBerry|webOS|UCWEB|Blazer|PSP|IEMobile|Symbian/g;return t.test(i)},isTablet:function(){return window.screen.width<992&&window.screen.width>767&&this.hasMobileUA()},isMobile:function(){return window.screen.width<767&&this.hasMobileUA()},isDesktop:function(){return!this.isTablet()&&!this.isMobile()},escapeSelector:function(e){return e.replace(/[!"$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g,"\\$&")},displaySidebar:function(){if(!this.isDesktop()||this.isPisces()){return}$(".sidebar-toggle").trigger("click")},isMist:function(){return CONFIG.scheme==="Mist"},isPisces:function(){return CONFIG.scheme==="Pisces"},getScrollbarWidth:function(){var e=$("<div />").addClass("scrollbar-measure").prependTo("body");var i=e[0];var t=i.offsetWidth-i.clientWidth;e.remove();return t},needAffix:function(){return this.isPisces()}};
//rebuild by neat 