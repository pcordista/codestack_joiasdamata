/* jQuery onView plugin
|* by Arcade Hero
|* version: 1.0
|* licensed under the MIT License
|* 
 */

;(function ($, window) {

        
  
    var onView = function(node, callback) { 
       
            
            var element = $(node),
                wind = $(window),
                visible = null,
                timer;
            
        var check = function(){    
            //Window properties
		var  winTop = wind.scrollTop(),
			 winLeft = wind.scrollLeft(),
			 winFullHeight = winTop + wind.height(), // viewport Height + window scroll Top
			 winFullWidth = winLeft+ wind.width(); // viewport Width + window scroll Left
		
		  //Element properties
		var elTop = element.offset().top,
		    elLeft = element.offset().left,
		    elFullHeight = elTop + element.outerHeight(true),
	        elFullWidth = elLeft + element.outerWidth(true);
	 
         
       
         
         if( (elFullHeight>winTop && elTop<winFullHeight) && (elFullWidth> winLeft && elLeft < winFullWidth)  ) {
         visible = true;
         callback.call(node);	
         }
         
       
         
         
         
        };
        
        var actionTime = function () {
       
        if (!visible) {
        	 if(timer){
			clearTimeout(timer);
			
			
		     }
        	 timer = setTimeout(check,100);
        }
        	
        };
        
         $(window).on('scroll',actionTime).on('resize',actionTime);
         
          timer = setTimeout(check,100);
         
    
    }

     
       

    // create plugin

    $.fn.onView = function (callback) {
   
        return this.each(function () {
            
                onView(this, callback);
            
        });
    }

})(jQuery, window);
