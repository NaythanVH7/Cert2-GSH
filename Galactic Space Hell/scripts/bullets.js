var bullet = document.createElement("img");
bullet.src = "images/bullet.png";

var bullets = [];

var Bullets = function()
{
	this.x = 0;
	this.y = 0;
	this.width = 5;
	this.height = 5;
	this.directionX = 0;
	this.directionY = 0;
}

Bullets.prototype.draw = function()
{
	//draw all of the bullets
	for(var i=0; i<bullets.length; i++)
	{
		context.drawImage(bullets[i].image,
							bullets[i].x - bullets[i].width/2,
							bullets[i].y - bullets[i].height/2);
	}
}

Bullets.prototype.update = function(deltaTime)
{

	var velocityX = 0;
	var velocityY = 1;

				//update the shoot timer
	shootTimer -= deltaTime;

	if (shootTimer < 0)
	{
		shootTimer = 0;
	}

				//update all the bullets
	for(var i=0; i<bullets.length; i++)
	{
		bullets[i].x += bullets[i].velocityX;
		bullets[i].y += bullets[i].velocityY;
	}

	for(var i=0; i<bullets.length; i++)
	{
				//check if the bullet has gone out of the screen boundaries
				//and if so kill it
		if(bullets[i].x < -bullets[i].width ||
							bullets[i].x > SCREEN_WIDTH ||
							bullets[i].y < -bullets[i].height ||
							bullets[i].y > SCREEN_HEIGHT)
		{
				//remove 1 element at position i
	bullets.splice(i, 1);
				/*
					because we are deleting elements for the middle
					of the array, we can only remove 1 at a time.
					so as soon as we remove 1 bullet stop.
				*/
				break;
		}
	}
}