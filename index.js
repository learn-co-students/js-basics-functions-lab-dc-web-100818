// Code your solution in this file!

function distanceFromHqInBlocks(block) {
  if (block > 42) {
    return (block - 42);
  }
  else if (block < 42){
    return (42 - block);
  }
}

function distanceFromHqInFeet(block) {
  return (distanceFromHqInBlocks(block) * 264);
}

function distanceTravelledInFeet(start, end) {
  if (start > end) {
    return ((start - end) * 264);
  }
  else if (start < end) {
    return ((end - start) * 264);
  }
}

function calculatesFarePrice(start, end) {
  let distance = distanceTravelledInFeet(start, end);

  if (distance < 400) {
    return 0
  }
  else if (distance > 400 && distance < 2000) {
    return ((distance - 400) * 0.02)
  }
  else if (distance > 2000 && distance < 2500) {
    return 25
  }
  else {
    return 'cannot travel that far'
  }
}
