import { dithering } from './solution.js'; 

const generator = dithering(3,3);

console.log('test');

for (let i = 0; i<25; i++)
console.log(generator.next().value,' ',i);


console.log('test2');