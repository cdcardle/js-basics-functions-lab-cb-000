// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
  let distance;
  if (pickupLocation >= 42) {
    distance = pickupLocation - 42;
  } else if (pickupLocation <= 41) {
    distance = 42 - pickupLocation;
  } else {
    return 'Please enter a number!'
  }
  return distance;
}

function distanceFromHqInFeet(pickupLocation) {
  let distance;
  let distanceInBlocks = distanceFromHqInBlocks(pickupLocation)
  distance = distanceInBlocks * 264;
  return distance;
}

function distanceTravelledInFeet(start, finish) {
  let distance;
  (finish >= start) ? distance = (finish - start) * 264 : distance = (start - finish) * 264
  return distance;
}

function calculatesFarePrice(start, finish) {
  let fare;
  let distance = distanceTravelledInFeet(start, finish);
}
