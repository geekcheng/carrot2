(function($) {

  $(document).ready(function() {
    $("#documents-panel").bind("carrot2.documents.loaded", function() {
      $("#source-time").html(window.sourceTime);
      
      if (window.fetchedDocumentsCount) {
        $("#document-count").html(window.fetchedDocumentsCount).parent().show();
      }
    });
    
    $("#clusters-panel").bind("carrot2.clusters.loaded", function() {
      if (window.algorithmTime) {
        $("#algorithm-time").html(window.algorithmTime).parent().show();
      }
    });
  });

})(jQuery);

