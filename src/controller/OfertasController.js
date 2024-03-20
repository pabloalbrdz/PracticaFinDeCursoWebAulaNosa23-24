import { OfertasModel } from "../model/OfertasModel";

// Clase donde almacenareos los metodos del controlador relacionados al Usuario
export class OfertasController{

    static async obtenerUltimasOfertas() {

        // Llama al método del modelo para obtener todas las ofertas
        let response = await OfertasModel.obtenerUltimasOfertas();

        if (response.errores != undefined && response.errores.length == 0) {


            let arrayUltimosDatos = new Array();
            arrayUltimosDatos.push(response.ofertas[response.ofertas.length - 1]);
            arrayUltimosDatos.push(response.ofertas[response.ofertas.length - 2]);
            arrayUltimosDatos.push(response.ofertas[response.ofertas.length - 3]);
            arrayUltimosDatos.push(response.ofertas[response.ofertas.length - 4]);

            console.log(arrayUltimosDatos);

            return arrayUltimosDatos;

        } else {
            return [];
        }
    }

}