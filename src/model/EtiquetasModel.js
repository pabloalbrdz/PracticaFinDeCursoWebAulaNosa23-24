import { ApiSettings } from "../settings/apisettings";

// Clase que contendra las llamadas a los Endpoints relacionados con las etiquetas
export class EtiquetasModel{

    // Obtener todas las etiquetas
    static async obtenerEtiquetas(){
        try{
            // Llamada asincrona a la API, al endpoint de las etiquetas
            const response = await fetch(
                // Ruta
                `${ApiSettings.serverurl}/api/etiquetas`,
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