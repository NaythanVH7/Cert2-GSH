var ship = document.createElement("img");
    ship.src="images/playership.png";

var Player = function()
{
	this.x = 0;
	this.y = 0;
	this.width = 93;
	this.height = 80;
	this.directionX = 0;
	this.directionY = 0;
	this.angularDirection = 0;
}

Player.prototype.draw = function()
{
	//context.save();
			//context.translate(this.x, this.y);
			//context.rotate(this.rotation);
			context.drawImage(ship, canvas.width/2, canvas.height/2);
	//context.restore();
}

Player.prototype.update = function(deltaTime)
{
    if(keyboard.isKeyDown(keyboard.KEY_UP) == true)
		{
			this.directionY = 3;
		}

		if(keyboard.isKeyDown(keyboard.KEY_DOWN) == true)
		{
			this.directionY = -3;
		}

		if(keyboard.isKeyDown(keyboard.KEY_LEFT) == true)
		{
			this.directionX = -3;
		}

		if(keyboard.isKeyDown(keyboard.KEY_RIGHT) == true)
		{
			this.directionX = 3;
		}

		if(keyboard.isKeyDown(keyboard.KEY_SPACE) == true)
		{
			shootTimer += 0.3;
			bullets.update(deltaTime);
			console.log("bullets");
		}


    
    			//calculate sin and cos for the players current rotation
	var s = Math.sin(player.rotation);
	var c = Math.cos(player.rotation);
    
	/* 			-MOVEMENT-
					figure out what theplayers velocity will be based on the 
					current rotation (so that if the ship is moving forward,
					then it will move forward according to its rotation.
					without this, the ship woud just move up the screen when we
					pressed 'up')
					for an explanation of this formula, see http://en.wikipedia.org/wiki/Rotation_matrix
				*/
	var xDir = (this.directionX * c) - (this.directionY * s);
	var yDir = (this.directionX * s) + (this.directionY * c);
	var xVel = xDir * PLAYER_SPEED;
	var yVel = yDir * PLAYER_SPEED;
	this.x += xVel;
	this.y += yVel;
	//player.rotation += this.angularDirection * PLAYER_TURN_SPEED;

	/*if(gameOver == true)
		return;

	if (player.isDead)
	{
		gameState = STATE_GAMEOVER;
	}*/

	var dirLength = Math.sqrt(this.directionX*this.directionX 
							+ this.directionY*this.directionY);
							this.directionX = this.directionX / dirLength;
							this.directionY = this.directionY / dirLength;
}