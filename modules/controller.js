function Controller() {

	var that = {};

	that.body = "";
	that.isLoading = false;

	that.initialize = function() {
	
		that.body = $("#middle-column");


	
	}  

		
	that.render = function() {

        that.unbindAll();
        that.body.empty();


		that.body.append(bodyTemplate);
		$("#greetings").append(greetingsTemplate);
		$("#selector-wrapper").append(categoriesTemplate);
		$("#choose-image").append(chooseTemplate);
		
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


	that.unbindAll = function() {

	    $( ".trash" ).off();
	    $( ".choose" ).off();
	    $( ".selector" ).off();
	    $('#back').off();

	}
	
	that.bindTrashButton = function() {
		
		$( ".trash" ).click(function() {

			$("#image-section").empty();
			$(".selector-image").css("display","none");

		});
	}
	
	that.bindChooseButton = function() {
		
		$( ".choose" ).click(function() {

            var selectedSVG = $("#image-section").find(".svg-icon");

			$( ".selector-image" ).empty()
			$( ".selector" ).empty()
			$( "#greetings").empty()
			
			$("#image-section").empty().append('<div class="loader"></div>', '<div id="loader-text"> Loading Selection </br> (Fancy Animation)</div>' );


			
			setTimeout(function() {


                   that.body.empty().append(shirtTemplate)
                   console.log(selectedSVG)
                   that.addSingleImage(selectedSVG)


					$('#back').click(function() {

					    that.render();

					})
					
			},1200);
		})
		
	}
	
	
	that.bindSelectButton = function() {
		
		$( ".selector" ).click(function() {
			var selectedImageSVG = $(this).html()
			if (that.isLoading == false) {



				$("#image-section").empty().append('<div class="loader"></div>', '<div id="loader-text"> Generating Image </br> (Fancy Animation)</div>' );
                $(".selector-image").css("display","none")
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


	that.addSingleImage = function(svg) {

        var styles = {"position": "absolute", "width": "5em", "height": "5em", "top":"25%", "left":"45%", "fill":"black important", "z-index":"10000"};
	    //$('.single').append('<div id="singleShirt">' + svg + "</div>");
	    $('#single').append(svg[0]);
	    console.log(svg[0])
	    $('#single').find(".svg-icon").css(styles);

        var styles2 = {"fill": "white"}
        $('#single').find("path.svg-icon").css(styles2)
        $('#single').find("polygon.svg-icon").css(styles2)
        $('#single').find("rect.svg-icon").css(styles2)


        //.svg-icon circle {stroke: white;stroke-width: 1;}





	}


	
	return that;

}