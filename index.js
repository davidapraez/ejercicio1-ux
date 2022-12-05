console.log("Hola mundo")


const retirardinero = () => {
    const dineroaretirar = document.getElementById("dinero").value;
    if (validarmultiplocinco(dineroaretirar)) {
        if (dineroaretirar >= 50000 && dineroaretirar <= 1200000) {
            var mensaje = "Es posible retirar dinero";
            //document.getElementById('mensajes').innerHTML = retornarbilletes(dineroaretirar);
            console.log(retornarbilletes(dineroaretirar));
        }
    }

}

const validarmultiplocinco = (parametro) => {
    if (parametro % 5000 === 0) {
        return true;
    } else {
        return false;
    }
}

const retornarbilletes = (param) => {

    let bs50, bs20, bs10, bs5 = 0;
    c = 0;

    if (param % 50000) {
        bs50 += 1;
        return;
    }
    param = param - 50000;
    return bs50;
    //return [bs50, bs20, bs10, bs5];

}