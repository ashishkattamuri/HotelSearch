var _ctq = _ctq || [];
    
    // Create 'compare to' strip object
    _ctq.push(['newCompareToStrip', 'a']);
    _ctq.push(['a.setPublisherID', 4]);
    _ctq.push(['a.setAnchorID', 'ctAnchor']);
    _ctq.push(['a.setFormID', 'ctSearchForm']);

	// TODO: Attach the correct API methods to our search form, this is a 'Hotel Citywide' search.
	_ctq.push(['a.setCityNameID', 'city']);
	_ctq.push(['a.setCheckInID', 'checkin']);
	_ctq.push(['a.setCheckOutID', 'checkout']);
	_ctq.push(['a.setGuestsID', 'guests']);
	_ctq.push(['a.setRoomsID', 'rooms']);		
	
	
    _ctq.push(['a.setReferralURL', 'http://www.clicktripz.com/oneliner_applicant_test.php']);
    _ctq.push(['a.optMaxChecked', 1]);
    _ctq.push(['a.optMaxAdvertisers', 7]);
    _ctq.push(['a.optMaxSearchesPerDay', 9999]);
    _ctq.push(['a.optHardLimitSearchesPerSeconds', '9999:1']);

    // TODO: Add command to force a tabbed window to launch instead of individual advertiser pages.
	_ctq.push(['a.optCascadeWindows', 'false']);
    
	
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



	// TODO: Add handler to sync search inputs and launch the ClickTripz Tabbed Window
	(function() {
        var ct = document.createElement('script'); ct.type = 'text/javascript'; ct.async = true;
        ct.src = ('https:' == document.location.protocol ? 'https://' : 'http://')+'static.clicktripz.com/scripts/js/ct.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ct, s);
    })();

    
	