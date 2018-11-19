// Code your solution in this file!
function distanceFromHqInBlocks(someVal) {
  if (someVal > 42) {
    return someVal - 42;
  } else {
    return 42 - someVal;
  }
}

function distanceFromHqInFeet(someVal) {
  return distanceFromHqInBlocks(someVal) * 264;
}

function distanceTravelledInFeet(start, end) {
  if (start > end) {
    return (start - end) * 264;
  } else {
    return (end - start) * 264;
  }
}

function calculatesFarePrice(start, end) {
  let distance = distanceTravelledInFeet(start, end);
  if (distance < 400) {
    return 0;
  } else if (distance > 400 && distance < 2000) {
    return (distance - 400) * .02;
  } else if (distance > 2000 && distance < 2500){
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
