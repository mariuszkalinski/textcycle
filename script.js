$(document).ready(function(){
	function apen(){
		setTimeout(apen,1500);
			//$(".wrapper ul").css({top:0});
		$(".wrapper ul").animate({top:-130,}, 1500, 'linear', function() {
       		//$(".wrapper ul li:first").before($('.wrapper ul li:last'));
       		$(".wrapper ul").append($(".wrapper ul li:first"));
       		//$(".wrapper ul").remove($(".wrapper ul li:first"));
       		//$(".wrapper ul").css({top: +=130})
       		$(".wrapper ul").css({'top' : '0px'});
       	 });
	}
	apen();		
});