function distanceFromHqInBlocks(location) {
  hq = 42
  if (location > hq) {
    blocks = location - hq;
  } else if (location < hq) {
    blocks = hq - location;
  }
  return blocks;
}

function distanceFromHqInFeet(location) {
   return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(start, end) {
  if (start < end) {
    blocks = end - start;
  } else if (start > end){
    blocks = start - end;
  }
  return blocks * 264;
}

function calculatesFarePrice(start, destination) {
   distance = distanceTravelledInFeet(start, destination)
   if (distance < 400) {
     return 0;
   } else if (distance > 2500) {
     return 'cannot travel that far';
   } else if (distance > 2000) {
     return 25;
   } else if (distance > 400) {
     return (distance - 400) * .02;
   }
}
