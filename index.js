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

function distanceTravelledInFeet(start, destination) {
  let distance;
  if (destination >= start) {
    distance = (destination - start) * 264
  } else if (start > (destination - 1)) {
    distance = (start - destination) *264
  }
  return distance;
}

function calculatesFarePrice(start, destination) {
  let fare;
  switch (fare)
}
