$(document).ready(function(){       
            var scroll_pos = 0;
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                
                if(scroll_pos > 50) {
                    $("button").css('background-color', '');
                    $("button").addClass('animated flip');
                    $("button").addClass('visibility: visible');
            
                } else {
                    $("button").css('background-color', '');
                    $("button").addClass('');
                }
            });

            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > 50) {
                    $("nav").css('background-color', 'white');
                    $("nav a").css('color', 'black');
                } else {
                    $("nav").css('background-color', 'transparent');
                    $("nav a").css('color', 'white');
                }
            });


             $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > 200) {
                    $(".aniText").addClass("animated slideInRight");
                 $(".aniText").addClass("visibility: visible");
                } else {
                    
                }
            });


             $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > 600) {
                    $(".projects").addClass("animated fadeInUpBig");
                 $(".projects").addClass("visibility: visible");
                } else {
                    
                }
            });

});
