const express=require('express')
const app=express()
const {rate,calcFare}=require('./fareUtils')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/calcFare',express.static(__dirname+'/public'))

app.post('/calcFare',(req,res)=>{
    let km=parseInt(req.body.km)
    let min=parseInt(req.body.min)
   let fare=calcFare(km,min)
   res.send({fare}) 
})

app.get('/rate',(req,res)=>{
    res.send({rate})
})

module.exports={app}