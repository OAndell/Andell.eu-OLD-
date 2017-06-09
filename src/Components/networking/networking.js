
function getImages(){
	var pics = ["Ischgl      P1000142.JPG      P1000143.JPG      P1000155.JPG  Kina      SDC12498a.JPG      SDC12498a.JPG-for-web-large.jpg      SDC12498a.JPG-for-web-small.jpg      SDC12500a.JPG"]
	var lst = pics.map(e => e.split(' '))

	var images_list = cleanArray(lst[0])

	var title = null
	var imageList = [];
	var ImageDict = {}
	for (var i = 0; i < images_list.length; i++) {
		if (images_list[i].indexOf('.') < 0){
			if (title != null){

				ImageDict[title] = imageList
				imageList = [];
				title = images_list[i];

			}
			title = images_list[i];
		}else{

			imageList.push("http://andell.eu/Bilder/".concat(title,"/",images_list[i]))
		}
	}
	ImageDict[title] = imageList


	return ImageDict
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

function login (name, password, callback){
	fetch('http://127.0.0.1:5000/', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    user: name,
    password: password,
  })
}).then((response) => response.json())
.then((responseJson) => { console.log(responseJson) })
.catch((error) => { console.error(error); });

}

export {cleanArray}
export {getImages}
export {login}
