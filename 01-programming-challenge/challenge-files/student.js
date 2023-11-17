function myFirstFunction(bike) {
    forward(bike);
}
function twiceForward(bike) { forward(bike); forward(bike); }
function thriceForward(bike) { forward(bike); forward(bike); forward(bike); }

function forward4(bike) { forward(bike); forward(bike); forward(bike); forward(bike); }

function forward5(bike) {
    let i = 5;

    while (i > 0) {
        forward(bike);
        i = i - 1;
    }
}

function forward10(bike) {
    let i = 10;

    while (i > 0) {
        forward(bike);
        i = i - 1;
    }
}

function right(bike) {
    turnRight(bike);
    forward(bike);
}
function ellShape(bike) {
    let i = 5;

    while (i > 0) {
        forward(bike);
        i = i - 1;
    }
    {
        turnRight(bike);
        forward4(bike);
    }
}

function uTurn(bike) {
    thriceForward(bike);
    turnRight(bike);
    forward10(bike);
    turnRight(bike);
    twiceForward(bike);

}
function crookedUTurn(bike) {
    twiceForward(bike);
    forward5(bike);
    turnRight(bike);
    forward4(bike);
    forward5(bike);
    turnRight(bike);
    thriceForward(bike);

}
function forwardUntilWall(bike) {
    while (!sensor(bike)) {
        forward(bike);
    }
}
function smartEllShape(bike) {
    forwardUntilWall(bike);
    turnRight(bike);
    forwardUntilWall(bike);
}
function spiral(car) {
    while (!sensor(car)) {
        forwardUntilWall(car);
        turnRight(car);
    }
}

function turnLeft(car) {
    turnRight(car);
    turnRight(car);
    turnRight(car);
}
function left(car) {
    turnLeft(car);
    forward(car);
}

function slalom(car) {
    forwardUntilWall(car);
    turnLeft(car);
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
    turnLeft(car);
    forwardUntilWall(car);
    turnLeft(car);
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
}

function leftOrRight(car) {
    turnRight(car);
    forwardUntilWall(car);
    turnLeft(car);
    forwardUntilWall(car);
    turnLeft(car);
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
}

function incompleteU(car) {
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
}
function whichDirection(car) {
    while (sensor(car)) {
        turnRight(car);
    }

    forwardUntilWall(car);
}

function sensorRight(car) {
    turnRight(car);
    let result = sensor(car);
    turnLeft(car);

    return result;
}

function firstRight(car) {
    while (sensorRight(car)) {
        forward(car);
    }

    turnRight(car);
    forwardUntilWall(car);
}
function sensorLeft(car) {
    turnLeft(car);
    let result = sensor(car);
    turnRight(car);

    return result;
}

function firstLeft(car) {
    while (sensorLeft(car)) {
        forward(car);
    }

    turnLeft(car);
    forwardUntilWall(car);
}
function zigZag(car) {
    firstRight(car);
    turnLeft(car);
    forward(car);
    firstLeft(car);
}