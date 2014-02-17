## mRedirect: Mobile Redirect jQuery Redirect Plugin##
This simple jQuery plugin will check the current screen width an will redirect the page if it is below a target number. 
The plugin allows for a complete redirect or to add a string to the end of the current url
The plugin allows for the use of a query string variable and a cookie to override the redirect for a user provided amount of time

## Setting up mRedirect##
This plugin requires jQuery and it must be in your document head
```HTML
<script src="https://code.jquery.com/jquery.js"></script>
<script type="mRedirect.js"></script>
```

## Using up mRedirect##
 This plugin must be called first in jQuery $(document).ready function and a redirect string must be provided
```JavaScript
$(document).ready(function(e) {
    $.mobileRedirect({
    redirect: "m.",
	});
});
```

## Options for mRedirect##

- redirect: "": this will eithier be the string added to the existing url or a new url, if new url remember to use http or https
- addtorul: true,: this sets wether the redirect string will be added to the existing url or if it will use it as a new one
- addtostart:true,: if addtorul is true this will add the redirect to the start of the url, set to false if you want it added to the end
- fullsite:true,: if true the plugin will allow a query string and cookie based override of the redirect 
- resettime: 1,: this is the number of days the redirect skip cookie will last
- querystring:"fullsite", this is name of the redirect skip query string variable 
- cookiename:"fullsite",  this is name of the redirect skip query cookie 
- screensize:699,  this is maximum screen size for the redirect to fire this is window.inner 