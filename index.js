const retirardinero = () => {
    const dinero=parseInt((document.getElementById("dinero").value),10);
    if (dinero >= 50000 && dinero <= 1200000) {
        if (validarmultiplocinco(dinero)) {
            document.getElementById('mensajes').innerHTML = retornarbilletes(dinero);
        }else{
            document.getElementById('mensajes').innerHTML="No es posible retirar dinero, ya que la cantidad no es multiplo de $5000";
        }
    }else{
        document.getElementById('mensajes').innerHTML="La cantidad de dinero debe estar entre $50.000 y $1.200.000";
    }
}

const validarmultiplocinco = (parametro) => {
    if (parametro % 5000 === 0) {
        return true;
    } return false;
    
}

const retornarbilletes = (param) => {
    let bs50=0,bs20=0,bs10=0,bs5=0;
    while(param!=0){
        if (param-50000>=0) {
            bs50 += 1;
            param-=50000;
        }else if(param-20000>=0){
            bs20+=1;
            param-=20000;
        }else if(param-10000>=0){
            bs10+=1;
            param-=10000;
        }else if(param-5000>=0){
            bs5+=1;
            param-=5000;
        }
    }
    let cadena=`Hay ${bs50} billetes de $50.000\n`; 
    cadena+=`Hay ${bs20} billetes de $20.000\n`; 
    cadena+=`Hay ${bs10} billetes de $10.000\n`; 
    cadena+=`Hay ${bs5}  billetes de $5.000\n`; 
    return cadena;
}