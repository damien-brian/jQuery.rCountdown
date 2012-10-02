/* -------------------------------
The MIT Licence (MIT)
Copyright (c) 2012 Damien BRIAN
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
------------------------------- */
(function($){
    $.fn.countdown = function(options) {
    
    		var defaults = {
    			callback	: false
    		};
    
			var options =  $.extend(defaults, options);
            this.each(function(){
            	rdla_check_time(this);
            });
            
            function rdla_check_time(_this)
            {
            	var start_date = Math.floor(new Date().getTime() / 1000);
            	var end_date = $(_this).attr('data-time');
            	
		        var time_left = end_date-start_date;
		        if(time_left <= 0)
		        {
		            $(_this).html("-");
		            if(options.callback)
		            	{
		            		options.callback();
		            	}
		            	
		        }
		        else
		        {
		        	rdla_show_countdown(time_left, _this);
		        	setTimeout(function(){
		        	 rdla_check_time(_this); 
		        	},1000);
		        }
            }
            
            function rdla_show_countdown(time_left, _this)
            {
            	var second = rdla_fill_zeros(time_left % 60);
            	time_left = Math.floor(time_left/60);
            	var minute = rdla_fill_zeros(time_left % 60);
            	time_left = Math.floor(time_left/60);
            	var hours = time_left;
            	
            	var output = "";
            	if(hours != 0)
            	  output = hours+"h ";
            	if(hours != 0 || minute != "00")
            	  output += minute+"m ";
            	output += second+"s ";
            	
            	$(_this).html(output);
            }
            function rdla_fill_zeros(obj){
			    s = '';
			    if(obj < 10){
			        obj = '0' + obj;
			    }
			    return obj;
			}
            
            
            

      }
})(jQuery);
