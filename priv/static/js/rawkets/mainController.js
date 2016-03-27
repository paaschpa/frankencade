$(function() {
	var controller;
	
    function guid() {
            var ret = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
                return v.toString(16);});
            return ret;
    }

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    } 
        
	/**
	 * Initialises client-side functionality
	 */
	function init() {
		// WebSockets supported
		if ("WebSocket" in window) {
            // Manual sound setup – move this at a later date

            var playerId = decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent('rawketsPlayerId').replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || guid().slice(0,6);
            setCookie('rawketsPlayerId', playerId, 30);
            var rnd1 =  Math.round(Math.random()*255) + 1;
            var rnd2 =  Math.round(Math.random()*255) + 1;
            var rnd3 =  Math.round(Math.random()*255) + 1;
            var color = 'rgb(' + rnd1 + ', ' + rnd2 + ',' + rnd3 + ')';
            controller = new Controller(playerId, color);
            $('.controller').css('background-color', color);

            initListeners();
		// WebSockets not supported
		} else {
			$("#mask, #support").fadeIn();
		};
	};
	
	/**
	 * Initialises environmental event listeners
	 */	
    // Horrible passing of game object due to event closure
	function initListeners() {
		$(window).bind("keydown", {self: controller}, controller.keyDown)
				 .bind("keyup", {self: controller}, controller.keyUp);
	
       $('.move').on('mousedown touchstart', function(obj) {
            var o = {keyCode: $(this).data('move'), data: {self: controller}};
            controller.keyDown(o);
        });

        $('.move').on('mouseup touchend', function(obj) {
            var o = {keyCode: $(this).data('move'), data: {self: controller}};
            controller.keyUp(o);
        });	// Initialise client-side functionality	
    };

	init();
});
