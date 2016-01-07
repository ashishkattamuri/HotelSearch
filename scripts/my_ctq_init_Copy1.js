var _ctq = _ctq || [];
    
    // Create 'compare to' strip object
    _ctq.push(['newCompareToStrip', 'a']);
    _ctq.push(['a.setPublisherID', 4]);
    _ctq.push(['a.setAnchorID', 'ctAnchor']);
    _ctq.push(['a.setFormID', 'ctSearchForm']);

	/*
	
	_ctq.push(['a.setCityNameID', 'city']);
	_ctq.push(['a.setCheckInID', 'date1']);
	_ctq.push(['a.setCheckOutID', 'date2']);
	_ctq.push(['a.setGuestsID', 'guests']);
	_ctq.push(['a.setRoomsID', 'rooms']);		
*/
	// TODO: Attach the correct API methods to our search form, this is a 'Hotel Citywide' search.
	_ctq.push(['a.setFormID', 'hotelSmallSearchForm']);
	_ctq.push(['a.setCityNameID', 'ctCity']);
	_ctq.push(['a.setCheckInID', 'ctDate1']);
	_ctq.push(['a.setCheckOutID', 'ctDate2']);
	_ctq.push(['a.setGuestsID', 'ctGuests']);
	_ctq.push(['a.setRoomsID', 'ctRooms']);		
		
	
    _ctq.push(['a.setReferralURL', 'http://www.clicktripz.com/oneliner_applicant_test.php']);
    _ctq.push(['a.optMaxChecked', 1]);
    _ctq.push(['a.optMaxAdvertisers', 7]);
    _ctq.push(['a.optMaxSearchesPerDay', 9999]);
    _ctq.push(['a.optHardLimitSearchesPerSeconds', '9999:1']);


    // TODO: Add command to force a tabbed window to launch instead of individual advertiser pages.
	_ctq.push(['a.optCascadeWindows', 'false']);
	_ctq.push(['a.optForceTabbedMode', 'true']);
    
	
	// TODO: Add command(s) to force tabbed window to launch as a popunder on IE/FF/Chrome and a popover on Safari

	var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    // Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
	var isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
	var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    // At least Safari 3+: "[object HTMLElementConstructor]"
	var isChrome = !!window.chrome && !isOpera;              // Chrome 1+
	var isIE = /*@cc_on!@*/false || !!document.documentMode;   // At least IE6

	if(isIE || isFirefox || isChrome)
	{
		//console.log("isIE || isFirefox || isChrome");
		_ctq.push(['a.optPopUnder', 'true']);
	}
	else if(isSafari)
	{
		//console.log("isSafari");
		_ctq.push(['a.optPopUnder', 'false']);
	}
    else{
		_ctq.push(['a.optPopUnder', 'true']);
	}
	
    _ctq.push(['a.optThumbSize', 'small']);
    _ctq.push(['a.draw']);



	(function() {
        var ct = document.createElement('script'); ct.type = 'text/javascript'; ct.async = true;
        ct.src = ('https:' == document.location.protocol ? 'https://' : 'http://')+'static.clicktripz.com/scripts/js/ct.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ct, s);
    })();
	
	
	// TODO: Add handler to sync search inputs and launch the ClickTripz Tabbed Window
	
	(function() {
		syncForms();
    })();
	
	$( "#hotelSmallSearchForm" ).change(function() {
		syncForms();
	});
	
	
	function syncForms()
	{
	document.getElementById("ctCity").value=document.getElementById("city").value; 	
	document.getElementById("ctDate1").value= document.getElementById("date1").value ; 	
	document.getElementById("ctDate2").value= document.getElementById("date2").value; 	
	document.getElementById("ctGuests").value= document.getElementById("guests").value  ;
	document.getElementById("ctRooms").value= document.getElementById("rooms").value ; 	
	
	}
	
	
    
	