$(document).ready(function () {
  
    var iCal = new iCalendar("#Calender");
    iCal.render();
    

    $(window).scroll(function () {
        scrollTop = $(window).scrollTop();

         if( scrollTop >$('#menu').height()){
            $('#menu').addClass('scrollNav');


         }
         else{
            $('#menu').removeClass('scrollNav');    

         }
         
   
        });
        $(".SignClick").click(function() {
            $(".signInModal").css("display","block");
           });
           $(".signInModal").click(function() {
            $(this).css("display","none");
           });
        $(".nav-link").click(function() {
            $(".nav-link").removeClass("aciveLink");
           $(this).addClass("aciveLink");
           });
           $(".Features-Link").click(function() { 
	
            $('.nav-link').removeClass('activeLink');
            $(this).addClass('activeLink');
            
                $('html, body').animate({
                    scrollTop: $("#Features").offset().top-(150)
                }, 1000);
            });
            $(".Community-Link").click(function() { 
	
                $('.nav-link').removeClass('activeLink');
                $(this).addClass('activeLink');
                
                    $('html, body').animate({
                        scrollTop: $("#Community").offset().top-(150)
                    }, 1000);
                });
                $(".GetStartSection-Link").click(function() { 
	
                    $('.nav-link').removeClass('activeLink');
                    $(this).addClass('activeLink');
                    
                        $('html, body').animate({
                            scrollTop: $("#GetStartSection").offset().top-(150)
                        }, 1000);
                    });
                    $(".ClientSign").click(function() {
                        $(".signInSign").css("display","block");
                       });
                       $(".BusniessSign").click(function() {
                        $(".signInSign").css("display","block");
                       });
                     
                       $(".SignIn.SignUp").click(function() {
                        $(".signInUp").css("display","block");
                       });
                       $(".nav-link").click(function() { 
	
                        $('.nav-link').removeClass('activeLink');
                        $(this).addClass('activeLink');
                        
                        });
                  
                
});

