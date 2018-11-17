// Code your solution in this file!

function distanceFromHqInBlocks(pickup) {
  return Math.abs(42 - pickup)
}

function distanceFromHqInFeet(pickup) {
  const blocks = distanceFromHqInBlocks(pickup)
  return blocks * 264
}

function distanceTravelledInFeet(start, end) {
  const blocks = Math.abs(start - end)
  return blocks * 264
}

function calculatesFarePrice(start, destination) {
  const feet = distanceTravelledInFeet(start, destination)
  if (feet < 400) {
    return 0
  } else if ( 400 <= feet && feet <= 2000) {
    return (feet - 400) * .02
  } else if (2000 < feet && feet <= 2500) {
    return 25
  } else {
    return 'cannot travel that far'
  }
}
