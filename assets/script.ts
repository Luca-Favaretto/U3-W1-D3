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
    const fraseDeffetto = `Quest'anno hai guadagnato ${
      this.utileLordo
    } togliendo le tasse al 22% ti rimangono ${this.utileTasse()}, poi da questo sottraiamo tasse Inps di ${this.tasseInps()} e le tasse irpef di ${this.tasseIrpef()} quindi il tuo guadagno netto è di ${redditoNetto}`;
    console.log(fraseDeffetto);
    return fraseDeffetto;
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
    const fraseDeffetto = `Quest'anno hai guadagnato ${
      this.utileLordo
    } togliendo le tasse al 22% ti rimangono ${this.utileTasse()}, poi da questo sottraiamo tasse Inps di ${this.tasseInps()} e le tasse irpef di ${this.tasseIrpef()} quindi il tuo guadagno netto è di ${redditoNetto}`;
    console.log(fraseDeffetto);
    return fraseDeffetto;
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
    const fraseDeffetto = `Quest'anno hai guadagnato ${
      this.utileLordo
    } togliendo le tasse al 22% ti rimangono ${this.utileTasse()}, poi da questo sottraiamo tasse Inps di ${this.tasseInps()} e le tasse irpef di ${this.tasseIrpef()} quindi il tuo guadagno netto è di ${redditoNetto}`;
    console.log(fraseDeffetto);
    return fraseDeffetto;
  }
}
let commerciante = new Commerciante(1000);

commerciante.redditoNetto();

const form = document.getElementById("form") as HTMLButtonElement;
console.log(form);

const inputRadio1 = document.getElementById(
  "flexRadioDefault1"
) as HTMLInputElement;
console.log(inputRadio1);
const inputRadio2 = document.getElementById(
  "flexRadioDefault2"
) as HTMLInputElement;
console.log(inputRadio2);
const inputRadio3 = document.getElementById(
  "flexRadioDefault3"
) as HTMLInputElement;
console.log(inputRadio3);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const input = parseInt(
    (document.getElementById("lordo") as HTMLInputElement).value
  );
  console.log(input);
  const main = document.getElementById("result") as HTMLDivElement;
  console.log(main);
  main.innerHTML = "";
  const p = document.createElement("p");

  switch (true) {
    case inputRadio1.checked:
      console.log(1);
      let professionista1 = new Professionista(input);
      p.innerText = professionista1.redditoNetto();

      break;

    case inputRadio2.checked:
      console.log(2);
      let artigiano1 = new Artigiano(input);
      p.innerText = artigiano1.redditoNetto();
      break;

    case inputRadio3.checked:
      console.log(3);
      let commerciante1 = new Commerciante(input);
      p.innerText = commerciante1.redditoNetto();
      break;

    default:
      console.log("codice rotto");
  }
  console.log(p);
  main.appendChild(p);
});
