(function($) {
	Drupal.behaviors.imagebook = {
    attach: function (context, settings) {
      if (settings.imagebook !== undefined){
          var src5 = [];
          for (var k in settings.imagebook.testvar){
            if (settings.imagebook.testvar.hasOwnProperty(k)) {
                src5[k]= settings.imagebook.testvar[k];  
            } 
          }       
      }
      $(document).ready(function() {
        $('#imagebook').onebook(src5,{skin:['light','dark'], bgDark:'#222222', flip:'soft', border:25, cesh:false});
        // $('#photobook').onebook(src5,{skin:['light','dark'], bgDark:'#222222 url(./g06/bg.jpg)', flip:'soft', border:25, cesh:false});
      });
    }
  };
})(jQuery);
