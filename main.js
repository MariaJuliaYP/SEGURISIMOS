class Poliza {
  constructor(id, mA, p) {
    this.identificacion = id;
    this.montoAsegurado = mA;
    this.porcentaje = p;
  }
  cobertura() {
    return this.montoAsegurado * this.porcentaje;
  }
}
class vida extends Poliza {
  constructor(id, mA, p, e) {
    super(id, mA, p);
    this.edad = e;
  }
  montoPagar() {
    if (this.edad <= "18") 
      return (this.cobertura() * 0.5) + this.cobertura();
     else
      return this.cobertura()
    if  (this.edad > "18")
      return (this.cobertura() * 0.1) + this.cobertura();
      return this.cobertura()
  }
}

class vehiculo extends Poliza {
    constructor(id, mA, p, a){
        super(id, mA, p);
        this.ano = a;
    }
    montoPagar() {
        if  (this.ano <= "2000")
            return (this.cobertura() * 0.7) + cobertura();
        else
            return (this.cobertura() * 0.12) + cobertura();
          return cobertura()  
    }
  
}
class Aseguradora {
    constructor(cP, aM) {
        this.contPolizas = cP;
        this.acumMonto = aM;
    }
Procesar (Polizas) {  

    this.acumMonto += p.montoPagar()
    this.contPolizas ++    
} 
    
Promedio() {
    return this.acumMonto / this.contPolizas
  }
}
function main() {
    let salida = document.getElementById("salida")
    let Polizas1 = new vida (22, 1000, 80, 15)
    let Polizas2 = new vida (11, 500, 90, 22)
    let Polizas3 = new vida (55, 2000, 70, 18)
    let Polizas4 = new vida (88, 1500, 90, 30)

    let Polizas5 = new vehiculo (33, 2000, 80, 2000)
    let Polizas6 = new vehiculo (90, 1500, 90, 2005)
    let Polizas7 = new vehiculo (77, 1000,90, 1995)
    let Polizas8 = new vehiculo (44, 2500, 85, 2010)

    salida.innerHTML = "Polizas <br>"
    
    Aseguradora.Procesar(Polizas1)
    Aseguradora.Procesar(Polizas2)
    Aseguradora.Procesar(Polizas3)
    Aseguradora.Procesar(Polizas4)
    Aseguradora.Procesar(Polizas5)
    Aseguradora.Procesar(Polizas6)
    Aseguradora.Procesar(Polizas7)
    Aseguradora.Procesar(Polizas8)

    salida.innerHTML = "Polizas <br>"

    salida.innerHTML+= `1) identificacion:$(Polizas1.identificacion) <br> monto Asegurado: $(Polizas1.montoAsegurado) <br> porcentaje: $(Polizas1.porcentaje) <br> edad: $(Polizas1.edad) $(Polizas1.Cobertura()) $(Polizas1.montoPagar()) <br>´
    salida.innerHTML+= `2) identificacion:$(Polizas2.identificacion) <br> monto Asegurado: $(Polizas2.montoAsegurado) <br> porcentaje: $(Polizas2.porcentaje) <br> edad: $(Polizas2.edad) $(Polizas2.Cobertura()) $(Polizas2.montoPagar()) <br>´
    salida.innerHTML+= `$(Polizas3.identificacion), $(Polizas3.montoAsegurado) $(Polizas3.porcentaje) $(Polizas3.edad) $(Polizas3.Cobertura()) $(Polizas3.montoPagar()) <br>´
    salida.innerHTML+= `$(Polizas4.identificacion), $(Polizas4.montoAsegurado) $(Polizas4.porcentaje) $(Polizas4.edad) $(Polizas4.Cobertura()) $(Polizas4.montoPagar()) <br>´
    
    salida.innerHTML+= `$(Polizas5.identificacion), $(Polizas5.montoAsegurado) $(Polizas5.porcentaje) $(Polizas5.ano) $(Polizas5.Cobertura()) $(Polizas5.montoPagar()) <br>´
    salida.innerHTML+= `$(Polizas6.identificacion), $(Polizas6.montoAsegurado) $(Polizas6.porcentaje) $(Polizas6.ano) $(Polizas6.Cobertura()) $(Polizas6.montoPagar()) <br>´
    salida.innerHTML+= `$(Polizas7.identificacion), $(Polizas7.montoAsegurado) $(Polizas7.porcentaje) $(Polizas7.ano) $(Polizas7.Cobertura()) $(Polizas7.montoPagar()) <br>´
    salida.innerHTML+= `$(Polizas8.identificacion), $(Polizas8.montoAsegurado) $(Polizas8.porcentaje) $(Polizas8.ano) $(Polizas8.Cobertura()) $(Polizas8.montoPagar()) <br>´
    salida.innerHTML+= `Promedio: $(Aseguradora.Promedio()) <br>`

}
main()