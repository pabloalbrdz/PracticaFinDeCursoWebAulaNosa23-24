import { FormacionesModel } from "../model/FormacionesModel";

//clase donde guardaremos las formaciones 
export class FormacionesController{
    static async verUltimasFormaciones(){

        let response = await FormacionesModel.verFormacionesModel();
        
        //en caso de que no haya errores hace lo del if
        if (response.errores != undefined && response.errores.length == 0){
            
            //Un array que recoja las ultimas 4 formaciones que aparecen en la lista
            let arrayUltimosDatos = new Array();
            arrayUltimosDatos.push(response.listaFormaciones[response.listaFormaciones.length - 1]);
            arrayUltimosDatos.push(response.listaFormaciones[response.listaFormaciones.length - 2]);
            arrayUltimosDatos.push(response.listaFormaciones[response.listaFormaciones.length - 3]);
            arrayUltimosDatos.push(response.listaFormaciones[response.listaFormaciones.length - 4]);
            
            // devuelve ese array
            return arrayUltimosDatos;
        }else{
            //si hay error no devuelve nada
            return [];
        }
    }
}