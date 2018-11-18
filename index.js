// Code your solution in this file!
function distanceFromHqInBlocks(num){
      return Math.abs(num - 42)
}

function distanceFromHqInFeet(num){
  return distanceFromHqInBlocks(num) * 264;
}

function distanceTravelledInFeet(a, b){
  return Math.abs((b - a) * 264);
}

function calculatesFarePrice(a, b){
  let distance = distanceTravelledInFeet(a, b);
    if (distance <= 400){
      return 0;
    }
    else if (distance > 400 && distance <= 2000){
      return (distance - 400) * .02;
    }
    else if (distance > 2000 && distance <= 2500){
      return 25;
    }
    else if (distance > 2500) {
      return "cannot travel that far";
    }
}
