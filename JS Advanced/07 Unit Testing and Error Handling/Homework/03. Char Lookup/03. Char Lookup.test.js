let lookupChar = require('./03. Char Lookup')
let {
    expect
} = require('chai');


describe('Char Lookup', () => {

    it('inputs checke', () => {
        expect(lookupChar(0, 1)).to.be.undefined ; 
        expect(lookupChar(true, 1)).to.be.undefined ; 
        expect(lookupChar('abc', 1.1)).to.be.undefined ; 
        expect(lookupChar('abc', -1.1)).to.be.undefined ; 

    })

    it('String length & index check', () => {
        expect(lookupChar("abv", -1)).to.equal('Incorrect index') ; 
        expect(lookupChar("abv", 3)).to.equal('Incorrect index') ;
        expect(lookupChar("abv", 5)).to.equal('Incorrect index') ; 

    })

    it('works as expected', () => {
        expect(lookupChar("abv", 2)).to.equal('v') ; 

    })


})