const fs = require('fs');
const color = require('colors');
const crearArchivo = async (base = 5, listar = false, hasta = 10)=>{
    
    try {

       

        let salida, consola = ''; 

        for(let i = 1; i<=hasta; i++){
           salida += `${base} x ${i} = ${base * i}\n`;
           consola += `${base} ${'x'.green} ${i} = ${base * i}\n`;
        }

        if(listar ){
            console.log("========".green);
            console.log(`Tabla del  `.green,color.blue( base ));
            console.log("========".green);
            console.log(salida, consola);
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return (`tabla-${base}.txt creado`);
    } catch (err) {
        console.log(err);
    }
           
}

module.exports ={
    crearArchivo
}