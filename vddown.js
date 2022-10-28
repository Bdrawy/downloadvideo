  $(".click-btn-down").click(function(){
      var link = $(".link").val();
    var fromate = $(".formte").children("option:selected").val();
    var src =""+link+"="+fromate+"";
    downloadVideo(link,fromate);
  });
  function downloadVideo(link,fromate) {
      $('.download-video').html('<iframe style="width:100%;height:60px;border:0;overflow:hidden;" scrolling="no" src="https://loader.to/api/card/?url='+link+'&f='+fromate+'adUrl=https://www.downyoutube.tk/"></iframe>');
  }
