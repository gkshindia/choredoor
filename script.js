
const botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
const beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
let numClosedDoors = 3;
let openDoor1
let openDoor2
let openDoor3
let closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';
const startButton = document.getElementById('start')

const playDoor = () => {
    numClosedDoors --;
    if (numClosedDoors === 0){
        gameOver('win');
    }
}

const isClicked = (door) => {
    if (door.src === closedDoorPath){
        return false;
    }
    else{
        return true
    }
}

const randomChoreDoorGenerator = () => {
    choreDoor = Math.floor(Math.random() * numClosedDoors);
    if (choreDoor === 0){
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else if(choreDoor === 1){
        openDoor1 = beachDoorPath;
        openDoor2 = botDoorPath;
        openDoor3 = spaceDoorPath;
    } else if(choreDoor === 2){
        openDoor1 = spaceDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = botDoorPath;
    }
}

let doorImage1 = document.getElementById('door1');
doorImage1.onclick = () => {
    if(!isClicked(doorImage1)) {
        doorImage1.src = openDoor1;
        playDoor();
      }
}

let doorImage2 = document.getElementById('door2');
doorImage2.onclick = () => {
    if(!isClicked(doorImage2)) {
        doorImage2.src = openDoor2;
        playDoor();
      }
}

let doorImage3 = document.getElementById('door3');
doorImage3.onclick = () => {
    if(!isClicked(doorImage3)) {
        doorImage3.src = openDoor3;
        playDoor();
      }
}

const gameOver = status => {
    if (status === 'win'){
        startButton.innerHTML = 'You win! Play again?';
    }
}

randomChoreDoorGenerator();