function comprar() {
    let gansito = false;
    let chocoBar = false;
  
    if (gansito === true) {
      alert("toma tu gansito");
    }
    // ||= ó / &&= Y "Expresiones Que Se Expresan El JavaScript"
    // = ("Igual") === (Comparacion) !== (" Diferente/negar")
  
    if (chocoBar === true && gansito !== true) {
      alert("Toma Tu Barra De Chocorramo");
    }
  
    if (chocoBar === false && gansito === false) {
      alert("No Hay Ninguno");
    }
  }