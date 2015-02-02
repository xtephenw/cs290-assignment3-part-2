window.onload = function() {
}
function loagGitPages(){
var req = new XMLHttpRequest();

if (!req)
{
	throw 'unable to create HttpRequest';
}
var url = 'https://api.github.com/gists';
var num_element = document.getElementById('selector');
var numpages = num_element.value;
  req.onreadystatechange = function()
  {
  
	if (req.readyState === 4) {
		if (req.status === 200) {
			  //alert(req.responseText);
			  var myjson = JSON.parse(req.responseText);
			  var i = 0;
			  for (var obj1 in myjson) {
				  p = document.createElement("P");
				  p.setAttribute("id", "el"+i);
    			  ptext = document.createTextNode(myjson[i].description);
				  
				  p.appendChild(ptext);
	
				  var br = document.createElement("br");
				  p.appendChild(br);

				  var x = document.createElement('a');; 
				  var linkText = document.createTextNode("Link to GitHub");
				  x.appendChild(linkText); 	
				  x.href = myjson[i].url;

				  p.appendChild(x);
				  
				  var br = document.createElement("br");
				  p.appendChild(br);
				  
				  ptext = document.createTextNode(myjson[i].created_at);
				  p.appendChild(ptext);

				  var br = document.createElement("br");
				  p.appendChild(br);

				  var button = document.createElement('button');
			      button.innerHTML = 'save to favorites';
				  button.setAttribute("id", "el"+i);
				  button.onclick = function(){
						//localStorage.setItem(this.getAttribute("id"), JSON.stringify(myjson[i])); myjson[i].description
						localStorage.setItem(this.getAttribute("id"), JSON.stringify(myjson[i])); 
						
					};
				  p.appendChild(button);
				  
				  document.body.appendChild(p);
				  console.log(myjson[i].files);
				  i ++;	
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
