// Code your solution in this file!
function distanceFromHqInBlocks (street_num) {
  const Hq = 42
  return Math.abs(Hq - street_num)
};

function distanceFromHqInFeet (street_num) {
  blocks = distanceFromHqInBlocks(street_num)
  return blocks * 264
};

function distanceTravelledInFeet (start, end) {
  blocks = Math.abs(start - end)
  return blocks * 264
};

function calculatesFarePrice (start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return ((distance - 400) * 0.02);
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    };
};
