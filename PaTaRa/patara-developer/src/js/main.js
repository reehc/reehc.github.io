/*--------------------------------------------------
Main Js
---------------------------------------------------*/


 $(document).ready(function(){
	"use strict";

	// Full Screen Search Box
	$('.search-box').first().expandSearch();

	// LightBox Video
	$( '.swipebox-video' ).swipebox( {
		videoMaxWidth : 1170, // videos max width
		loopAtEnd: true // true will return to the first image after the last image is reached
	} );

	// LightBox Gallery
	$( '.swipebox-gallery' ).swipebox( {
		loopAtEnd: true // true will return to the first image after the last image is reached
	} );


	/*--------------------------------------------------
	BACK TO TOP
	---------------------------------------------------*/

	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.backtotop');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('is-visible') : $back_to_top.removeClass('is-visible fade-out');
		if( $(this).scrollTop() > offset_opacity ) {
			$back_to_top.addClass('fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

	/*-------------------------------------------------*/
	/* =  socials share
	/*-------------------------------------------------*/

	var url = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;
	  var title = document.getElementsByTagName("title")[0].innerHTML;
	  var description = document.querySelector("meta[name=\'description\']").getAttribute('content');

	  // Need and attribute text
	  var twitter = document.querySelectorAll('.share--twitter');
	  Array.prototype.forEach.call(twitter, function(el, i){
	    el.addEventListener('click', function (e) {
	      e.preventDefault();
	      var text = this.getAttribute('data-message') +  " " + title;
	      window.open( "http://twitter.com/share?url=" +
	        encodeURIComponent(url) + "&text=" +
	        encodeURIComponent(text) + "&count=none/",
	        "tweet", "height=300,width=550,resizable=1"
	      );
	    });
	  });

	  var facebook = document.querySelectorAll('.share--facebook');
	  Array.prototype.forEach.call(facebook, function(el, i){
	    el.addEventListener('click', function (e) {
	      e.preventDefault();
	      window.open( "http://www.facebook.com/sharer.php?u=" +
	        encodeURIComponent(url) + "&t=" +
	        encodeURIComponent(title),
	        "facebook", "height=300,width=550,resizable=1"
	      );
	    });
	  });

	  var googleplus = document.querySelectorAll('.share--googleplus');
	  Array.prototype.forEach.call(googleplus, function(el, i){
	    el.addEventListener('click', function (e) {
	      e.preventDefault();
	      window.open( "https://plus.google.com/share?url=" +
	        encodeURIComponent(url),
	        "google +", "height=300,width=550,resizable=1"
	      );
	    });
	  });


	  // Need and attibute data-image-url
	  var pinterest = document.querySelectorAll('.share--pinterest');
	  Array.prototype.forEach.call(pinterest, function(el, i){
	    el.addEventListener('click', function (e) {
	      e.preventDefault();
	      var imageUrl = this.getAttribute('data-image-url');
	      window.open( "https://pinterest.com/pin/create/button/?url=" +
	        encodeURIComponent(url) + '&media=' +
	        encodeURIComponent(imageUrl) + '&description=' +
	        encodeURIComponent(description),
	        "pinterest", "height=300,width=550,resizable=1"
	      );
	    });
	  });

 

});


 


