if (typeof console == "undefined") {
  var console = { log: function(obj) {} };
}

describe("project2_diff", function() {
  
  var numOfX = 20;
  var startX = -3.0 * Math.PI;
  var stopX = 3.0 * Math.PI;
  var graphFunc = exampleFunction1;

  it("populateListX", function() {
    var listX = populateListX(startX, stopX, numOfX);
    
    //console.log(listX);
    listX.length.should(eql, numOfX);
    listX.slice(0, 1).should(eql, startX);
    listX.slice(-1).should(eql, stopX);
  });
  
  it("populateListY", function() {
    var listX = populateListX(startX, stopX, numOfX);
    var listY = populateListY(listX, graphFunc);
    
    //console.log(listY);
    listY.length.should(eql, numOfX);
    listY.slice(0, 1).should(eql, graphFunc(startX));
  });
  
  it("differentiateListY", function() {
    var listX = populateListX(startX, stopX, numOfX);
    var listY = populateListY(listX, graphFunc);
    var listDiffY = differentiateListY(listY, startX, stopX, numOfX);
    
    //console.log(listDiffY);
    listDiffY.length.should(eql, numOfX);
  });
  
  it("zipLists", function() {
    zipLists([1, 2], [3, 4]).should(beSimilarTo, [[1, 3], [2, 4]]);
    zipLists([1, 2], [3]).should(beSimilarTo, [[1, 3], [2, null]]);
    zipLists([1], [3, 4]).should(beSimilarTo, [[1, 3], [null, 4]]);
    
    // Problem mit 0 == false.
    zipLists([0, 2], [3, 4]).should(beSimilarTo, [[0, 3], [2, 4]]);
  });
  
});
