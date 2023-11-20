/*========================================
---------- [JS_INDEXING_START] -----------
==========================================
## [_DynamicCurrentMenuClass]
## [_Main_nav_menu]
## [_Sticky_header]
## [_Mobile_menu_list]
## [_Mobile_nav_toggler]
## [_Search_toggler]
## [_Wow_animation]
## [_Data_attribute]
## [_Language_btn]
## [_Progress_line]
## [_CounterUp]
## [_Before_after_slider1]
## [_Nice_select]
## [_Accordion]
## [_js_tilt]
## [_video_popup]
## [_Home_banner_01]
## [_Home_banner_02]
## [_Testmonial_2col]
## [_Testmonial_3col]
## [_Projects_3col]
## [_Client_items]
## [_Sticky_header]
## [_Preloader]
==========================================
--------- [JS_INDEXING_END] --------------
==========================================
*/

(function ($) {
  "use strict";

  /*========== [_DynamicCurrentMenuClass] ============*/
  function dynamicCurrentMenuClass(selector) {
    let FileName = window.location.href.split("/").reverse()[0];
    selector.find("li").each(function () {
      let anchor = $(this).find("a");
      if ($(anchor).attr("href") == FileName) {
        $(this).addClass("current");
      }
    });
    selector.children("li").each(function () {
      if ($(this).find(".current").length) {
        $(this).addClass("current");
      }
    });
    if ("" == FileName) {
      selector.find("li").eq(0).addClass("current");
    }
  }

  /*========== [_Main_nav_menu] ============*/
  if ($(".main-nav-menu").length) {
    // dynamic current class
    let mainNavUL = $(".main-nav-menu");
    dynamicCurrentMenuClass(mainNavUL);
  }
  if ($(".main-nav-menu").length && $(".mobile-nav-container").length) {
    $(".main-nav-menu").clone().removeClass('main-nav-menu').addClass('mobile-menu-list').appendTo('.mobile-nav-container');
  }
  /*========== [_Sticky_header] ============*/
  if ($(".sticky-header").length) {
    $(".sticky-header").clone().insertAfter('.sticky-header').addClass('sticky-header--cloned');
  }

  /*========== [_Mobile_menu_list] ============*/
  if ($(".mobile-menu-list").length) {
    let dropdownAnchor = $(".mobile-menu-list .menu-has-sub > a");
    dropdownAnchor.each(function () {
      let self = $(this);
      let toggleBtn = document.createElement("BUTTON");
      toggleBtn.setAttribute("aria-label", "dropdown toggler");
      toggleBtn.innerHTML = "<i class='fa fa-angle-down'></i>";
      self.append(function () {
        return toggleBtn;
      });
      self.find("button").on("click", function (e) {
        e.preventDefault();
        let self = $(this);
        self.toggleClass("expanded");
        self.parent().toggleClass("expanded");
        self.parent().parent().children("ul").slideToggle();
      });
    });
  }

  /*========== [_Mobile_nav_toggler] ============*/
  if ($(".mobile-nav-toggler").length) {
    $(".mobile-nav-toggler").on("click", function (e) {
      e.preventDefault();
      $(".mobile-nav-wrapper").toggleClass("expanded");
      $("body").toggleClass("locked");
    });
  }

  /*========== [_Search_toggler] ============*/
  if ($(".search-toggler").length) {
    $(".search-toggler").on("click", function (e) {
      e.preventDefault();
      $(".search-popup").toggleClass("active");
      $(".mobile-nav-wrapper").removeClass("expanded");
      $("body").toggleClass("locked");
    });
  }

  /*========== [_Wow_animation] ============*/
  if ($(".wow").length) {
    var wow = new WOW({
      boxClass: "wow", // animated element css class (default is wow)
      animateClass: "animated", // animation css class (default is animated)
      mobile: true, // trigger animations on mobile devices (default is true)
      live: true // act on asynchronously loaded content (default is true)
    });
    wow.init();
  }

  /*========== [_Data_attribute] ============*/
  var sectionBgImg = $(".bg-img, .feature-box-area-style1, .footer, section, div");
  sectionBgImg.each(function(indx) {
    if ($(this).attr("data-background")) {
      $(this).css("background-image", "url(" + $(this).data("background") + ")");
    }
  });

  /*========== [_Language_btn] ============*/
  $('.language-btn').on('click', function(event) {
    event.preventDefault();
    $(this).next('.language-dropdown').toggleClass('open');
  });

  /*========== [_Progress_line] ============*/
  if ($('.progress-line').length) {
    $('.progress-line').appear(function() {
      var el = $(this);
      var percent = el.data('width');
      $(el).css('width', percent + '%');
    }, {
      accY: 0
    });
  }

  /*========== [_CounterUp] ============*/
  if ($('.count-box').length) {
    $('.count-box').appear(function() {
      var $t = $(this),
      n = $t.find(".count-text").attr("data-stop"),
      r = parseInt($t.find(".count-text").attr("data-speed"), 10);
      if (!$t.hasClass("counted")) {
        $t.addClass("counted");
        $({
          countNum: $t.find(".count-text").text()
        }).animate({
          countNum: n
        }, {
          duration: r,
          easing: "linear",
          step: function() {
            $t.find(".count-text").text(Math.floor(this.countNum));
          },
          complete: function() {
            $t.find(".count-text").text(this.countNum);
          }
        });
      }
    }, {
      accY: 0
    });
  }

  /*========= [_Before_after_slider1] =========*/
  // $(function(){
  //   $(".before-after-slider1").twentytwenty({
  //     default_offset_pct: 0.5, // How much of the before image is visible when the page loads
  //     orientation: 'horizontal', // Orientation of the before and after images ('horizontal' or 'vertical')
  //     no_overlay: false, //Do not show the overlay with before and after
  //     move_slider_on_hover: false, // Move slider on mouse hover?
  //     move_with_handle_only: true, // Allow a user to swipe anywhere on the image to control slider movement.
  //     click_to_move: true // Allow a user to click (or tap) anywhere on the image to move the slider to that location.
  //   });
  // });

  /*========= [_Nice_select] =========*/
  $('select').niceSelect();

  /*========= [_Accordion] =========*/
  $('.accordion-header').on('click', function(e) {
    var element = $(this).parent('.accordion-item');
    if (element.hasClass('active')) {
      element.removeClass('active');
      element.find('.accordion-body').removeClass('active');
      element.find('.accordion-body').slideUp(300, "swing");
    } else {
      element.addClass('active');
      element.children('.accordion-body').slideDown(300, "swing");
      element.siblings('.accordion-item').children('.accordion-body').slideUp(300, "swing");
      element.siblings('.accordion-item').removeClass('active');
      element.siblings('.accordion-item').find('.accordion-header').removeClass('active');
      element.siblings('.accordion-item').find('.accordion-body').slideUp(300, "swing");
    }
  });

  /*========= [_js_tilt] =========*/
  function onHoverthreeDmovement() {
    var tiltBlock = $('.js-tilt');
    if(tiltBlock.length) {
      $('.js-tilt').tilt({
        maxTilt: 15,
        perspective:1200,
        glare: true,
        maxGlare: 0
      })
    }
  }
  onHoverthreeDmovement();

  /*========= [_video_popup] =========*/
  if ($(".video-popup").length) {
    $(".video-popup").magnificPopup({
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: true,
      fixedContentPos: false
    });
  }

  /*========= [_Home_banner_01] =========*/
  function home_banner_01() {
    var owl = $(".home_banner_01 .home-carousel");
    owl.owlCarousel({
      loop:true,
      margin:0,
      nav:true,
      dots: false,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      active: true,
      autoplay: false,
      smartSpeed: 1000,
      autoplayTimeout: 8000,
      navText: ["<i class='base-icon-left-arrow'></i>", "<i class='base-icon-right-arrow'></i>"],
      responsive: {
        0: {
          items: 1
        },
        425: {
          items: 1
        },
        768: {
          items: 1
        },
        1024: {
          items: 1
        },
        1440: {
          items: 1
        }
      }
    });
  }
  home_banner_01();

  /*========= [_home_banner_rtl] =========*/
  function home_banner_01_rtl() {
    var owl = $(".home_banner_01_rtl .home-carousel");
    owl.owlCarousel({
      loop:true,
      margin:0,
      nav:true,
      dots: false,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      active: true,
      autoplay: false,
      rtl: true,
      smartSpeed: 1000,
      autoplayTimeout: 8000,
      navText: ["<i class='base-icon-right-chevron'></i>", "<i class='base-icon-left-chevron'></i>"],
      responsive: {
        0: {
          items: 1
        },
        425: {
          items: 1
        },
        768: {
          items: 1
        },
        1024: {
          items: 1
        },
        1440: {
          items: 1
        }
      }
    });
  }
  home_banner_01_rtl();

  /*========= [_Home_banner_02] =========*/
  function home_banner_02() {
    var owl = $(".home_banner_02 .home-carousel");
    owl.owlCarousel({
      loop:true,
      margin:0,
      nav:true,
      dots: false,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      active: true,
      autoplay: false,
      smartSpeed: 1000,
      autoplayTimeout: 8000,
      navText: ["<i class='base-icon-left-arrow'></i>", "<i class='base-icon-right-arrow'></i>"],
      responsive: {
        0: {
          items: 1
        },
        425: {
          items: 1
        },
        768: {
          items: 1
        },
        1024: {
          items: 1
        },
        1440: {
          items: 1
        }
      }
    });
  }
  home_banner_02();

  /*========= [_Home_banner_02] =========*/
  function home_banner_02_rtl() {
    var owl = $(".home_banner_02_rtl .home-carousel");
    owl.owlCarousel({
      loop:true,
      margin:0,
      nav:true,
      dots: false,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      active: true,
      autoplay: false,
      rtl: true,
      smartSpeed: 1000,
      autoplayTimeout: 8000,
      navText: ["<i class='base-icon-right-chevron'></i>", "<i class='base-icon-left-chevron'></i>"],
      responsive: {
        0: {
          items: 1
        },
        425: {
          items: 1
        },
        768: {
          items: 1
        },
        1024: {
          items: 1
        },
        1440: {
          items: 1
        }
      }
    });
  }
  home_banner_02_rtl();

  /*========= [_Iteam_3col] =========*/
  function item_3col() {
    var owl = $(".item_3col");
    owl.owlCarousel({
      loop: true,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 8000,
      nav: true,
      dots: false,
      navText: ["<i class='base-icon-left-chevron'></i>", "<i class='base-icon-right-chevron'></i>"],
      responsive: {
        0: {
          items: 1
        },
        425: {
          items: 1
        },
        768: {
          items: 2
        },
        1024: {
          items: 3
        },
        1440: {
          items: 3
        }
      }
    });
  }
  item_3col();


  /*========= [_Iteam_4col] =========*/
  function item_4col() {
    var owl = $(".item_4col");
    owl.owlCarousel({
      loop: true,
      margin: 30,
      autoplay: false,
      autoplayTimeout: 8000,
      nav: true,
      dots: false,
      navText: ["<i class='base-icon-left-chevron'></i>", "<i class='base-icon-right-chevron'></i>"],
      responsive: {
        0: {
          items: 1
        },
        425: {
          items: 1
        },
        768: {
          items: 2
        },
        1024: {
          items: 3
        },
        1440: {
          items: 4
        }
      }
    });
  }
  item_4col();

  /*========= [_Iteam_4col] =========*/
  function item_4col_rtl() {
    var owl = $(".item_4col_rtl");
    owl.owlCarousel({
      loop: true,
      margin: 30,
      autoplay: false,
      autoplayTimeout: 8000,
      nav: true,
      dots: false,
      rtl: true,
      navText: ["<i class='base-icon-left-chevron'></i>", "<i class='base-icon-right-chevron'></i>"],
      responsive: {
        0: {
          items: 1
        },
        425: {
          items: 1
        },
        768: {
          items: 2
        },
        1024: {
          items: 3
        },
        1440: {
          items: 4
        }
      }
    });
  }
  item_4col_rtl();

  /*========= [_Testmonial_1col] =========*/
  function testmonial_1col() {
    var owl = $(".testmonial_1col");
    owl.owlCarousel({
      loop: true,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 8000,
      nav: true,
      dots: false,
      navText: ["<i class='base-icon-left-chevron'></i>", "<i class='base-icon-right-chevron'></i>"],
      responsive: {
        0: {
          items: 1
        },
        425: {
          items: 1
        },
        768: {
          items: 1
        },
        1024: {
          items: 1
        },
        1440: {
          items: 1
        }
      }
    });
  }
  testmonial_1col();

  /*========= [_testmonial_1col_rtl] =========*/
  function testmonial_1col_rtl() {
    var owl = $(".testmonial_1col_rtl");
    owl.owlCarousel({
      loop: true,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 8000,
      nav: true,
      dots: false,
      rtl: true,
      navText: ["<i class='base-icon-right-chevron'></i>", "<i class='base-icon-left-chevron'></i>"],
      responsive: {
        0: {
          items: 1
        },
        425: {
          items: 1
        },
        768: {
          items: 1
        },
        1024: {
          items: 1
        },
        1440: {
          items: 1
        }
      }
    });
  }
  testmonial_1col_rtl();


  /*========= [_Testmonial_2col] =========*/
  function testmonial_2col() {
    var owl = $(".testmonial_2col");
    owl.owlCarousel({
      loop: true,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 8000,
      nav: true,
      dots: false,
      navText: ["<i class='base-icon-left-chevron'></i>", "<i class='base-icon-right-chevron'></i>"],
      responsive: {
        0: {
          items: 1
        },
        425: {
          items: 1
        },
        768: {
          items: 1
        },
        1024: {
          items: 2
        },
        1440: {
          items: 2
        }
      }
    });
  }
  testmonial_2col();

  /*========= [_Testmonial_3col] =========*/
  function testmonial_3col() {
    var owl = $(".testmonial_3col");
    owl.owlCarousel({
      loop: true,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 8000,
      nav: true,
      dots: false,
      navText: ["<i class='base-icon-left-chevron'></i>", "<i class='base-icon-right-chevron'></i>"],
      responsive: {
        0: {
          items: 1
        },
        425: {
          items: 1
        },
        768: {
          items: 2
        },
        1024: {
          items: 3
        },
        1440: {
          items: 3
        }
      }
    });
  }
  testmonial_3col();

  /*========= [_Projects_3col] =========*/
  function projects_5col() {
    var owl = $(".projects_5col");
    owl.owlCarousel({
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 8000,
      nav: true,
      dots: false,
      navText: ["<i class='base-icon-left-chevron'></i>", "<i class='base-icon-right-chevron'></i>"],
      responsive: {
        0: {
          items: 1
        },
        425: {
          items: 1
        },
        768: {
          items: 2
        },
        1024: {
          items: 3
        },
        1440: {
          items: 5
        }
      }
    });
  }
  projects_5col();

  /*========= [_projects_5col_rtl] =========*/
  function projects_5col_rtl() {
    var owl = $(".projects_5col_rtl");
    owl.owlCarousel({
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 8000,
      nav: true,
      dots: false,
      rtl: true,
      navText: ["<i class='base-icon-left-chevron'></i>", "<i class='base-icon-right-chevron'></i>"],
      responsive: {
        0: {
          items: 1
        },
        425: {
          items: 1
        },
        768: {
          items: 2
        },
        1024: {
          items: 3
        },
        1440: {
          items: 5
        }
      }
    });
  }
  projects_5col_rtl();

  /*========= [_Projects_4col] =========*/
  function projects_4col() {
    var owl = $(".projects_4col");
    owl.owlCarousel({
      loop: true,
      margin: 10,
      autoplay: false,
      autoplayTimeout: 8000,
      nav: true,
      dots: false,
      navText: ["<i class='base-icon-chevron-left'></i>", "<i class='base-icon-chevron-right'></i>"],
      responsive: {
        0: {
          items: 1
        },
        425: {
          items: 1
        },
        768: {
          items: 2
        },
        1024: {
          items: 3
        },
        1440: {
          items: 4
        }
      }
    });
  }
  projects_4col();

  /*========= [_Projects_4col] =========*/
  function projects_4col_rtl() {
    var owl = $(".projects_4col_rtl");
    owl.owlCarousel({
      loop: true,
      margin: 10,
      autoplay: false,
      autoplayTimeout: 8000,
      nav: true,
      dots: false,
      rtl: true,
      navText: ["<i class='base-icon-chevron-left'></i>", "<i class='base-icon-chevron-right'></i>"],
      responsive: {
        0: {
          items: 1
        },
        425: {
          items: 1
        },
        768: {
          items: 2
        },
        1024: {
          items: 3
        },
        1440: {
          items: 4
        }
      }
    });
  }
  projects_4col_rtl();

  /*========= [_Client_items] =========*/
  function client_items() {
    var owl = $(".client-items");
    owl.owlCarousel({
      loop: true,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 8000,
      nav: false,
      dots: false,
      navText: ["<i class='base-icon-left-chevron'></i>", "<i class='base-icon-right-chevron'></i>"],
      responsive: {
        0: {
          items: 1
        },
        425: {
          items: 1
        },
        768: {
          items: 3
        },
        1024: {
          items: 4
        },
        1440: {
          items: 5
        }
      }
    });
  }
  client_items();

  /*========= [_Client_items] =========*/
  function client_items_rtl() {
    var owl = $(".client_items_rtl");
    owl.owlCarousel({
      loop: true,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 8000,
      nav: false,
      rtl: true,
      dots: false,
      navText: ["<i class='base-icon-left-chevron'></i>", "<i class='base-icon-right-chevron'></i>"],
      responsive: {
        0: {
          items: 1
        },
        425: {
          items: 2
        },
        768: {
          items: 3
        },
        1024: {
          items: 4
        },
        1440: {
          items: 5
        }
      }
    });
  }
  client_items_rtl();


  /*========= [_Client_items] =========*/
  function client_items2() {
    var owl = $(".client-items2");
    owl.owlCarousel({
      loop: true,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 8000,
      nav: false,
      dots: false,
      navText: ["<i class='base-icon-left-chevron'></i>", "<i class='base-icon-right-chevron'></i>"],
      responsive: {
        0: {
          items: 1
        },
        425: {
          items: 2
        },
        768: {
          items: 3
        },
        1024: {
          items: 4
        },
        1440: {
          items: 6
        }
      }
    });
  }
  client_items2();

  /*========= [_Sticky_header] =========*/
  $(window).on("scroll", function () {
    if ($(".sticky-header--cloned").length) {
      var headerScrollPos = 130;
      var stricky = $(".sticky-header--cloned");
      if ($(window).scrollTop() > headerScrollPos) {
        stricky.addClass("sticky-fixed");
      } else if ($(this).scrollTop() <= headerScrollPos) {
        stricky.removeClass("sticky-fixed");
      }
    }
    if ($(".scroll-to-top").length) {
      var strickyScrollPos = 100;
      if ($(window).scrollTop() > strickyScrollPos) {
        $(".scroll-to-top").fadeIn(500);
      } else if ($(this).scrollTop() <= strickyScrollPos) {
        $(".scroll-to-top").fadeOut(500);
      }
    }
  });

  /*========= [_Preloader] =========*/
  $(window).on("load", function () {
    $('#ctn-preloader').addClass('loaded');
    if ($('#ctn-preloader').hasClass('loaded')) {
      // Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
      $('#ctn-preloader').delay(200).fadeOut(500).queue(function() {
        $(this).remove();
      });
    }
  });

  /*========= [TypeText] =========*/
  var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = !1
  };
  TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1)
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1)
    }
    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
    var that = this;
    var delta = 200 - Math.random() * 100;
    if (this.isDeleting) {
      delta /= 2
    }
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = !0
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = !1;
      this.loopNum++;
      delta = 500
    }
    setTimeout(function() {
      that.tick()
    }, delta)
  };
  window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period)
      }
    }
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.06em solid #fff}";
    document.body.appendChild(css)
  }

  // window.addEventListener('contextmenu', function (e) {
  //   // do something here...
  //   e.preventDefault();
  // }, false);

  // document.onkeydown = function (e) {
  //   if (event.keyCode == 123) {
  //     return false;
  //   }
  //   if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
  //     return false;
  //   }
  //   if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
  //     return false;
  //   }
  //   if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
  //     return false;
  //   }
  //   if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
  //     return false;
  //   }
  // }

})(jQuery);