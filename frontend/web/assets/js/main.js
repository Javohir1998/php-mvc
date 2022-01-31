(function() {
	'use strict';

	/*----------------------------------------
		Detect Mobile
	----------------------------------------*/
	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	/*----------------------------------------
		Back to top
	----------------------------------------*/
	var backToTop = function() {
		jQuery('.js-backtotop').on('click', function(e){
			e.preventDefault();
			jQuery('html, body').animate({
	        scrollTop: jQuery('body').offset().top
	    }, 700, 'easeInOutExpo');

		});
	}

	/*----------------------------------------
		More
	----------------------------------------*/
	var moreControl = function() {
		jQuery('.js-btn-more').on('click', function(e){
			e.preventDefault();
			jQuery('.probootstrap-header-top').toggleClass('active');
		});
	};

	/*----------------------------------------
		Search
	----------------------------------------*/
	var searchControl = function() {
		jQuery('.js-probootstrap-search').on('click', function(){
			jQuery('#probootstrap-search').addClass('active');
			setTimeout(function(){
				jQuery('#probootstrap-search').find('#search').focus().select();
			}, 500);
		});
		jQuery('.js-probootstrap-close').on('click', function(){
			jQuery('#probootstrap-search').removeClass('active');
		});
	};

	/*----------------------------------------
		Menu Hover
	----------------------------------------*/
	var menuHover = function() {
		if (!isMobile.any()) {
			jQuery('.probootstrap-navbar .navbar-nav li.dropdown').hover(function() {
			  jQuery(this).find('> .dropdown-menu').stop(true, true).delay(200).fadeIn(500).addClass('animated-fast fadeInUp');
			}, function() {
				jQuery(this).find('> .dropdown-menu').stop(true, true).fadeOut(200).removeClass('animated-fast fadeInUp')
			});
		}
	}
	/*----------------------------------------
		Carousel
	----------------------------------------*/
	var owlCarousel = function(){

		var owl = jQuery('.owl-carousel-carousel');
		owl.owlCarousel({
			items: 3,
			loop: true,
			margin: 20,
			nav: false,
			dots: true,
			smartSpeed: 800,
			autoHeight: true,
			navText: [
		      "<i class='icon-keyboard_arrow_left owl-direction'></i>",
		      "<i class='icon-keyboard_arrow_right owl-direction'></i>"
	     	],
	     	responsive:{
	        0:{
	            items:1
	        },
	        400:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    	}
		});

		var owl = jQuery('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 20,
			nav: false,
			dots: true,
			smartSpeed: 800,
			autoHeight: true,
			autoplay: true,
			navText: [
		      "<i class='icon-keyboard_arrow_left owl-direction'></i>",
		      "<i class='icon-keyboard_arrow_right owl-direction'></i>"
	     	]
		});

		var owl = jQuery('.owl-work');
		owl.owlCarousel({
			stagePadding: 150,
			loop: true,
			margin: 20,
			nav: true,
			dots: false,
			mouseDrag: false,
			autoWidth: true,
			autoHeight: true,
	    autoplay: true,
	    autoplayTimeout:2000,
	    autoplayHoverPause:true,
			navText: [	
				"<i class='icon-chevron-thin-left'></i>",
				"<i class='icon-chevron-thin-right'></i>"
			],
			responsive:{
			  0:{
		      items:1,
		      stagePadding: 10
			  },
			  500:{
			  	items:2,
		      stagePadding: 20
			  },
			  600:{
		      items:2,
		      stagePadding: 40
			  },
			  800: {
			  	items:2,
			  	stagePadding: 100
			  },
			  1100:{
		      items:3
			  },
			  1400:{
		      items:4
			  },
			}
		});
	};

	
	/*----------------------------------------
		Slider
	----------------------------------------*/
	var flexSlider = function() {
	  jQuery('.flexslider').flexslider({
	    animation: "fade",
	    prevText: "",
	    nextText: "",
	    slideshow: true
	  });
	}

	
	/*----------------------------------------
		Content Animation
	----------------------------------------*/
	var contentWayPoint = function() {
		var i = 0;
		jQuery('.probootstrap-animate').waypoint( function( direction ) {

			if( direction === 'down' && !jQuery(this.element).hasClass('probootstrap-animated') ) {
				
				i++;

				jQuery(this.element).addClass('item-animate');
				setTimeout(function(){

					jQuery('body .probootstrap-animate.item-animate').each(function(k){
						var el = jQuery(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn probootstrap-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft probootstrap-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight probootstrap-animated');
							} else {
								el.addClass('fadeInUp probootstrap-animated');
							}
							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};

	

	/*----------------------------------------
		Counter Animation
	----------------------------------------*/
	var counter = function() {
		jQuery('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};
	var counterWayPoint = function() {
		if (jQuery('#probootstrap-counter').length > 0 ) {
			jQuery('#probootstrap-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !jQuery(this.element).hasClass('probootstrap-animated') ) {
					setTimeout( counter , 400);					
					jQuery(this.element).addClass('probootstrap-animated');
				}
			} , { offset: '90%' } );
		}
	};

	var magnificPopupControl = function() {


		jQuery('.image-popup').magnificPopup({
			type: 'image',
			removalDelay: 300,
			mainClass: 'mfp-with-zoom',
			gallery:{
				enabled:true
			},
			zoom: {
				enabled: true, // By default it's false, so don't forget to enable it

				duration: 300, // duration of the effect, in milliseconds
				easing: 'ease-in-out', // CSS transition easing function

				// The "opener" function should return the element from which popup will be zoomed in
				// and to which popup will be scaled down
				// By defailt it looks for an image tag:
				opener: function(openerElement) {
				// openerElement is the element on which popup was initialized, in this case its <a> tag
				// you don't need to add "opener" option if this code matches your needs, it's defailt one.
				return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
			}
		});

		jQuery('.with-caption').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			closeBtnInside: false,
			mainClass: 'mfp-with-zoom mfp-img-mobile',
			image: {
				verticalFit: true,
				titleSrc: function(item) {
					return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
				}
			},
			zoom: {
				enabled: true
			}
		});


		jQuery('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false
    });
	}

	/*----------------------------------------
		Stellar
	----------------------------------------*/
	var stellarInit = function() {
		if( !isMobile.any() ) {
			jQuery(window).stellar();
		}
	};


	var progressBarControl = function() {
		if ( jQuery(".progress-bar-s2").length > 0 ) {
      var $progress_bar = jQuery('.progress-bar-s2');

      $progress_bar.appear();
      jQuery(document.body).on('appear', '.progress-bar-s2', function() {
          var current_item = jQuery(this);
          if (!current_item.hasClass('appeared')) {
              var percent = current_item.data('percent');
              current_item.append('<span>' + percent + '%' + '</span>').css('width', percent + '%').addClass('appeared');
          }
          
      });
    };
	}

	/*----------------------------------------
		Document Ready 
	----------------------------------------*/
	jQuery(document).ready(function(){
		menuHover();
		counterWayPoint();
		contentWayPoint();
		backToTop();
		searchControl();
		moreControl();
		magnificPopupControl();
		stellarInit();
		progressBarControl();
	});

	jQuery(window).load(function(){
		owlCarousel();
		flexSlider();
	});

	

})();

// buttons
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const closeCur = document.querySelector(".close")

// modal
const modalContent = document.querySelector(".modal-content");
const slides = Array.from(document.querySelectorAll(".my-slides"));
const columns = document.querySelectorAll(".column");
const demos = Array.from(document.querySelectorAll(".demo"));

// text
const numberText = document.querySelectorAll('.my-slides--number');
const captionText = document.getElementById("caption");

// img on page
const hoverShadows = Array.from(document.querySelectorAll(".hover-shadow"));


let slideIndex;
let translate = 0;
let columnWidth;


// if window resize reset all values
window.addEventListener("resize", () => {
	columnWidth = columns[0].offsetWidth;
	columns.forEach(el => {
		el.style.transform = `translateX(0)`;
	})
	slideIndex = 1;
	translate = 0;
	showSlides(slideIndex)
})

// buttons action

prev.addEventListener("click", () => {
	if (slideIndex === 1) return false
	plusSlides(-1)
	if (translate === 0) return null
	translate += columnWidth + 4;
	columns.forEach(el => {
		el.style.transform = `translateX(${translate}px)`;
	})
});

next.addEventListener("click", () => {
	if (demos.length + 1 === 1) return false
	plusSlides(1)
	if (translate === -(columns.length - 3) * (columnWidth + 4)) return null
	translate -= columnWidth + 4;
	columns.forEach(el => {
		el.style.transform = `translateX(${translate}px)`;
	})
});
closeCur.addEventListener("click", () => closeModal());


// add click to main img to trigger open carousel

hoverShadows.forEach((el, i) => {
	el.addEventListener("click", () => {
		openModal()
		currentSlide(i + 1)
	});
})

// add click thumbnails to show curent slide

demos.forEach((el, i) => {
	el.addEventListener("click", () => currentSlide(i +1));
})

// Open modal

function openModal() {
	document.getElementById("myModal").style.display = "block";
	columnWidth = columns[0].offsetWidth;
	showAndClose();
	numberText.forEach((el, id) => {
		el.innerHTML = `${id + 1} / ${numberText.length}`
	})
}

// Close the Modal
function closeModal() {
	document.getElementById("myModal").style.display = "none";
}

slideIndex = 1;


// Next/previous controls
function plusSlides(n) {
	showSlides(slideIndex += n);
}


// Thumbnail image controls
function currentSlide(n) {
	showSlides(slideIndex = n);
	let x = (n - 3) < 0? 0: (n - 3);
	translate = -(columnWidth + 4) * x;
	columns.forEach(el => {
		el.style.transform = `translateX(${translate}px)`;
	})
}

// control showing slides

function showSlides(n) {
	let i;
	showAndClose();
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < demos.length; i++) {
		demos[i].classList.remove("active")
	}
	slides[slideIndex-1].style.display = "block";
	demos[slideIndex-1].classList.add("active");
	captionText.innerHTML = demos[slideIndex-1].alt;
}

// control buttons if reach to limit left or right

function showAndClose() {
	if (slideIndex === 1) {
		prev.style.display = "none"
	} else {
		prev.style.display = "block"
	}

	if(slideIndex === demos.length) {
		next.style.display = "none";
	} else {
		next.style.display = "block";
	}
}