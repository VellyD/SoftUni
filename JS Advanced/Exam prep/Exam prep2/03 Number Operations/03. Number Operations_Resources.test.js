 let numberOperations = require('./03. Number Operations_Resources')
 let {
     expect,
     assert
 } = require('chai');
 const {
     numberChecker
 } = require('./03. Number Operations_Resources');



 describe("Number Operations", function () {

     it("powNumber(num) ", function () {
         expect(numberOperations.powNumber(2)).to.equal(4);
         expect(numberOperations.powNumber(-2)).to.equal(4);
         expect(numberOperations.powNumber('2')).to.equal(4);
         
     });


     it("numberChecker(input)  ", function () {
         expect(() => numberOperations.numberChecker('123b')).to.throw(Error, 'The input is not a number!')
         expect(() => numberOperations.numberChecker('b')).to.throw(Error, 'The input is not a number!')
         expect(() => numberOperations.numberChecker(undefined)).to.throw(Error, 'The input is not a number!')

        
         expect(numberOperations.numberChecker(99)).to.equal('The number is lower than 100!');
         expect(numberOperations.numberChecker('1')).to.equal('The number is lower than 100!');
         expect(numberOperations.numberChecker(-99)).to.equal('The number is lower than 100!');
         expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!');
         expect(numberOperations.numberChecker(102.11)).to.equal('The number is greater or equal to 100!');
         
        });
        
        
        it("sumArrays(array1, array2)   ", function () {
         expect(numberOperations.sumArrays([1], [1])).to.deep.equal([2])
         expect(numberOperations.sumArrays([-1], [-1])).to.deep.equal([-2])
         expect(numberOperations.sumArrays([1.1], [1.1])).to.deep.equal([2.2])
         expect(numberOperations.sumArrays([1, 2], [1, 2])).to.deep.equal([2, 4])
         expect(numberOperations.sumArrays(['a'], ['s'])).to.deep.equal(['as'])
         expect(numberOperations.sumArrays([], [1])).to.deep.equal([1])
         expect(numberOperations.sumArrays([1], [])).to.deep.equal([1])

     });

 });