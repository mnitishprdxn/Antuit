

$(document).ready(function(){

	$('.panel.active').show();

		$('.tabs').find('a').on('click',function(){

		$(this.hash).fadeIn().siblings().hide();

});
		

});
	