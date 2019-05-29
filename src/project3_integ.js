if (typeof console == "undefined") {
  var console = { log: function(obj) {} };
}

// Geogebra:
// f(x) = (2 * sin(3 * x) + 5) / (4 + (3 * cos(4 * x)))
// a = integral[f(x), 0, pi]
// a = 7
function exampleFunction2(x) {
  //return ((5 * Math.cos(2 * x)) / Math.sqrt(1 + x * x)) - 
  //  x * Math.exp(-x * x) * Math.sin(3 * x);
  return (2 * Math.sin(3 * x) + 5) / (4 + (3 * Math.cos(4 * x)));
}

function integrateTrapezListY(listY, startX, stopX, numOfX) {
  var deltaX = (stopX - startX) / (numOfX - 1);
  var area = 0.0;
  for (var index = 0; index < numOfX - 1; index++) {
    area += (listY[index] + listY[index + 1]) / 2;
  }
  area *= deltaX;
  return area;
}

function integrateSimpsonListY(listY, startX, stopX, numOfX) {
  var deltaX = (stopX - startX) / (numOfX - 1);
  var area = listY[0];
  for (var index = 1; index < numOfX - 1; index++) {
    if (index % 2 == 0) {
      area += 2 * listY[index];
    }
    else {
      area += 4 * listY[index];
    }
  }
  area += listY[numOfX - 1];
  area *= deltaX / 3;
  return area;
}
