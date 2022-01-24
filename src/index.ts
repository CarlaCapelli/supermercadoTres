let prodUno: string = "";
let prodDos: String = "";
let prodTres: String = "";
let stockUno: number = 0;
let stockDos: number = 0;
let stockTres: number = 0;
let precioUno: number = 0;
let precioDos: number = 0;
let precioTres: number = 0;
let compra: string = "";

prodUno = String(prompt("ingrese el producto uno"));
prodDos = String(prompt("ingrese el producto dos"));
prodTres = String(prompt("ingrese el producto tres"));
stockUno = Number(prompt("ingrese el stock de " + prodUno));
stockDos = Number(prompt("ingrese el stock de " + prodDos));
stockTres = Number(prompt("ingrese el stock de " + prodTres));
precioUno = Number(prompt("ingrese el precio de " + prodUno));
precioDos = Number(prompt("ingrese el precio de " + prodDos));
precioTres = Number(prompt("ingrese el precio de " + prodTres));

console.log("Bienvenido al Super");
console.log(
  "los productos son: " +
    prodUno +
    " $" +
    precioUno +
    "," +
    prodDos +
    " $" +
    precioDos +
    ", " +
    prodTres +
    " $" +
    precioTres
);

compra = String(prompt("que producto desea comprar?"));
if (compra === prodUno) {
  stockUno = stockUno - 1;
  console.log(
    "el precio de " +
      compra +
      "es de $" +
      precioUno +
      " y el stock es de " +
      stockUno
  );
} else if (compra === prodDos) {
  stockDos = stockDos - 1;
  console.log(
    "el precio de " +
      compra +
      " es de $" +
      precioDos +
      " y el stock es de " +
      stockDos
  );
} else if (compra === prodTres) {
  stockTres = stockTres - 1;
  console.log(
    "el precio de " +
      compra +
      " es de $" +
      precioTres +
      "y el stock es de " +
      stockTres
  );
} else {
  console.log("no tenemos ese producto");
}
