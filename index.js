// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  if (block > 42) {
    return block - 42;
  } else {
    return 42 - block;
  }
}

function distanceFromHqInFeet(blocksAway) {
  blocks = distanceFromHqInBlocks(blocksAway);
  distanceInFeet = blocks * 264
  return distanceInFeet
}

function distanceTravelledInFeet(a, b) {
  if (a > b) {
    return (a - b) * 264;
  } else {
    return (b - a) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  distance = distanceTravelledInFeet(start, destination)
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else if (distance > 2500) {
    return 'cannot travel that far';
  }
}
