// Code your solution in this file!
function distanceFromHqInBlocks(num) {
  if (num > 42) {
    return num - 42;
  } else {
    return 42 - num;
  }
}

function distanceFromHqInFeet(num) {
  return distanceFromHqInBlocks(num) * 264;
}

function distanceTravelledInFeet(num1, num2) {
  if (num1 > num2) {
    return (num1 - num2) * 264;
  } else {
    return (num2 - num1) * 264;
  }
}

function calculatesFarePrice(num1, num2) {
  let distance = distanceTravelledInFeet(num1, num2)
  if (distance < 400) {
    return 0;
  } else if (400 < distance && distance < 1999){
    return (distance - 400) * 0.02;
  } else if (2000 < distance && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
