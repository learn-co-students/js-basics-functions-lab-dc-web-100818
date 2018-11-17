// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  return Math.abs(42 - block)
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(start - end) * 264
}

function calculatesFarePrice(start, destination) {
  distanceTravelled = distanceTravelledInFeet(start, destination)
  switch(true) {
    case distanceTravelled > 2500:
      return 'cannot travel that far'
      break;
    case distanceTravelled > 2000:
      return 25;
      break;
    case distanceTravelled > 400:
      return (distanceTravelled - 400) * .02
      break;
    default:
      return 0;
      break;
  }
}
