const numeros = [1,2,3,4,5,6,7,8,9,10];

const num1 = [0];
const num3 = [2];
const num5 = [4];

const [,num2, ,num4, ,num6,num7,num8,num9,num10] = numeros

const mascota = {
    nombre:'Boni',
    tipoDeMascota:'perro',
    color:'Dorado',
    raza:'Golden retriever'
}

const {nombre, tipoDeMascota, color, raza} = mascota

console.log(`hola les presento a mi mascota su nombre es: ${nombre}, es un hermoso ${tipoDeMascota}, de color:${color} y su raza es:${raza}.`)