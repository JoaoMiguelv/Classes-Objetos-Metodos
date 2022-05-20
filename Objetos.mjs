import FormaGeometrica from "./Data/Classe.mjs";

let formageo1 = new FormaGeometrica(15, 16, 'R'); // Criando objeto e atribuindo valores aos atributos
console.log('ÁREA DO RETÂNGULO:', formageo1.calcularArea()); // Chamando método


let formageo2 = new FormaGeometrica(15, 16, 'T');
console.log('ÁREA DO TRIÂNGULO:', formageo2.calcularArea());

let formageo3 = new FormaGeometrica(15, 16, 'E');
console.log('ÁREA DA ELIPSE:', formageo3.calcularArea());

let formageo4 = new FormaGeometrica(15, 16, 'C');
console.log('ÁREA DA CIRCUNFERÊNCIA:', formageo4.calcularArea());