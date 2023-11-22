var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Lavoratore = /** @class */ (function () {
    function Lavoratore(_utileLordo) {
        this.utileLordo = _utileLordo;
    }
    return Lavoratore;
}());
var Professionista = /** @class */ (function (_super) {
    __extends(Professionista, _super);
    function Professionista(_utileLordo) {
        return _super.call(this, _utileLordo) || this;
    }
    Professionista.prototype.utileTasse = function () {
        var utileTassato = this.utileLordo * 0.78;
        return utileTassato;
    };
    Professionista.prototype.tasseIrpef = function () {
        var tasseIrpef = this.utileTasse() * 0.05;
        return tasseIrpef;
    };
    Professionista.prototype.tasseInps = function () {
        var tasseInps = this.utileTasse() * 0.25;
        return tasseInps;
    };
    Professionista.prototype.redditoNetto = function () {
        var redditoNetto = this.utileTasse() - this.tasseInps() - this.tasseInps();
        var fraseDeffetto = "Quest'anno hai guadagnato ".concat(this.utileLordo, " togliendo le tasse al 22% ti rimangono ").concat(this.utileTasse(), ", poi da questo sottraiamo tasse Inps di ").concat(this.tasseInps(), " e le tasse irpef di ").concat(this.tasseIrpef(), " quindi il tuo guadagno netto \u00E8 di ").concat(redditoNetto);
        console.log(fraseDeffetto);
        return fraseDeffetto;
    };
    return Professionista;
}(Lavoratore));
var professionista = new Professionista(1000);
professionista.redditoNetto();
var Artigiano = /** @class */ (function (_super) {
    __extends(Artigiano, _super);
    function Artigiano(_utileLordo) {
        return _super.call(this, _utileLordo) || this;
    }
    Artigiano.prototype.utileTasse = function () {
        var utileTassato = this.utileLordo * 0.78;
        return utileTassato;
    };
    Artigiano.prototype.tasseIrpef = function () {
        var tasseIrpef = this.utileTasse() * 0.15;
        return tasseIrpef;
    };
    Artigiano.prototype.tasseInps = function () {
        var tasseInps = this.utileTasse() * 0.15;
        return tasseInps;
    };
    Artigiano.prototype.redditoNetto = function () {
        var redditoNetto = this.utileTasse() - this.tasseInps() - this.tasseInps();
        var fraseDeffetto = "Quest'anno hai guadagnato ".concat(this.utileLordo, " togliendo le tasse al 22% ti rimangono ").concat(this.utileTasse(), ", poi da questo sottraiamo tasse Inps di ").concat(this.tasseInps(), " e le tasse irpef di ").concat(this.tasseIrpef(), " quindi il tuo guadagno netto \u00E8 di ").concat(redditoNetto);
        console.log(fraseDeffetto);
        return fraseDeffetto;
    };
    return Artigiano;
}(Lavoratore));
var artigiano = new Artigiano(1000);
artigiano.redditoNetto();
var Commerciante = /** @class */ (function (_super) {
    __extends(Commerciante, _super);
    function Commerciante(_utileLordo) {
        return _super.call(this, _utileLordo) || this;
    }
    Commerciante.prototype.utileTasse = function () {
        var utileTassato = this.utileLordo * 0.78;
        return utileTassato;
    };
    Commerciante.prototype.tasseIrpef = function () {
        var tasseIrpef = this.utileTasse() * 0.15;
        return tasseIrpef;
    };
    Commerciante.prototype.tasseInps = function () {
        var tasseInps = this.utileTasse() * 0.35;
        return tasseInps;
    };
    Commerciante.prototype.redditoNetto = function () {
        var redditoNetto = this.utileTasse() - this.tasseInps() - this.tasseInps();
        var fraseDeffetto = "Quest'anno hai guadagnato ".concat(this.utileLordo, " togliendo le tasse al 22% ti rimangono ").concat(this.utileTasse(), ", poi da questo sottraiamo tasse Inps di ").concat(this.tasseInps(), " e le tasse irpef di ").concat(this.tasseIrpef(), " quindi il tuo guadagno netto \u00E8 di ").concat(redditoNetto);
        console.log(fraseDeffetto);
        return fraseDeffetto;
    };
    return Commerciante;
}(Lavoratore));
var commerciante = new Commerciante(1000);
commerciante.redditoNetto();
var form = document.getElementById("form");
console.log(form);
var inputRadio1 = document.getElementById("flexRadioDefault1");
console.log(inputRadio1);
var inputRadio2 = document.getElementById("flexRadioDefault2");
console.log(inputRadio2);
var inputRadio3 = document.getElementById("flexRadioDefault3");
console.log(inputRadio3);
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var input = parseInt(document.getElementById("lordo").value);
    console.log(input);
    var main = document.getElementById("result");
    console.log(main);
    main.innerHTML = "";
    var p = document.createElement("p");
    switch (true) {
        case inputRadio1.checked:
            console.log(1);
            var professionista1 = new Professionista(input);
            p.innerText = professionista1.redditoNetto();
            break;
        case inputRadio2.checked:
            console.log(2);
            var artigiano1 = new Artigiano(input);
            p.innerText = artigiano1.redditoNetto();
            break;
        case inputRadio3.checked:
            console.log(3);
            var commerciante1 = new Commerciante(input);
            p.innerText = commerciante1.redditoNetto();
            break;
        default:
            console.log("codice rotto");
    }
    console.log(p);
    main.appendChild(p);
});
