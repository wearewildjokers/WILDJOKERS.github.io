(function(){
  var widgetIframe = document.getElementById('sc-widget'),
      widget       = SC.Widget(widgetIframe);

  widget.bind(SC.Widget.Events.READY, function() { 
    widget.bind(SC.Widget.Events.PLAY, function() { });
    {% for release in site.data.releases %}
      $('#{{ release.id }}').click(function() {
        widget.load('{{ release.sc_embed_url }}', {
          inverse:true,
          auto_play:true,
          show_user:false
        });
      });
    {% endfor %}
  });
}());