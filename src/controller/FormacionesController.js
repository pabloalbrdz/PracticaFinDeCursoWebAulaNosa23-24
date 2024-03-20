import { FormacionesModel } from "../model/FormacionesModel";


export class FormacionesController{
    static async verUltimasFormaciones(){
        let response = await FormacionesModel.verFormacionesModel();

        if (response.errores != undefined && response.errores.length == 0){
            
            let arrayUltimosDatos = new Array();
            arrayUltimosDatos.push(response.listaFormaciones[response.listaFormaciones.length - 1]);
            arrayUltimosDatos.push(response.listaFormaciones[response.listaFormaciones.length - 2]);
            arrayUltimosDatos.push(response.listaFormaciones[response.listaFormaciones.length - 3]);
            arrayUltimosDatos.push(response.listaFormaciones[response.listaFormaciones.length - 4]);
            
            return arrayUltimosDatos;
        }else{
            return [];
        }
    }
}