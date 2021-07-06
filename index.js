// Add your functions here
function map(array, callback) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  return result;
}

function reduce(array, callback, startingPoint) {
  let total;
  if (startingPoint) {
    total = startingPoint;
    for (let i = 0; i < array.length; i++) {
      total = callback(array[i], total);
    }
  } else {
    total = array[0];
    for (let i = 1; i < array.length; i++) {
      total = callback(array[i], total);
    }
  }
  return total;
}