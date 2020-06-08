let btn=$('#btn')

btn.click(()=>{
    let km=$('#km').val()
    let min=$('#min').val()
    let res=$('#result')
    $.post('/calcFare',{km,min},(data)=>{
        res.text(`${data.fare}`)
    })
})
    
