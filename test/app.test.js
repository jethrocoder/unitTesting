const mocha=require('mocha')
const chai=require('chai')
const request=require('request')
const { app }= require('../app')
const expect=chai.expect

let server;
describe('tests for app module',()=>{
    before((done)=>{
        server=app.listen(4444,done)
    })

    it('testing rate get request',(done)=>{
        request.get('http://localhost:4444/rate',(err,res,body)=>{
            let rateObj=JSON.parse(body)
            expect(rateObj.rate.fixed).to.equal(50)
            expect(rateObj.rate.perMin).to.equal(2)
            done()
        })
    })

    it('testing calcFare post request',(done)=>{
        request.post({url:'http://localhost:4444/calcFare',form:{km:5,min:20}},(err,res,body)=>{
            
            const{fare}=JSON.parse(body)
            expect(fare).to.equal(60)
            done()
            
        })
    })

  

    after(()=>{
        server.close()

    })
})
