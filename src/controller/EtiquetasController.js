import { EtiquetasModel } from "../model/FormacionesModel";

export class EtiquetasController{

    // Metodo que devuelve todas las formaciones
    static async verTodasEtiquetas(){
        let response = await EtiquetasController.verTodasEtiquetas();
        //en caso de que no haya errores hace lo del if
        if (response.errores != undefined && response.errores.length == 0){
            return response.etiquetas;
        }else{
            //si hay error no devuelve nada
            return [];
        }
    }

}