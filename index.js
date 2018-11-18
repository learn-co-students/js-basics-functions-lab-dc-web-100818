// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  if (block > 42) {
    return block - 42
  } else {
    return 42 - block
  }
}

function distanceFromHqInFeet(block) {
  return  distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet(a, b) {
  if (a>b) {
    return (a-b) * 264
  } else{
    return (b-a) * 264
  }
}

function calculatesFarePrice(a, b) {
  switch (true) {
    case distanceTravelledInFeet(a, b) <= 400:
      return 0
    case  distanceTravelledInFeet(a, b) > 400 && distanceTravelledInFeet(a, b) <= 2000:
      return (distanceTravelledInFeet(a, b) - 400) * 0.02;
    case distanceTravelledInFeet(a, b) > 2000 && distanceTravelledInFeet(a, b) < 2500:
      return 25;
    default:
      return 'cannot travel that far'
  }
}
