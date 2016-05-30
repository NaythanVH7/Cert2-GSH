var Player = function()
{
	this.x = 0;
	this.y = 0;

	this.image = document.createElement("img");
	this.x = 0;
	this.y = 0;
	this.width = 285;
	this.height = 400;
	this.directionX = 0;
	this.directionY = 0;
	this.angularDirection = 0;
	isDead = false;

	this.image.src = "images/ship1.png";
}

Player.prototype.update = function(deltaTime)
{
	
}

Player.prototype.draw = function()
{
	context.save();
			//context.translate(this.x, this.y);
			//context.rotate(player.rotation);
			context.drawImage(ship, canvas.width/2, canvas.height/2);
	context.restore();
}