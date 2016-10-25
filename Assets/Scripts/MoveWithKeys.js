#pragma strict
public var speed : float = 10f;

function Update () {
	var move = Vector3(Input.GetAxis("Horizontal"), Input.GetAxis("Vertical"),0);
	transform.position += move * speed * Time.deltaTime;
	}
