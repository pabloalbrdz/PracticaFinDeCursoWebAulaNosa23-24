import { ApiSettings } from "../settings/apisettings";

// Clase que contendra las llamadas a los Endpoints relacionados con las formaciones
export class FormacionesModel{

    // Formaciones (llamada a la API)
    static async verFormacionesModel(){
        try{
            // Llamada asincrona a la API, al endpoint de las Formaciones
            const response = await fetch(
                // Ruta
                `${ApiSettings.serverurl}/api/formaciones`,
                {
                    // Metodo GET
                    method: "GET",
                    // Cabeceras
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": `${ApiSettings.serverurl}`
                    },
                    
                }
            );
            // Al obtener la respuesta, enviar el JSON completo de esta misma respuesta
            let json = await response.json();
            return json;
        }catch(error){
            // En caso de haber un error durante la ejecucion de la llamada, devolver error
            return {errorapi: []};
        }
    }

}