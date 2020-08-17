function Controller() {

	var that = {};

    that.selectedImageSVG = "";
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
	    $(".shirt-wrapper").off();
	}
	
	that.bindTrashButton = function() {
		
		$( ".trash" ).click(function() {

            that.loadImage();

		});
	}


	that.bindSelectButton = function() {
		
		$( ".selector" ).click(function() {
			
			that.selectedImageSVG = $(this).html()
			
            that.loadImage();
		
	    })

    }
	
	that.bindChooseButton = function() {
		
		$( ".choose" ).click(function() {


            var selectedSVG = $("#image-section").find(".svg-icon")[0];
			var svgInner = $("#image-section").find(".svg-icon")[0].innerHTML;
		
		
		

			$( ".selector-image" ).empty()
			$( ".selector" ).empty()
			$( "#greetings").empty()
			
			that.getLoader("Loading Selection");

			
			setTimeout(function() {


                   that.body.empty().append(shirtTemplate)
                   console.log(selectedSVG)
                   that.addSingleImage(selectedSVG)
				   that.addMultipleImages(svgInner)
				   that.bindShirtButton();


					$('#back').click(function() {

					    that.render();

					})
					
			},1200);
		})
		
	}
	

	that.bindShirtButton = function(){



	    $(".shirt-wrapper").click( function() {

            $(".shirt-wrapper").off();
            $(".shirt-type").css({"color":"black"});

	        var id =  $(this).attr("id");

	        if (id == "single") {

	            $("#multi").empty().append("<p style ='height:200px'>.</p>");

	        } else {

	            $("#single").empty().insertAfter("#multi").append("<p style ='height:200px'>.</p>");


	        }

	        console.log(id)

	    })


	}


	that.addSingleImage = function(svg) {

		
        var styles = {"position": "absolute", "width": "3em", "height": "3em", "top":"0px", "left":"0px", "fill":"black important", "z-index":"10000"};
	    $('#single').append('<div id="singleShirt"></div>');
	    
		$('#singleShirt').css({"position": "absolute", "width": "75px", "height": "75px", "top":"75px", "left":"160px"}).append(svg);
	        
			

	    $('#single').find(".svg-icon").css(styles);

        var styles2 = {"fill": "black"}
        $('#single').find(".svg-icon").find("path").css(styles2)
        $('#single').find(".svg-icon").find("polygon").css(styles2)
        $('#single').find(".svg-icon").find("rect").css(styles2)
		$('#single').find(".svg-icon").find("circle").css({"stroke": "black", "stroke-width": "1"})
		
	}
	
	

	
	
	that.addMultipleImages = function(svg) {


		var svgoutside = '<svg class="svg-icon" viewBox="0 0 20 20"></svg>'

        var styles = {"position": "absolute", "width": "0.8em", "height": "0.8em", "top":"0px", "left":"0px", "fill":"black important", "z-index":"10000"};

	    
		var gridheight = 8
		var gridwidth = 10
		var i, j;
		
		for (i = 0; i < gridheight; i++) {
			for (j = 0; j < gridwidth; j++) {
	
				
				
				
				
				var id = "multiShirt" + i.toString() + "_" + j.toString();
				var svgId = "svg" + id
				var tops = (2 + 32*i).toString() +"px"
				var lefts = (20 + 27*j).toString() +"px"
				
				$('#multi').append('<div id="' + id + '"></div>');
				$('#' + id ).css({"position": "absolute", "width": "15px", "height": "15px", "top": tops, "left": lefts});
				
				
				
				$('#' + id ).append('<svg id="'+ svgId +'" viewBox="0 0 20 20"> ' + svg +'</svg>')
				
				
				
				var styles2 = {"fill": "black"}
				$('#' + id).find('#' + svgId).find("path").css(styles2)
				$('#' + id).find('#' + svgId).find("polygon").css(styles2)
				$('#' + id).find('#' + svgId).find("rect").css(styles2)
				$('#' + id).find('#' + svgId).find("circle").css({"stroke": "black", "stroke-width": "1"})
				
			}
		}
	    
	}

	


	that.getLoader = function(string) {
		$("#image-section").empty().append('<div class="loader"></div>', '<div id="loader-text">' + string + '</br> (Fancy Animation)</div>' );
	}


    that.loadImage = function() {

        if (that.isLoading == false) {

                    that.getLoader("Generating Image");

                    $(".selector-image").css("display","none")
                    that.startLoading();

                    setTimeout(function() {

                        var styles = {"width": "23.5em", "height": "23.5em", "margin-left":"0px", "margin-top":"0px"};


                        $("#image-section").empty().append(that.selectedImageSVG);
                        $("#image-section").find(".svg-icon").css(styles);
                        that.stopLoading();


                        $(".selector-image").css("display","inline-block")

                    },1200);
                }

    };


	
	return that;

}