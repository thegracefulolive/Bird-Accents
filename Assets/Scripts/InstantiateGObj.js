#pragma strict

public var gObj: GameObject;

public var MinX:float = 0f;
public var MaxX:float = 0f;

public var MinY:float = 0f;
public var MaxY:float = 0f;

public var StartDelay : float = 0;
public var InstantiateDelay: float = 0;




function Start () {
    InvokeRepeating('createRandom', StartDelay, InstantiateDelay);
}

function createRandom () {
    var x : float;
    var y : float;
    
    x = Random.Range(MinX, MaxX);
    y = Random.Range(MinY, MaxY);
    
    
    Instantiate(gObj, Vector3(x, y, 0), Quaternion.identity);
    
}  