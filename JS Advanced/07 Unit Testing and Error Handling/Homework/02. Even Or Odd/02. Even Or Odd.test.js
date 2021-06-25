let isOddOrEven = require('./02. Even Or Odd');
let {
    expect
} = require('chai');


describe('Even Or Odd', () => {
    it('input is NOT string', () => {
        expect(isOddOrEven(3)).to.be.undefined; 
        expect(isOddOrEven(true)).to.be.undefined; 
       })

       it('string returns even', () => {
        expect(isOddOrEven('aa')).to.equal('even'); 
        expect(isOddOrEven('12')).to.equal('even'); 
       })

       it('string returns odd', () => {
        expect(isOddOrEven('a')).to.equal('odd'); 
        expect(isOddOrEven('1')).to.equal('odd'); 
       })

})