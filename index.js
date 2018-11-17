// Code your solution in this file!
function distanceFromHqInBlocks(value) {
  return Math.abs(value - 42);
}

function distanceFromHqInFeet(value) {
  return distanceFromHqInBlocks(value) * 264;
}

function distanceTravelledInFeet(pointA, pointB) {
  return Math.abs((pointB - pointA) * 264);
}

function calculatesFarePrice(pointA, pointB) {
  let distance = distanceTravelledInFeet(pointA, pointB);
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance < 2000){
      return (distance - 400)  * .02;
    } else if (distance > 2000 && distance < 2500){
      return 25;
    } else if (distance > 2500) {
      return "cannot travel that far";
    }
}
