var assert = require("assert");
var discountCalculator = require("../discount");
describe("discount function", function(){
it("discount should return 0 with no args ", function(){
var discount = discountCalculator.discount();
assert.equal(discount, 0, discount + "");
});
});