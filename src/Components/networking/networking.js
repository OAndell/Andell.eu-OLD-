
function getImages(){
	var pics = ["Ischgl      P1000142.JPG      P1000143.JPG      P1000155.JPG  bilder 3014      DSC_0076.JPG      DSC_0104.JPG"]
	var lst = pics.map(e => e.split(' '))
	var imageList = [];
	var images_list = cleanArray(lst[0])
	var x = false
	var title = null
	for (var i = 0; i < images_list.length; i++) {
		if (images_list[i].indexOf('.') < 0){
			if (x){
				break;
			}
			title = images_list[i]
			x=true
		}else{
			imageList.push("http://andell.eu/Bilder/".concat(title,"/",images_list[i]))
		}
	}
	return imageList
}
function cleanArray(actual) {
  var newArray = new Array();
  for (var i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i]);
    }
  }
  return newArray;
}
export {cleanArray}
export {getImages}
