var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

var startFrameMillis = Date.now();
var endFrameMillis = Date.now();

// This function will return the time in seconds since the function 
// was last called
// You should only call this function once per frame
function getDeltaTime()
{
	endFrameMillis = startFrameMillis;
	startFrameMillis = Date.now();

		// Find the delta time (dt) - the change in time since the last drawFrame
		// We need to modify the delta time to something we can use.
		// We want 1 to represent 1 second, so if the delta is in milliseconds
		// we divide it by 1000 (or multiply by 0.001). This will make our 
		// animations appear at the right speed, though we may need to use
		// some large values to get objects movement and rotation correct
	var deltaTime = (startFrameMillis - endFrameMillis) * 0.001;
	
		// validate that the delta is within range
	if(deltaTime > 1)
		deltaTime = 1;
		
	return deltaTime;
}

var SCREEN_WIDTH = canvas.width;
var SCREEN_HEIGHT = canvas.height;

var ASTEROID_SPEED = 1;
var PLAYER_SPEED = 1;
var BULLET_SPEED = 1.5;

var fps = 0;
var fpsCount = 0;
var fpsTime = 0;

var KEY_SPACE = 32;
var KEY_LEFT = 37;
var KEY_UP = 38;
var KEY_RIGHT = 39;
var KEY_DOWN = 40;
var KEY_A = 65;
var KEY_D = 68;
var KEY_S = 83;
var KEY_W = 87;
var KEY_SHIFT = 16;
var KEY_ENTER = 13;

var score = 0;

var gameOver = false;

var spawnTimer = 1;

var shootTimer = 0.3;
var speed = 10;

var shoot = false;

var bullets = [];

var player = new Player();
var keyboard = new Keyboard();
var bullets = new Bullets();

var spacebg = document.createElement("img");
    spacebg.src = "images/spacebg1.jpg";

var background = [];
for(var y=0; y<15; y++)
    {
        background[y] = [];
        for(var x=0; x<20; x++)
            background[y][x] = spacebg;
    }

function drawBackground()
{
    for(var y=0; y<15; y++)
    {
        for(var x=0; x<20; x++)
        {
            context.drawImage(background[y][x], x*600, y*800);
        }
    }
    context.fillStyle = "#FFFFFF";
	context.font = "24px Arial";
	context.fillText("" + score, 10, 30);
}

function run(deltaTime)
{
	context.fillStyle = "#ccc";
	context.fillRect(0, 0, canvas.width, canvas.height);

	var deltaTime = getDeltaTime();

  drawBackground();
    
    
    player.draw();
    player.update(deltaTime);

    bullets.draw();
    bullets.update(deltaTime);
}

//-------------------- Don't modify anything below here


// This code will set up the framework so that the 'run' function is called 60 times per second.
// We have a some options to fall back on in case the browser doesn't support our preferred method.
(function() {
  var onEachFrame;
  if (window.requestAnimationFrame) {
    onEachFrame = function(cb) {
      var _cb = function() { cb(); window.requestAnimationFrame(_cb); }
      _cb();
    };
  } else if (window.mozRequestAnimationFrame) {
    onEachFrame = function(cb) {
      var _cb = function() { cb(); window.mozRequestAnimationFrame(_cb); }
      _cb();
    };
  } else {
    onEachFrame = function(cb) {
      setInterval(cb, 1000 / 60);
    }
  }
  
  window.onEachFrame = onEachFrame;
})();

window.onEachFrame(run);