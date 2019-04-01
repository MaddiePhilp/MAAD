$(document).ready(function ($) {
  $("#ContentWrapper").hide();
	$('#fadeoutbutton').on('click',function(event){
  $('#divfade').hide(500);
  $('#ContentWrapper').show(1000);
  $('#ContentWrapper').pause(500).fadeIn(500);
    });
  });
