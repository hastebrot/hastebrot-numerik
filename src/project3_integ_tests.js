if (typeof console == "undefined") {
  var console = { log: function(obj) {} };
}

describe("project3_integ", function() {
  
  var numOfX = 20;
  var startX = 0;
  var stopX = Math.PI;
  var graphFunc = exampleFunction2;
  var graphFuncArea = 7;
  
  it("integrateTrapezListY", function() {
    var listX = populateListX(startX, stopX, numOfX);
    var listY = populateListY(listX, graphFunc);
    var areaListY = integrateTrapezListY(listY, startX, stopX, numOfX);
    
    var accuracy = 0.1;
    areaListY.should(beGreaterThan, graphFuncArea - accuracy);
    areaListY.should(beLessThan, graphFuncArea + accuracy);
  });
  
  it("integrateSimpsonListY", function() {
    var listX = populateListX(startX, stopX, numOfX);
    var listY = populateListY(listX, graphFunc);
    var areaListY = integrateSimpsonListY(listY, startX, stopX, numOfX);
    
    var accuracy = 0.1;
    areaListY.should(beGreaterThan, graphFuncArea - accuracy);
    areaListY.should(beLessThan, graphFuncArea + accuracy);
  });

});
