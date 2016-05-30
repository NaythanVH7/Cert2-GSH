var Keyboard = function()
{
	var self = this;

	window.addEventListener('keydown', function(evt) {self.onKeyDown(evt); }, false);
	window.addEventListener('keyup', function(evt) {self.onKeyUp(evt); }, false);

	this.keyListeners = new Array();
	this.keys = new Array();

	this.KEY_SPACE = 32;
	this.KEY_LEFT = 37;
	this.KEY_UP = 38;
	this.KEY_RIGHT = 39;
	this.KEY_DOWN = 40;

	this.KEY_A = 65;
	this.KEY_D = 68;
	this.KEY_S = 83;
	this.KEY_W = 87;
	this.KEY_SHIFT = 16;
	this.KEY_ENTER = 13;

	Keyboard.prototype.onKeyDown = function(evt)
	{
		this.keys[evt.keyCode] = true;

		if(event.keyCode == KEY_UP)
		{
			Player.directionY = 3;
			console.log(Player.positionY);
		}

		if(event.keyCode == KEY_DOWN)
		{
			Player.directionY = -3;
		}

		if(event.keyCode == KEY_LEFT)
		{
			Player.directionX = -3;
			console.log(Player.positionX)
		}

		if(event.keyCode == KEY_RIGHT)
		{
			Player.directionX = 3;
		}

		if(event.keyCode == KEY_SPACE && shootTimer <= 0)
		{
			shootTimer += 0.3;
			playerShoot();
		}
	};

	Keyboard.prototype.onKeyUp = function(evt)
	{
		this.keys[evt.keyCode] = false;

		if(event.keyCode == KEY_UP)
		{
			Player.directionY = 0;
		}

		if(event.keyCode == KEY_DOWN)
		{
			Player.directionY = 0;
		}

		if(event.keycode == KEY_LEFT)
		{
			Player.directionX = 0;
		}

		if(event.keyCode == KEY_RIGHT)
		{
			Player.directionX = 0;
		}
	};

	Keyboard.prototype.isKeyDown = function(keyCode)
	{
		return this.keys[keyCode];
	};
}