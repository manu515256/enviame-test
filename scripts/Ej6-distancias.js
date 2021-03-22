let tiempoDias = distancia =>{

    let dias = 0
    if (distancia < 100) // usando ifs ya que un switch me rompe la recursion por que llega al stack maximo
        dias = 0
    else if (distancia < 200)
        dias = 1
    else if (distancia < 300)
        dias = 1
    else if (distancia < 400)
        dias = 2
    else if (distancia < 500)
        dias = 3
    else {

        let numero1 = tiempoDias(distancia-100)
        let numero2 = tiempoDias(distancia-200)
        dias = numero1 + numero2
    }
 
    return dias
}

for (let i = 0; i < 10; ++i){
    let distancia = Math.floor(Math.random() * 2000); 
    let dias = tiempoDias(distancia)
    console.log(`Distancia ${distancia} tardara ${dias} dias en llegar`)
}
   