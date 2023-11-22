abstract class Lavoratore {
  utileLordo: number;
  constructor(_utileLordo: number) {
    this.utileLordo = _utileLordo;
  }
  abstract utileTasse(): any;
  abstract tasseIrpef(): any;
  abstract tasseInps(): any;
  abstract redditoNetto(): any;
}

class Professionista extends Lavoratore {
  constructor(_utileLordo: number) {
    super(_utileLordo);
  }

  utileTasse() {
    const utileTassato: number = this.utileLordo * 0.78;

    return utileTassato;
  }
  tasseIrpef() {
    const tasseIrpef: number = this.utileTasse() * 0.05;

    return tasseIrpef;
  }
  tasseInps() {
    const tasseInps: number = this.utileTasse() * 0.25;

    return tasseInps;
  }
  redditoNetto() {
    const redditoNetto =
      this.utileTasse() - this.tasseInps() - this.tasseInps();
    console.log(
      `Quest'anno hai guadagnato ${
        this.utileLordo
      } togliendo le tasse al 22% ti rimangono ${this.utileTasse()}, poi da questo sottraiamo tasse Inps di ${this.tasseInps()} e le tasse irpef di ${this.tasseIrpef()} quindi il tuo guadagno netto è di ${redditoNetto}`
    );
  }
}

let professionista = new Professionista(1000);

professionista.redditoNetto();

class Artigiano extends Lavoratore {
  constructor(_utileLordo: number) {
    super(_utileLordo);
  }

  utileTasse() {
    const utileTassato: number = this.utileLordo * 0.78;

    return utileTassato;
  }
  tasseIrpef() {
    const tasseIrpef: number = this.utileTasse() * 0.15;

    return tasseIrpef;
  }
  tasseInps() {
    const tasseInps: number = this.utileTasse() * 0.15;

    return tasseInps;
  }
  redditoNetto() {
    const redditoNetto =
      this.utileTasse() - this.tasseInps() - this.tasseInps();
    console.log(
      `Quest'anno hai guadagnato ${
        this.utileLordo
      } togliendo le tasse al 22% ti rimangono ${this.utileTasse()}, poi da questo sottraiamo tasse Inps di ${this.tasseInps()} e le tasse irpef di ${this.tasseIrpef()} quindi il tuo guadagno netto è di ${redditoNetto}`
    );
  }
}

let artigiano = new Artigiano(1000);

artigiano.redditoNetto();

class Commerciante extends Lavoratore {
  constructor(_utileLordo: number) {
    super(_utileLordo);
  }

  utileTasse() {
    const utileTassato: number = this.utileLordo * 0.78;

    return utileTassato;
  }
  tasseIrpef() {
    const tasseIrpef: number = this.utileTasse() * 0.15;

    return tasseIrpef;
  }
  tasseInps() {
    const tasseInps: number = this.utileTasse() * 0.35;

    return tasseInps;
  }
  redditoNetto() {
    const redditoNetto =
      this.utileTasse() - this.tasseInps() - this.tasseInps();
    console.log(
      `Quest'anno hai guadagnato ${
        this.utileLordo
      } togliendo le tasse al 22% ti rimangono ${this.utileTasse()}, poi da questo sottraiamo tasse Inps di ${this.tasseInps()} e le tasse irpef di ${this.tasseIrpef()} quindi il tuo guadagno netto è di ${redditoNetto}`
    );
  }
}
let commerciante = new Commerciante(1000);

commerciante.redditoNetto();
