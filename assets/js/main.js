(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        $('.slider').owlCarousel({
        	autoplay:false,
            items:1,
            // nav:true,
            loop:true,
        });

        $('.slider-2').owlCarousel({
        	autoplay:false,
            items:1,
            nav:true,
            loop:true,
        });



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	