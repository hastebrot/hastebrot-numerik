if (typeof console == "undefined") {
  var console = { log: function(obj) {} };
}

// TODO:
// (01:39:53) hastebrot: ich glaube ich mach daraus erstmal eine klasse / objekt
// (01:40:15) hastebrot: var properties = {startX: 0, stopX: Math.PI, numOfX: 50}

function exampleFunction1(x) {
  return (Math.pow(x, 3) + (2 * Math.pow(x, 2)) - (3 * x) + 4) 
    * Math.cos(2 * x);
}

function populateListX(startX, stopX, numOfX) {
  var deltaX = (stopX - startX) / (numOfX - 1);
  var listX = [];
  for (var index = 0; index < numOfX; index++) {
    var x = startX + (deltaX * index);
    listX.push(x);
  }
  return listX;
}

function populateListY(listX, func) {
  var listY = [];
  $.each(listX, function(index, x) {
    listY.push(func(x));
  });
  return listY;
}

function differentiateListY(listY, startX, stopX, numOfX) {
  var deltaX = (stopX - startX) / (numOfX - 1);
  var listDiffY = [];
  
  listDiffY.push((listY[1] - listY[0]) / deltaX);
  for (var index = 1; index < numOfX - 1; index++) {
    listDiffY.push((listY[index + 1] - listY[index - 1]) / (2 * deltaX));
  }
  listDiffY.push((listY[numOfX - 1] - listY[numOfX - 2]) / deltaX);
  
  return listDiffY;
}

function zipLists(listA, listB) {
  var maxLength = listA.length >= listB.length ? listA.length : listB.length;
  var zippedList = [];
  for (var index = 0; index < maxLength; index++) {
    var valueA = typeof listA[index] != "undefined" ? listA[index] : null;
    var valueB = typeof listB[index] != "undefined" ? listB[index] : null;
    zippedList.push([valueA, valueB]);
  }
  return zippedList;
}
