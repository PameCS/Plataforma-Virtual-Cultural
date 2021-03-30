import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
    
      /* ----------------------------------------------------------- */
      /*  Style Switcher
      /* ----------------------------------------------------------- */
      $(function () {
         $('.style-switch-button').on('click',function () {
          $('.style-switch-wrapper').toggleClass('active');
          });
          $('a.close-styler').on('click',function () {
            $('.style-switch-wrapper').removeClass('active');
          });
        });

    
    
      /* ----------------------------------------------------------- */
      /*  Fixed header
      /* ----------------------------------------------------------- */
     
        'use strict';

        $(window).on('scroll', function () {
    
        if ($(window).scrollTop() > 100) {
    
          $('.header').addClass('header-solid animated fadeInDown');
        } else {
    
          $('.header').removeClass('header-solid animated fadeInDown');
    
        }
    
      });
   

    
      $(window).on('scroll', function () {
    
        if ($(window).scrollTop() > 200) {
    
          $('.header2').addClass('header-bgnone animated fadeInDown');
        } else {
    
          $('.header2').removeClass('header-bgnone animated fadeInDown');
    
        }
    
      });
    
   
    
      /* ----------------------------------------------------------- */
      /*  Main slideshow
      /* ----------------------------------------------------------- */
    
      /* Home 2 */
     
      (<any>$('.flexSlideshow')).flexslider({
        slideshowSpeed: 5000,
        animationSpeed: 600
      });
    
      /* Home 3 and 4 */
    
      (<any>$('#main-slide')).carousel({
        pause: true,
        interval: 100000
      });
    
    
      /* ----------------------------------------------------------- */
      /*  Counter
      /* ----------------------------------------------------------- */

      (<any>$('.counter')).counterUp({
        delay: 10,
        time: 1000
      });
  
    
    
      /* ----------------------------------------------------------- */
      /*  Owl Carousel
      /* ----------------------------------------------------------- */
    
    
      //Testimonial
      (<any>$('#testimonial-carousel')).owlCarousel({
    
        navigation: false, // Show next and prev buttons
        slideSpeed: 600,
        pagination: true,
        singleItem: true
    
      });

      // Custom Navigation Events
     
      'use strict';
      var owl = $('#testimonial-carousel');
    
    
      // Custom Navigation Events
      $('.next').on('click',function () {
        owl.trigger('owl.next');
      });
      $('.prev').on('click',function () {
        owl.trigger('owl.prev');
      });
      $('.play').on('click',function () {
        owl.trigger('owl.play', 1000); //owl.play event accept autoPlay speed as second parameter
      });
      $('.stop').on('click',function () {
        owl.trigger('owl.stop');
      });
    
    
      //Clients
    
        'use strict';
        (<any>$('#client-carousel')).owlCarousel({
    
        navigation: false, // Show next and prev buttons
        slideSpeed: 400,
        pagination: false,
        items: 5,
        rewindNav: true,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        stopOnHover: true,
        autoPlay: true
    
      });


      //App gallery
      (<any>$('#app-gallery-carousel')).owlCarousel({
    
        navigation: false, // Show next and prev buttons
        slideSpeed: 400,
        pagination: true,
        items: 4,
        rewindNav: true,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        stopOnHover: true
      });

    
    
      /* ----------------------------------------------------------- */
      /*  Flex slider
      /* ----------------------------------------------------------- */
    
        'use strict';
      //Second item slider
     $(window).on('load',function () {
        (<any>$('.flexSlideshow')).flexslider({
          animation: 'fade',
          controlNav: false,
          directionNav: true,
          slideshowSpeed: 8000
        });
      });

      //Portfolio item slider
      $(window).on('load',function () {
        'use strict';
        (<any>$('.flexportfolio')).flexslider({
          animation: 'fade',
          controlNav: false,
          directionNav: true,
          slideshowSpeed: 8000
        });
      });
    
    
      /* ----------------------------------------------------------- */
      /*  Animation
      /* ----------------------new WOW().init();------------------------------------- */
      //Wow
      
    
    
      /* ----------------------------------------------------------- */
      /*  Prettyphoto
      /* ----------------------------------------------------------- */
   
      (<any>$('a[data-rel^=\'prettyPhoto\']')).prettyPhoto();
    
      /* ----------------------------------------------------------- */
      /* Video background
      /* ----------------------------------------------------------- */
      
        'use strict';
      var resizeVideoBackground = function () {
    
        (<any>$('.video-background')).each(function (i, el) {
          var $el = jQuery(el),
            $section = $el.parent(),
            min_w = 300,
            video_w = 16,
            video_h = 9,
            section_w = $section.outerWidth(),
            section_h = $section.outerHeight(),
            scale_w = section_w / video_w,
            scale_h = section_h / video_h,
            scale = scale_w > scale_h ? scale_w : scale_h,
            new_video_w, new_video_h, offet_top, offet_left;
    
    
          if (scale * video_w < min_w) {
            scale = min_w / video_w;
          }
    
          new_video_w = scale * video_w;
          new_video_h = scale * video_h;
          offet_left = (new_video_w - section_w) / 2 * -1;
          offet_top = (new_video_h - section_h) / 2 * -1;
    
          $el.css('width', new_video_w);
          $el.css('height', new_video_h);
          $el.css('marginTop', offet_top);
          $el.css('marginLeft', offet_left);
        });
    
      };
    
      $(window).on('resize', function () {
        resizeVideoBackground();
      });
    
      resizeVideoBackground();
   
      /* ----------------------------------------------------------- */
      /*  Back to top
      /* ----------------------------------------------------------- */
      
  
       $(window).on('scroll',function () {
        if ($(this).scrollTop() > 50) {
          $('#back-to-top').fadeIn();
        } else {
          $('#back-to-top').fadeOut();
        }
      });

      // scroll body to 0px on click
      $('#back-to-top').on('click',function () {
       (<any>$('#back-to-top')).tooltip('hide');
        $('body,html').animate({
          scrollTop: 0
        }, 800);
        return false;
      });
    
      (<any>$('#back-to-top')).tooltip('hide');
    
   
  }

}
