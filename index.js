//Primer punto
const retirardinero = () => {
  const dinero = parseInt(document.getElementById("dinero").value, 10);
  if (dinero >= 50000 && dinero <= 1200000) {
    if (validarmultiplocinco(dinero)) {
      document.getElementById("mensajes").innerHTML = retornarbilletes(dinero);
    } else {
      document.getElementById("mensajes").innerHTML =
        "No es posible retirar dinero, ya que la cantidad no es multiplo de $5000";
    }
  } else {
    document.getElementById("mensajes").innerHTML =
      "La cantidad de dinero debe estar entre $50.000 y $1.200.000";
  }
};
const validarmultiplocinco = (parametro) => {
  if (parametro % 5000 === 0) {
    return true;
  }
  return false;
};
const retornarbilletes = (param) => {
  let bs50 = 0,
    bs20 = 0,
    bs10 = 0,
    bs5 = 0;
  while (param != 0) {
    if (param - 50000 >= 0) {
      bs50 += 1;
      param -= 50000;
    } else if (param - 20000 >= 0) {
      bs20 += 1;
      param -= 20000;
    } else if (param - 10000 >= 0) {
      bs10 += 1;
      param -= 10000;
    } else if (param - 5000 >= 0) {
      bs5 += 1;
      param -= 5000;
    }
  }
  let cadena = `Hay ${bs50} billetes de $50.000\n`;
  cadena += `Hay ${bs20} billetes de $20.000\n`;
  cadena += `Hay ${bs10} billetes de $10.000\n`;
  cadena += `Hay ${bs5}  billetes de $5.000\n`;
  return cadena;
};

//Segundo punto
const calcularGrados= () => {

     const tiempo = document.getElementById("horas-minutos").value.split(":");
    const hora = parseInt(tiempo[0], 10) * 15;
    const minutos = parseInt(tiempo[1], 10) * 0.25;
    const segundos = parseInt(tiempo[2], 10) * 0.00416666667;
    const Grados = hora + minutos + segundos;
    const totalMinutos = Grados * 60;
  
    const totalSegundos = totalMinutos * 60;
    let retorno = `${Math.round(Grados)}°${Math.round(totalMinutos)}'${Math.round(
      totalSegundos
    )}''`;
    if (retorno != "") {
      document.getElementById("mensajes-horas").innerHTML = retorno;
    } else {
      document.getElementById("mensajes-horas").innerHTML =
        "Hubo un error al calcular la hora";

  }

};

//3 punto
const calcularSumaResta = (
  horas,
  minutos,
  segundos,
  segundosSuma,
  operacion
) => {
  var segundostotales = horas * 3600 + minutos * 60 + segundos;
  if (operacion === "sumar") {
    segundostotales += segundosSuma;
  } else if (operacion === "restar") {
    segundostotales -= segundosSuma;
  }
  var horasResultado = Math.floor(segundostotales / 3600);
  var minutosResultado = Math.floor((segundostotales % 3600) / 60);
  var segundosResultado = segundostotales % 60;
  return {
    horas: horasResultado,
    minutos: minutosResultado,
    segundos: segundosResultado,
  };
};

const calcularSegundos = () => {
  var horas = parseInt(document.getElementById("horas").value);
  var minutos = parseInt(document.getElementById("minutos").value);
  var segundos = parseInt(document.getElementById("segundos").value);

  if (horas <= 24 || horas >= 0) {
    if (minutos <= 60 || minutos >= 0) {
      if (segundos >= 0 || segundos <= 60) {
        var segundosSuma = parseInt(
          document.getElementById("segundos-suma").value
        );
        var operacion = document.getElementById("operacion").value;
        var resultado = calcularSumaResta(
          horas,
          minutos,
          segundos,
          segundosSuma,
          operacion
        );
        document.getElementById("mensajes-suma-segundos").innerHTML =
          resultado.horas +
          " h " +
          resultado.minutos +
          " m " +
          resultado.segundos +
          " s";
      } else {
        document.getElementById("mensajes-suma-segundos").innerHTML =
          "El rango de los segundos debe estar entre 0 a 60 segundos";
      }
    } else {
      document.getElementById("mensajes-suma-segundos").innerHTML =
        "El rango de los minutos debe estar entre 0 a 60 minutos";
    }
  } else {
  }
};
