$(document).ready(function(){
    $('#purpose').on('change', function() {
      if ( this.value == '1')
      {
        $("#Who").show();
      }
      else
      {
        $("#Who").hide();
      }
      if ( this.value == '2')
      {
        $("#Point").show();
      }
      else
      {
        $("#Point").hide();
      }
      if ( this.value == '3')
      {
        $("#Name").show();
      }
      else
      {
        $("#Name").hide();
      }
      if ( this.value == '4')
      {
        $("#contact").show();
      }
      else
      {
        $("#contact").hide();
      }
      if ( this.value == '5')
      {
        $("#Social").show();
      }
      else
      {
        $("#Social").hide();
      }
    });
});
