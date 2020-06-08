const mocha=require('mocha')
const chai= require('chai')
const expect=chai.expect
const { rate, calcFare } = require('../fareUtils')

describe('tests for fareUtils module',()=>{
    it('tests when km is less than or equal to 5 and min is less than or equal to 15',()=>{
        expect(calcFare(0,0)).to.equal(50)
        expect(calcFare(5,9)).to.equal(50)
        expect(calcFare(3,10)).to.equal(50)
        expect(calcFare(3,15)).to.equal(50)
        expect(calcFare(5,15)).to.equal(50)
    })

    it('tests when km is greater than 5',()=>{
        expect(calcFare(6,0)).to.equal(60)
        expect(calcFare(7,9)).to.equal(70)
        expect(calcFare(8,10)).to.equal(80)
        expect(calcFare(9,16)).to.equal(92)
        expect(calcFare(10,17)).to.equal(104)
    })

    it('tests when min is greater than 15',()=>{
        expect(calcFare(3,16)).to.equal(52)
        expect(calcFare(4,17)).to.equal(54)
        expect(calcFare(5,18)).to.equal(56)
        expect(calcFare(6,19)).to.equal(68)
        expect(calcFare(7,20)).to.equal(80)
    })
})






