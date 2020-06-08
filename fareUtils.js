let rate={
    fixed:50,
    minKm:5,
    perKm:10,
    minMin:15,
    perMin:2,
}

function calcFare(km,min){

    let fare=rate.fixed
    
    fare +=(km > rate.minKm) ? ((km-rate.minKm)*10) :0
    fare += (min > rate.minMin) ? ((min-rate.minMin)*2):0
    return fare
}

module.exports={
    rate,calcFare
}