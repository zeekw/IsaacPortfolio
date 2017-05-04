var descriptionBoxHeight = 0;

var sizeUp = function(){
  var image = document.getElementById("theImage");
  var renderWidth = image.offsetWidth;
  var renderHeight = image.offsetHeight;
  var dimensions = {"x":renderWidth,"y":renderHeight};
  return dimensions
}

var resize = function(){
  sizeUp();
  descriptionBoxHeight = sizeUp().y / 5;
  console.log(descriptionBoxHeight);
  
  
}

var addDescription = function(){
  
}

$( window ).resize(function() {
//  console.log("resized");
  if(sizeUp().x < 864){
    resize();
  }
});