let {CelciusFarenheit, kilogramosLibras, kilometrosMillas, piesPulgadas, pulgadasCentimetros} = require("./conversiones.js")
let fs = require("fs");

const resFarenheit = CelciusFarenheit(12)
console.log("Los grados a farenheit son: " + resFarenheit);

const resLibras = kilogramosLibras(50)
console.log("Los kilogramos a libras son: " + resLibras);

const resMillas = kilometrosMillas(89)
console.log("Los kilometros a millas son: " + resMillas);

const resPulgadas = piesPulgadas(2)
console.log("Los pies a pulgadas son: " + resPulgadas);

const resCm = pulgadasCentimetros(10)
console.log("Las Pulgadas a centimetros son: " + resCm);

fs.writeFile("./pruebaConversiones.txt",
`prueba funcion freelance
Los grados a farenheit son: ${resFarenheit}
Los kilogramos a libras son: ${resLibras}
Los kilometros a millas son:: ${resMillas}
Los pies a pulgadas son: ${resPulgadas}
Las Pulgadas a centimetros son: ${resCm}`,
function (error){
    if(error){
        console.log(error) 
    }else {
            console.log("codigo terminado");
    }
})

