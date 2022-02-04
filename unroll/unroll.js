/**
 *
 * @param {array grid} squareArray
 * @returns single array unravels in a spiral going from right to left, then top to bottom, then left to right, and top to bottom
 *
 * function first maps  the movement of the x-axis and y-axis using values -1, 0, 1 into two seperate arrays
 * -1 => indicates movement to the left for x-axis or down for the white axis
 * 0 => indicates no movement along the x -axis or y-axis 
 * +1 => indicates movement to the right for x-axis or up for the y-axis
 *
 * uses values of movement to map the indices of the array element
 * x-axis = [1,1,1 ...] => [1,2,3]
 * y-axis = [0,0,0 ...] => [1,1,1]
 * 
 * 
 *
 *  y-axis and x-axis indices used to map a single array of the squareArray elements
 * x-axis = [1,1,1 ...] => [1,2,3]
 * y-axis = [0,0,0 ...] => [1,1,1]  => [...squareArray[1][1], squareArray[1][2], squareArray[1][3]...]
 * 
 *
 */

function unroll(squareArray) {

  let currOperator = -1;
  let xAxis = [];
  let yAxis = [];
  let xIndices = [];
  let yIndices = [];
  let multiplier;

  for (let i = 1; i < squareArray.length; i++) {
    multiplier = squareArray.length - i;
    xAxis.push(Array.from({ length: multiplier }).fill(0));
    xAxis.push(Array.from({ length: multiplier }).fill(currOperator));
    currOperator = currOperator === -1 ? 1 : -1;
  }

  currOperator = 1;

  for (let i = 1; i < squareArray.length; i++) {
    multiplier = squareArray.length - i;
    yAxis.push(Array.from({ length: multiplier }).fill(currOperator));
    yAxis.push(Array.from({ length: multiplier }).fill(0));

    currOperator = currOperator === -1 ? 1 : -1;
  }

  xAxis = [
    0,
    ...[Array.from({ length: squareArray.length - 1 }).fill(1), ...xAxis].flat(
      1
    ),
  ];

  yAxis = [
    0,
    ...[Array.from({ length: squareArray.length - 1 }).fill(0), ...yAxis].flat(
      1
    ),
  ];

  let currVal = 0;
  for (let i = 0; i < xAxis.length; i++) {
    currVal = currVal + xAxis[i];
    xIndices.push(currVal);
  }

  currVal = 0;
  for (let i = 0; i < yAxis.length; i++) {
    currVal = currVal + yAxis[i];
    yIndices.push(currVal);
  }

  return xIndices.map((el, i) => {
    return squareArray[yIndices[i]][el];
  });
}

module.exports = unroll;
