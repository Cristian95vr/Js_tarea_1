//1)
// function piramide(nro){
// for(let i = 1; i <= nro; i++){
//         let f = "";
//         for(let a = 1;a <= i;a++){
//             f += a;
//         }
//         console.log(f);
// }
// };
//2)
// const arr1=["manzana",2,"pera",5,"auto",true];
// const arr2=[true,"manzana","sandia",3];
// let igual=[];
// for(let i = 0; i < arr1.length; i++){
//     for(let j = 0; j < arr2.length; j++){
//         if(arr1[i]===arr2[j]){
//             igual.push(arr2[j]);
//         }
//     }
// }
// console.log(igual);
//3)
//3.1
// let carrito = {
//     montoTotal:10,
//     productos:["leche"]
// }
class Carrito{
    constructor(montoTotal,productos){
        this.montoTotal = 10;
        this.productos = ["leche"];
    } //3.2
    agregarProducto(nombre,precio,unidades){
        if(!this.productos.includes(nombre)){
            this.productos.push(nombre);
            this.montoTotal += precio*unidades;
        } //3.3
        else{
            console.log(`ya existe ${nombre} con ${unidades} unidades`)
        }
    }
};

const carrito = new Carrito();
carrito.agregarProducto("Azucar",5,5);
carrito.agregarProducto("Azucar",5,2);
console.log(carrito)