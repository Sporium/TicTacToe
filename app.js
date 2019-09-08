$(document).ready(function(){

var player =1;
var random = Math.floor(Math.random()*9)+1;
var rand = Math.floor(Math.random()*9)+1;
var tag = ".sq" + rand.toString();

var vs = '';

console.log(tag);
var togle = "";
var ntogle = "";
var xo = "";
var nxo ="";

$("#draw").hide();
$("#reload").hide();
$("#winpl1").hide();
$("#winpl2").hide();
$("#hal").hide();
$("#gameboard").hide();
$("#XorO").hide();


$("#1player").click(function(){
	$("#gameboard").show();
	$("#mode").hide();
	vs = 'hal';

	$('.square').on('click',function(event){
	var squareSelected = $(this);

	if (squareSelected.hasClass('ex') || squareSelected.hasClass('oh')) {
		alert('This square has been selected!');
		}
	else {
		if (player===1) {
			squareSelected.addClass('ex').append('<i class="fa fa-times" aria-hiden="true"></i>');
			if (didWin('ex')) {
				$('#gameboard').hide();
				$('#reload').show();
				$('#winpl1').show();
				$('#reload').click(function(){
			//		alert('5')
          document.location.reload(true);
				});
			}else {
					player = 2;
					console.log(tag);
		 		}
			}else{
			$(randomSquare(random)).addClass('oh').append('<i class="fa fa-circle-o" aria-hiden="true"></i>');
			if (didWin('oh')) {
				$('#gameboard').hide();
				$('#reload').show();
				$('#hal').show();
				$('#reload').click(function(){
		//	alert('444');
        document.location.reload(true);
				});
			}else {
					player = 1;
					console.log(tag);
		 		}
			}
	}


}); //click event



}); // 1 player


$("#2player").click(function(){
vs = "winpl2";
	$("#mode").hide();
$("#XorO").show();

$("#X").click(function(){
togle ="ex";  //pick X
ntogle ='oh'  //pick O
xo = 'fa-times';  //show X on board
nxo = 'fa-circle-o'; //show O on board
$("#gameboard").show();
$("#XorO").hide();
game();
});
$("#O").click(function(){
togle ="oh";
ntogle = 'ex';
xo = 'fa-circle-o';
nxo = 'fa-times';
$("#gameboard").show();
$("#XorO").hide();
game();
});


});//2playerClickFunc

function game (){

$('.square').on('click',function(event){
	var squareSelected = $(this);

	if (squareSelected.hasClass(togle) || squareSelected.hasClass(togle)) {
		alert('This square has been selected!');
		}
	else {
		if (player===1) {
			squareSelected.addClass(togle).append('<i class="fa '+xo+'" aria-hiden="true"></i>');
			if (didWin(togle)) {
				$('#gameboard').hide();
				$('#reload').show();
				$('#winpl1').show();
				$('#reload').click(function(){
					//alert('333');
          document.location.reload(true);
				});
			}else {
					player = 2;
					//console.log(tag);
		 		}
			}else{
			squareSelected.addClass(ntogle).append('<i class="fa '+nxo+'" aria-hiden="true"></i>');
			if (didWin(ntogle)) {
				$('#gameboard').hide();
				$('#reload').show();
				$('#'+vs).show();
				$('#reload').click(function(){
			//	alert('222');
          document.location.reload(true);
				});
			}else {
					player = 1;
					//console.log(tag);
		 		}
			}
	}


}); //click event
}



function randomSquare (rand){
	while ($(tag).hasClass('ex') || $(tag).hasClass('oh')){
		rand = Math.floor(Math.random()*9)+1;
		tag = ".sq" + rand.toString();
	}//whileLoop
return tag;
}; //randomSquare

function didWin(symbol){
	console.log(symbol);
	if($(".sq1").hasClass(symbol) && $(".sq2").hasClass(symbol) && $(".sq3").hasClass(symbol)
		 ||

	$(".sq4").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq6").hasClass(symbol) ||

	$(".sq7").hasClass(symbol) && $(".sq8").hasClass(symbol) && $(".sq9").hasClass(symbol) ||

	$(".sq1").hasClass(symbol) && $(".sq4").hasClass(symbol) && $(".sq7").hasClass(symbol) ||

	$(".sq2").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq8").hasClass(symbol) ||

	$(".sq3").hasClass(symbol) && $(".sq6").hasClass(symbol) && $(".sq9").hasClass(symbol) ||

	$(".sq1").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq9").hasClass(symbol) ||

	$(".sq7").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq3").hasClass(symbol) )
		{
			return true;

		}
		else if (
		($(".sq1").hasClass('ex') || $(".sq1").hasClass('oh')) &&
		($(".sq2").hasClass('ex') || $(".sq2").hasClass('oh')) &&
		($(".sq3").hasClass('ex') || $(".sq3").hasClass('oh')) &&
		($(".sq4").hasClass('ex') || $(".sq4").hasClass('oh')) &&
		($(".sq5").hasClass('ex') || $(".sq5").hasClass('oh')) &&
		($(".sq6").hasClass('ex') || $(".sq6").hasClass('oh')) &&
		($(".sq7").hasClass('ex') || $(".sq7").hasClass('oh')) &&
		($(".sq8").hasClass('ex') || $(".sq8").hasClass('oh')) &&
		($(".sq9").hasClass('ex') || $(".sq9").hasClass('oh'))   ) {
		$("#gameboard").hide();
			$('#draw').show();
			$('#reload').show();
			$('#reload').click(function(){
		//	alert('11');
        document.location.reload(true);
				});

		}
	else {
		return false;

	}
}//didWin



}); //ready func
