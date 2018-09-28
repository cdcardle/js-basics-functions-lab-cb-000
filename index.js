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
  return distance;
}
