// Po = a população incial de pessoas infectadas
// X = quantidade de pessoas paras as quais um paciente infectado pode transmitir
// t = tempo percorrido

const po = 1000;
const x = 4;
const t = 100 / 7;

// formula
// P = Po * X ^ t/7

const p = po * Math.pow(x, t)
console.log(p);
