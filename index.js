// Code your solution in this file!
function distanceFromHqInBlocks(pickup_location) {
  let distance;
  if (pickup_location >= 42) {
    distance = pickup_location - 42;
  } else if (pickup_location <= 41) {
    distance = 42 - pickup_location;
  } else {
    return 'Please enter a number!'
  }
  return distance;
}