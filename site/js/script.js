$( function(){
	$("#navbarToggle").blur(function (event) {
		var sreenwidth = window.innerwidth;
		if(sceenWidth<768){
			$("#collapsable-nav").collapse('hide');
		}
	});
});
(function(global){
	var dc ={};
	var homeHTML ="snippets/home-snippet.html";
	//convinience functon for inserting innerHTML for 'select'
	var innerHTML=function(selector,HTML){
			var targetElem = document.querySelector(selector);
			targetElem=document.querySelector(selector);
			targetElem.innerHTML=html;
	};
	//show loading icon inside element identified by 'selector.'
	var showLoading =function(selector){
		var html ="<div class='text-center'>";
		html+="<img src='image/ajax-loader.gif'></div>";
		insertHtml(selector.html);
	};
	document.addEventListener("DOMContnetLoaded",function(event)
	{
		showLoading("#main-content");
		$ajaxUtils.endGetRequest(
		homeHtml,
		function(responceText){
			document.querySelector("#main-content")
				.innerHTML=responceText;

		},
		false);
		});
		global.$dc=dc;
	})(window);
	
	


})