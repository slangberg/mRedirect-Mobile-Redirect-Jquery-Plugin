/*!
 * jQuery mRedirect Plugin v1.1
 * https://github.com/carhartl/jquery-cookie
 * http://samlangberg.com
 * Copyright 2014 Sam Langberg
 * Released under the MIT license
 */


(function ( $ ) {
 
    $.mRedirect = function( options ) {
 
        var settings = $.extend({
            redirect: "",
			addtorul: true,
			addtostart:true,
            resettime: 1,
			fullsite: true,
			querystring:"fullsite",
			cookiename:"fullsite",
			screensize:699
        }, options );
 
     if(settings.fullsite){
		
		if(getQueryVariable(settings.querystring))
		  {
			  alert('created cookie true');
			  createCookie(settings.cookiename,true,settings.resettime);
		  }//if getQueryVariable  
	 }//settings.fullsite
		
		  if (window.innerWidth <= settings.screensize) {
			  
			if(settings.fullsite){
				  if(!getQueryVariable(settings.querystring) && !readCookie(settings.cookiename))
				  {
					 alert('no query string cookie false');
					 redirectcode();
				  }//getQueryVariable && readCookie
			 }//settings.fullsite
			  
			else {
			redirectcode();
			}
			  
		  }//ifwindow

		
		function redirectcode(){
			 if(settings.addtorul){
					  if(settings.addtostart){
				  		document.location.href = settings.redirect+document.location.href;
					  }//add to start
					  
					  else{
						  document.location.href = document.location.href+settings.redirect;
					  }
				  }//add to url
				  
				  else{
					  document.location.href = settings.redirect;
				  }
		}
		
		function createCookie(name,value,days) {
			if (days) {
				var date = new Date();
				date.setTime(date.getTime()+(days*24*60*60*1000));
				var expires = "; expires="+date.toGMTString();
			}
			else var expires = "";
			document.cookie = name+"="+value+expires+"; path=/";
		}
		
		function readCookie(name) {
			var nameEQ = name + "=";
			var ca = document.cookie.split(';');
			for(var i=0;i < ca.length;i++) {
				var c = ca[i];
				while (c.charAt(0)==' ') c = c.substring(1,c.length);
				if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
			}
			return false;
		}
		
		function getQueryVariable(variable)
		{
			   var query = window.location.search.substring(1);
			   var vars = query.split("&");
			   for (var i=0;i<vars.length;i++) {
					   var pair = vars[i].split("=");
					   if(pair[0] == variable){return pair[1];}
			   }
			   return(false);
		}
    };
 
}( jQuery ));