var music_vibes = new sound("./audio/day2.mp3");
var sound_playing = 0; 
var counter = 0; 

var intervalID = window.setInterval(changeBackground, 2000);

function changeBackground()
{
	var colors = ["#5FFF4F", "#FF8622", "#FCFF4F"]; 
	var index = counter % 3; /*3 is for the number of elements in the array */
	$("body").css("background-color", colors[index]);
	counter = counter + 1; 

}

$("#word-vibes").on("click", toggle_sound);
$(document).on("keypress", function(event)
{
	if (event.which === 32)
	{
		toggle_sound();
	}
}); 

function toggle_sound()
{
	if (!sound_playing)
	{
		music_vibes.play();
		sound_playing = 1; 
	}
	else {
		music_vibes.stop(); 
		sound_playing = 0;
	}
}

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}
