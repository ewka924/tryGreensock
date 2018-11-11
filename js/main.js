

$(document).ready(function(){

	var tl = new TimelineLite();

	function appearElements(e){
		console.log(e);
		tl.to('.background1', 1.3, {height:"100vh",ease:Expo.easeOut});
		tl.to('.lineSVG', 1.3, {width: "7%"}, ".5");
		tl.to('.mainHeader', 1.3, {left: "2vh"}, ".5");
		tl.to('.lineSVGsocial', 1.3, {width:"7%"}, ".7");
		tl.to('.image', 1.3, {bottom:"60px",height:"80vh",ease:Expo.easeOut},".9");

		e.preventDefault();
	}



	$(window).on("mousewheel", appearElements);

	scrollToTop();





});

