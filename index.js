// Code your solution in this file!

function distanceFromHqInBlocks(pickuplocation) {
 let blocks;
 if(pickuplocation >= 42) {
   blocks = pickuplocation - 42;
 } else if (pickuplocation < 42) {
   blocks = 42 - pickuplocation;
 }
 return blocks;
}

function distanceFromHqInFeet(distance) {
  let feet;
  feet = distanceFromHqInBlocks(distance) * 264;
  return feet;
}

function distanceTravelledInFeet(start, end) {
  let distance;
  if (start > end) {
    distance = (start - end) * 264;
  }
  else if (start < end) {
    distance = (end - start) * 264;
  }
  return distance
}

function calculatesFarePrice(start, destination) {
  let fare;
  distanceInFeet = distanceTravelledInFeet(start, destination)
  if (distanceInFeet < 400) {
    fare = 0;
  }
  else if (distanceInFeet > 400 && distanceInFeet < 2000) {
    fare = (distanceInFeet - 400) * .02;
  }
  else if (distanceInFeet > 2000) {
    fare = 25;
    if (distanceInFeet > 2500) {
      return 'cannot travel that far';
    }
  } 
  return fare;
}