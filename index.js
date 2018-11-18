function distanceFromHqInBlocks(street) {
  return Math.abs(street - 42)
}

function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street)* 264
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(start - end) * 264
}

function calculatesFarePrice(start, end) {
  let distance = distanceTravelledInFeet(start, end);
  if (distance < 400) {
    return 0
  } else if (distance > 2500) {
      return `cannot travel that far`
  } else if (distance > 2000) {
      return 25
  } else if (distance > 400) {
      return (distance - 400) * .02
  }
}
