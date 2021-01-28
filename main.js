let afirmacion=false;
let negacion=true;

console.log("operador and &&");
console.log(`${afirmacion} && ${negacion} = ${afirmacion&&negacion}`);
console.log(`${negacion} && ${afirmacion} = ${negacion&&afirmacion}`);
console.log(`${negacion} && ${negacion} = ${negacion&&negacion}`);
console.log(`${afirmacion} && ${afirmacion} = ${afirmacion&&afirmacion}`);

console.log("operador or ||");
console.log(`${afirmacion} || ${negacion} = ${afirmacion||negacion}`);
console.log(`${negacion} || ${afirmacion} = ${negacion||afirmacion}`);
console.log(`${negacion} || ${negacion} = ${negacion||negacion}`);
console.log(`${afirmacion} || ${afirmacion} = ${afirmacion||afirmacion}`);

console.log("operador not !");
console.log(`${afirmacion} = ${!afirmacion}`);
console.log(`${negacion} = ${!negacion}`);