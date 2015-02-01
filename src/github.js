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
//https://api.github.com 
//https://api.github.com/gists
var params =  {q:"jackson,ms",mode:'json',units:'imperial', cnt: '7'};
//url += '?' + urlStringify(params);
//var url = url + encodeURIComponent(params);
//var xurl = encodeURIComponent(url);
//req.onreadystatechange = function() {
 if (this.readyState === 4) {
  if (req.status === 200) {
		var weather = JSON.parse(this.Response.Text)
		var maxt = list[0].temp.max;
	};
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
