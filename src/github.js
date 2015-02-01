window.onload = function() {
}
function loagGitPages(){
var req = new XMLHttpRequest();

if (!req)
{
	throw 'unable to create HttpRequest';
}
var citySelect = document.getElementsByName('');
var url = 'https://api.github.com/gists';
  req.onreadystatechange = function()
  {
  
	if (req.readyState === 4) {
		if (req.status === 200) {
			  alert(req.responseText);
			  var myjson = JSON.parse(req.responseText);
			  var i = 0;
			  for (var obj1 in myjson) {
				  p = document.createElement("P");
				  ptext = document.createTextNode(myjson[i].url);
				  p.appendChild(ptext);
				  document.body.appendChild(p);
				  
				  var br = document.createElement("br");
				  p.appendChild(br);
				  
				  ptext = document.createTextNode(myjson[i].created_at);
				  p.appendChild(ptext);
				  document.body.appendChild(p);
				  
				  console.log(myjson[i].files);
				 	

			  }			  
		
		};
	}
  }
  req.open('GET',url,true);
  req.send();
  var x = 1;
}


function urlStringify(obj)
{
var str = [];
for (var prop in obj){
	var s = encodeURIComponent(prop) + '=' + encodeURIComponent(obj[prop]);
	str.push(s);
   }
	return str.join('&');
}
