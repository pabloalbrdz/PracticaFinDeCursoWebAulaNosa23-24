import { ApiSettings } from "../settings/apisettings";

// Clase que contendra las llamadas a los Endpoints relacionados con el usuario
export class UsuarioModel{

    // Login de usuario (llamada a la API)
    static async loginUsuarioModel(nombreInput, contrasenaInput){
        try{
            // Llamada asincrona a la API, al endpoint de Login
            const response = await fetch(
                // Ruta
                `${ApiSettings.serverurl}/login`,
                {
                    // Metodo POST
                    method: "POST",
                    // Cabeceras
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*"
                    },
                    // Cuerpo a enviar
                    body: {
                        nombre: nombreInput,
                        contrasena: contrasenaInput
                    }
                }
            );
            // Al obtener la respuesta, enviar el JSON completo de esta misma respuesta
            return response.json;
        }catch(error){
            // En caso de haber un error durante la ejecucion de la llamada, devolver error
            return {
                errores: [
                    "No se ha podido llamar a la API"
                ]
            };
        }
    }

}