$(document).ready(function() {

	function imgToBg(el, img) {
		img = typeof img !== 'undefined' ? img : '> img';
		
		$(el).each(function() {
			var $img = $(this).find(img);
			
			if ($img.length) {
				$(this).css('background-image', 'url(' + $img.attr('src') + ')');
			}
		});
	}
	imgToBg('.page-header, .repeater-area .sfnewsList .img');
	$(".navbar ul li").has("ul").addClass("has-drop");
	$('.navbar li').each(function(){
		if($(this).hasClass('active')) {
			$(this).find('ul').slideDown(0);
		}
	});
	$('.navbar .has-drop > a').click(function(){
		$(this).siblings('ul').slideToggle();
		$(this).closest('li').toggleClass('active');
		$(this).closest('li').siblings('.active').removeClass('active').children('ul').slideUp();
		return false;
	});
	
	customForm.lib.domReady(function(){
		customForm.customForms.replaceAll();
	});
	$('#form').validate({
		highlight: function(element) {
			$(element).closest('.form-box').addClass('errorWrap').removeClass('validWrap');
			$(element).closest('.FormDropdown').addClass('errorWrap').removeClass('validWrap');
		},
		unhighlight: function(element) {
			$(element).closest('.form-box').removeClass('errorWrap').addClass('validWrap');
			$(element).closest('.FormDropdown').removeClass('errorWrap').addClass('validWrap');
		},
		errorPlacement: function(error, element) {
			error.appendTo(element.closest(".FieldWrap").siblings('.error'));
		},
		rules: {
			firstname: {
				minlength: 3,
				maxlength: 15
			},
			lastname: {
				minlength: 3,
				maxlength: 15
			},
			email: {
				email: true
			}
		}
	});
	
});
