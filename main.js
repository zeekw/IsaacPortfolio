var render = function(li){
  var src = li.getElementsByClassName("gallery-img")[0].src;
  exifGet(li.getElementsByClassName("gallery-img")[0]);
  document.getElementById("background-img").src = src;
  document.getElementById("theImage").src = src;
  document.getElementById("theImage-placeholder").src = src;
}

var bigPicture = function(li){
  if(document.getElementById("theImage").src != li.getElementsByClassName("gallery-img")[0].src){
    var src = li.getElementsByClassName("gallery-img")[0].src;
    exifGet(li.getElementsByClassName("gallery-img")[0]);
    document.getElementById("background-img").src = src;
    document.getElementById("theImage").src = src;
    document.getElementById("theImage-placeholder").src = src;
  }
  
  document.getElementById("bigPicture").style.zIndex = "10";
  document.getElementById("bigPicture").style.display = "initial";
  document.getElementById("gallery").style.display = "none";
}

var gallery = function(){
  document.getElementById("bigPicture").style.display = "none";
  document.getElementById("gallery").style.display = "initial";
}

var exifGet = function(img){
  var bigPicture = img;
  EXIF.getData(bigPicture,function(){
    var date = EXIF.getTag(this, "DateTimeOriginal");
    if(date != null){
      var dateArray = date.split(":");
      var formattedDate = dateArray[1] + "/" + dateArray[2].substring(0,2) + "/" + dateArray[0];
      console.log(date);
      console.log(formattedDate);
      document.getElementById("timestamp").innerHTML = formattedDate;
    }
    else {
      document.getElementById("timestamp").innerHTML = "";
    }
  });
}