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
//https://api.github.com/gists
//var params =  {q:"jackson,ms",mode:'json',units:'imperial', cnt: '7'};
//url += '?' + urlStringify(params);
  req.onreadystatechange = function()
  {
  
	if (req.readyState === 4) {
		if (req.status === 200) {
			  alert(req.responseText);
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
