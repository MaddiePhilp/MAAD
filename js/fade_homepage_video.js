$(document).ready(function ($) {
  $('#fadeoutbutton').on('click',function(event){
    $('#divfade').hide(500);
    $('#Content').pause(500).fadeIn(500);
    });
  });
