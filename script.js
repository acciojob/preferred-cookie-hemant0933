//your JS code here. If required.
var fontsize = document.getElementById("fontsize");
var fontcolor = document.getElementById("fontcolor");

var mycookies = document.cookie.split("; ")
mycookies.map((item)=>{
	var cookieList = item.split("=");
	var myfontsize = cookieList[1];
	var myfontcolor = cookieList[3];

	fontsize.value = myfontsize;
	fontcolor.value = myfontcolor;
})

function onSubmit(event){
	document.cookie = `fontsize=${fontsize.value}`;
	document.cookie = `fontcolor=${fontcolor.value}`;
	event.preventDefault();
}

