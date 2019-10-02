$(document).ready(function(){
	$("#root").click(function (event) { 
		console.log($(event.target).css('background')); 
	});
});