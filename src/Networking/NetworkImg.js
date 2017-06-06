import {Client} from "ftp"
function test(){
var text = document.getElementById("testText")
  console.log("asdasdasdas")
  this.c = new Client()
  this.c.on('ready', function() {
   this.c.list(function(err, list) {
     if (err) throw err;
     console.dir(list);
     this.c.end();
   });
  });
  // connect to localhost:21 as anonymous
  this.c.connect();
}
