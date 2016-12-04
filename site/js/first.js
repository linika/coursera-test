document.addEventListener("DOMcontentLoaded",
	functoin(event){

function sayhello (event){
	console.log(event);
	this.textContent ="Said it!";
	var name = document.getElementById("name").value;
	var message = "<h2>Hello"+ name +"!<h2>";
	document 
		.getElementId("content")
		.innerHTML =message;
		if (name==="student"){
			var title=
				document
					.querySelector("#title")
					.textContent;
					title += "& Lovin' it";
					document
						.querySelector("h1")
						.textContent = title;
			}			
		}
		document.querySelector("button")
		.addEventListener("click",sayhello);
	}
	);