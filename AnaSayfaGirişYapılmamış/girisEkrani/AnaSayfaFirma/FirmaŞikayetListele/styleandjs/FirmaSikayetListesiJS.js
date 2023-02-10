function toggleElementNoneBlock(elementId1) {
    // Seçilen elementleri göster/gizle
    var element1 = document.getElementById(elementId1);
    if (element1.style.display === 'none') {
      element1.style.display = 'block'
    }else 
      element1.style.display = 'none';
    }  

function toggleElement2NoneInline(elementId1,elementId2) {
  // Seçilen elementleri göster/gizle
  var element1 = document.getElementById(elementId1);
  var element2 = document.getElementById(elementId2);
  if (element1.style.display === 'none') {
    element1.style.display = 'inline';
  } else {
    element1.style.display = 'none';
  }
  if (element2.style.display === 'inline') {
    element2.style.display = 'none';
  } else {
    element2.style.display = 'none';
  }
}


function toggleElement2None(elementId1,elementId2) {
  // Seçilen elementleri göster/gizle
  var element1 = document.getElementById(elementId1);
  var element2 = document.getElementById(elementId2);
 
    element1.style.display = 'none';
    element2.style.display = 'none';
}