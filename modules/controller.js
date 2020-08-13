function Controller() {

	var that = {};

	that.body = "";
	that.isLoading = false;

	that.initialize = function() {
	
		that.body = $("#shirt-section");
		

	
	}  

		
	that.render = function() {
		
		$("#greetings").append(greetingsTemplate);
		$("#selector-wrapper").append(categories);
		$("#choose-image").append(choose);
		
		that.bindTrashButton();
		that.bindChooseButton();
		that.bindSelectButton();
		
		
	}
	
	that.startLoading = function() {
		
		that.isLoading = true;
		
	}


	that.stopLoading = function() {
		
		that.isLoading = false;
		
	}
	
	
	that.bindTrashButton = function() {
		
		$( ".trash" ).click(function() {

			$("#image-section").empty();
			$(".selector-image").css("display","none");

		});
	}
	
	that.bindChooseButton = function() {
		
		$( ".choose" ).click(function() {

			var shirtSVG = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="tshirt" class="svg-inline--fa fa-tshirt fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M631.2 96.5L436.5 0C416.4 27.8 371.9 47.2 320 47.2S223.6 27.8 203.5 0L8.8 96.5c-7.9 4-11.1 13.6-7.2 21.5l57.2 114.5c4 7.9 13.6 11.1 21.5 7.2l56.6-27.7c10.6-5.2 23 2.5 23 14.4V480c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V226.3c0-11.8 12.4-19.6 23-14.4l56.6 27.7c7.9 4 17.5.8 21.5-7.2L638.3 118c4-7.9.8-17.6-7.1-21.5z"></path></svg>'

			$( ".selector-image" ).empty()
			$( ".selector" ).empty()
			$( "#greetings").empty()
			
			$("#image-section").empty().append('<div class="loader"></div>', '<div id="loader-text"> Loading Selection </br> (Fancy Animation)</div>' );
			
			
			setTimeout(function() {

					var styles = {"width": "23.5em", "height": "23.5em", "margin-left":"0px", "margin-top":"0px"};


					$("#shirt-section").empty().append(shirtSVG).append('<div id="choose-image"></div>');
					
			},1200);
		})
		
	}
	
	
	that.bindSelectButton = function() {
		
		$( ".selector" ).click(function() {
			var selectedImageSVG = $(this).html()
			if (that.isLoading == false) {
				$("#image-section").empty().append('<div class="loader"></div>', '<div id="loader-text"> Generating Image </br> (Fancy Animation)</div>' );

				that.startLoading();
		
				setTimeout(function() {

					var styles = {"width": "23.5em", "height": "23.5em", "margin-left":"0px", "margin-top":"0px"};


					$("#image-section").empty().append(selectedImageSVG);
					$("#image-section").find(".svg-icon").css(styles);
					that.stopLoading();
					

					$(".selector-image").css("display","inline-block")

				},1200);
			}
		});
		
	}
	
	return that;

}