const mascota = {
   raza: 'golden',
   color: 'dorado',
   edad: 3,
   propietario: 'Jorge',
};

console.log(`mascota edad :`, mascota.edad);

// destructuracion de objeto y trnasfiere todos sus valores a las variables
const { raza, color, edad, propietario } = mascota;

console.log(`edad`, edad);
console.log(`color`, color);

// destructuracion de array
const camareras = ['juanita', 'carla', 'milenka', 'anita'];

const [cam1, cam2, cam3, cam4] = camareras;
