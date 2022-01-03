function conversion(degCel) {

  let degFar = degCel * (9 / 5) + 32;

  if(typeof degCel === 'number') {
    return degFar;
  } else {
    return "Données en entrée incorrectes"
  }
}

console.log(conversion(10));
