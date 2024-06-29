/* Template Styles
-----------------------------------------------------------------------------------*/

window.console = window.console || (function(){
	var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function(){};
	return c;
})();


jQuery(document).ready(function($) {
	
		// Color Changer
		$(".yellow" ).click(function(){
			$("#template-color" ).attr("href", "css/colors/yellow.css" );
			return false;
		});
		
		$(".green" ).click(function(){
			$("#template-color" ).attr("href", "css/colors/green.css" );
			return false;
		});
		
		$(".light-blue" ).click(function(){
			$("#template-color" ).attr("href", "css/colors/light-blue.css" );
			return false;
		});
		
		$(".aqua" ).click(function(){
			$("#template-color" ).attr("href", "css/colors/aqua.css" );
			return false;
		});		
		
		$(".navy" ).click(function(){
			$("#template-color" ).attr("href", "css/colors/navy.css" );
			return false;
		});

		$(".amethyst" ).click(function(){
			$("#template-color" ).attr("href", "css/colors/amethyst.css" );
			return false;
		});		
		
		$(".red" ).click(function(){
			$("#template-color" ).attr("href", "css/colors/red.css" );
			return false;
		});		
		
		$(".orange" ).click(function(){
			$("#template-color" ).attr("href", "css/colors/orange.css" );
			return false;
		});

		$(".dark" ).click(function(){
			$("#template-color" ).attr("href", "css/colors/dark.css" );
			return false;
		});
		
		$(".blue" ).click(function(){
			$("#template-color" ).attr("href", "css/colors/blue.css" );
			return false;
		});

		
		$(".lime" ).click(function(){
			$("#template-color" ).attr("href", "css/colors/lime.css" );
			return false;
		});
		
		$(".nice" ).click(function(){
			$("#template-color" ).attr("href", "css/colors/nice.css" );
			return false;
		});

		
		
		
		
		
		
		
		
		
		
		
		
		//BGs
		$(".bg1" ).click(function(){
			$("#bg-img" ).attr("href", "css/bg/bg1.css" );
			return false;
		});
		
		$(".bg2" ).click(function(){
			$("#bg-img" ).attr("href", "css/bg/bg2.css" );
			return false;
		});
		
		$(".bg3" ).click(function(){
			$("#bg-img" ).attr("href", "css/bg/bg3.css" );
			return false;
		});
		
		$(".bg4" ).click(function(){
			$("#bg-img" ).attr("href", "css/bg/bg4.css" );
			return false;
		});
		
		$(".bg5" ).click(function(){
			$("#bg-img" ).attr("href", "css/bg/bg5.css" );
			return false;
		});
		
		$(".bg6" ).click(function(){
			$("#bg-img" ).attr("href", "css/bg/bg6.css" );
			return false;
		});

		$(".bg7" ).click(function(){
			$("#bg-img" ).attr("href", "css/bg/bg7.css" );
			return false;
		});
		
		$(".bg8" ).click(function(){
			$("#bg-img" ).attr("href", "css/bg/bg8.css" );
			return false;
		});
		
		$(".bg9" ).click(function(){
			$("#bg-img" ).attr("href", "css/bg/bg9.css" );
			return false;
		});
		
		$(".bg10" ).click(function(){
			$("#bg-img" ).attr("href", "css/bg/bg10.css" );
			return false;
		});
		
		$(".bg11" ).click(function(){
			$("#bg-img" ).attr("href", "css/bg/bg11.css" );
			return false;
		});
		
		$(".bg12" ).click(function(){
			$("#bg-img" ).attr("href", "css/bg/bg12.css" );
			return false;
		});
		
		$(".bg13" ).click(function(){
			$("#bg-img" ).attr("href", "css/bg/bg13.css" );
			return false;
		});
		
		$(".bg14" ).click(function(){
			$("#bg-img" ).attr("href", "css/bg/bg14.css" );
			return false;
		});
		
		$(".bg15" ).click(function(){
			$("#bg-img" ).attr("href", "css/bg/bg15.css" );
			return false;
		});
		
		$(".bg16" ).click(function(){
			$("#bg-img" ).attr("href", "css/bg/bg16.css" );
			return false;
		});
		
		$(".bg17" ).click(function(){
			$("#bg-img" ).attr("href", "css/bg/bg17.css" );
			return false;
		});
		
		$(".bg18" ).click(function(){
			$("#bg-img" ).attr("href", "css/bg/bg18.css" );
			return false;
		});

		$(".bg19" ).click(function(){
			$("#bg-img" ).attr("href", "css/bg/bg19.css" );
			return false;
		});
		
		$(".bg20" ).click(function(){
			$("#bg-img" ).attr("href", "css/bg/bg20.css" );
			return false;
		});
		
		
		
		$(".img0" ).click(function(){
			$("#bg-img" ).attr("href", "css/bg/img0.css" );
			return false;
		});
		
		$(".img1" ).click(function(){
			$("#bg-img" ).attr("href", "css/bg/img1.css" );
			return false;
		});
		$(".img2" ).click(function(){
			$("#bg-img" ).attr("href", "css/bg/img2.css" );
			return false;
		});
		$(".img3" ).click(function(){
			$("#bg-img" ).attr("href", "css/bg/img3.css" );
			return false;
		});


		$("#template-styles h2 a").click(function(e){
			e.preventDefault();
			var div = $("#template-styles");
			console.log(div.css("left"));
			if (div.css("left") === "-135px") {
				$("#template-styles").animate({
					left: "0px"
				}); 
			} else {
				$("#template-styles").animate({
					left: "-135px"
				});
			}
		})
		

		$(".colors li a").click(function(e){
			e.preventDefault();
			$(this).parent().parent().find("a").removeClass("active");
			$(this).addClass("active");
		})
		
		$(".bg li a").click(function(e){
			e.preventDefault();
			$(this).parent().parent().find("a").removeClass("active");
			$(this).addClass("active");
		})

			

	});