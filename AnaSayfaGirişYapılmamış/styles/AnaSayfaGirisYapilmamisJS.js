function showFrame(frameId) {
    // Tüm elementleri gizle
    var frames = document.querySelectorAll('iframe[id^="iframe"]');
    for (var i = 0; i < frames.length; i++) {
      frames[i].style.display = 'none';
    }
  
    // Seçilen elementi göster
    document.getElementById(frameId).style.display = 'block';
  }
 
  function hideFrame(frameId) {
  
    document.getElementById(frameId).style.display = 'none';
  }

  function toggleElementNoneInline(elementId1) {
    // Seçilen elementleri göster/gizle
    var element1 = document.getElementById(elementId1);
    if (element1.style.display === 'none') {
      element1.style.display = 'inline'
    }else 
      element1.style.display = 'none';
    }
    
    function toggleElementNoneBlock(elementId1) {
      // Seçilen elementleri göster/gizle
      var element1 = document.getElementById(elementId1);
      if (element1.style.display === 'none') {
        element1.style.display = 'block'
      }else 
        element1.style.display = 'none';
      }  