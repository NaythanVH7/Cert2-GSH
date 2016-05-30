var Player = function()
{
	this.x = 0;
	this.y = 0;

	this.image.src = "ship1.png";
	this.x = 300;
	this.y = 700;
	this.width = 285;
	this.height = 400;
	this.directionX = 0;
	this.directionY = 0;
	this.angularDirection = 0;
	isDead = false;

}

Player.prototype.update = function(deltaTime)
{
	
}

Player.prototype.draw = function()
{
	context.drawImage("ship1.png", 300, 700);
}