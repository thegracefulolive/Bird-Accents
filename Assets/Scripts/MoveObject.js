#pragma strict

public var xSpeed : int;
public var ySpeed : int;

public var randomX : boolean = false;
public var minXSpeed : int = 100;
public var maxXSpeed : int = 200;

public var randomY : boolean = false;
public var minYSpeed : int = 100;
public var maxYSpeed : int = 200;

function Start () {

	if(randomX)
		xSpeed = Random.Range (minXSpeed,maxXSpeed);

	if(randomY)
		ySpeed = Random.Range (minYSpeed,maxYSpeed);	

		var newSpeed: Vector2;
		newSpeed.x = xSpeed;
		newSpeed.y = ySpeed;

	GetComponent.<Rigidbody2D>().AddForce(newSpeed);
}

