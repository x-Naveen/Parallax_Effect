$(document).ready(function(){
	$('input').val(''); 
	
	$("#buttonSlide").click(function(){
		$("p").slideToggle();
	});
	
	$("#searching").keyup(function(){
		$("#demo1").html("The text contains"+" "+$(this).val().length+" "+$(this).val());
		
		 
	});
	
});

 
