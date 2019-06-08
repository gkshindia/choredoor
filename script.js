
const botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
const beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
const numClosedDoors = 3;
let openDoor1
let openDoor2
let openDoor3

const randomChoreDoorGenerator = () =>{
    choreDoor = Math.floor(Math.random() * numClosedDoors);
    if (choreDoor === 0){
        openDoor1 = botDoorPath;
    } else if(choreDoor === 1){
        openDoor2 = botDoorPath;
    } else if(choreDoor === 2){
        openDoor3 = botDoorPath;
    }
}

let doorImage1 = document.getElementById('door1');
doorImage1.onclick = () => {
  doorImage1.src = botDoorPath;
}

let doorImage2 = document.getElementById('door2');
doorImage2.onclick = () => {
  doorImage2.src = beachDoorPath;
}

let doorImage3 = document.getElementById('door3');
doorImage3.onclick = () => {
  doorImage3.src = spaceDoorPath;
}