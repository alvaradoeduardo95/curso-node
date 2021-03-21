const argv = require('yargs')
.option('b',{
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: "Es la base de la tabla de multiplicar"
})
.check( (argv, options) => {
     if(isNaN(argv.b)){
         throw 'La base debe ser un numero entero'
     }
     return true;
})
.option('l',{
    alias: 'listar',
    type: 'boolean',
    demandOption: true,
    default: false,
    describe: 'Muestra la tabla de multiplicar'
})
.option('h',{
    alias: 'hasta',
    type: 'number',
    default: false,
    describe: 'Este es el numero hasta donde quieres la tabla'
})
.argv;

module.exports = argv;