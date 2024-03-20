import { ApiSettings } from "../settings/apisettings";

// Clase que contendra las llamadas a los Endpoints relacionados con el usuario
export class UsuarioModel{

    // Login de usuario (llamada a la API)
    static async loginUsuarioModel(nombreInput, contrasenaInput){
        try{
            // Llamada asincrona a la API, al endpoint de Login
            const response = await fetch(
                // Ruta
                `${ApiSettings.serverurl}/api/login`,
                {
                    // Metodo POST
                    method: "POST",
                    // Cabeceras
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": `${ApiSettings.serverurl}`
                    },
                    // Cuerpo a enviar
                    body: JSON.stringify(
                        {
                            nombre: nombreInput,
                            contrasena: contrasenaInput
                        }
                    )
                }
            );
            // Al obtener la respuesta, enviar el JSON completo de esta misma respuesta
            let json = await response.json();
            return json;
        }catch(error){
            // En caso de haber un error durante la ejecucion de la llamada, devolver error
            return {errorapi: "No se ha podido llamar a la API"};
        }
    }

    static async obtenerUltimasOfertas() {
        try {
            // Realiza una llamada a la API para obtener las últimas ofertas
            const response = await fetch(`${ApiSettings.serverurl}/api/ofertas`);
            // Parsea la respuesta como JSON
            const ofertas = await response.json();
            return ofertas;
        } catch (error) {
            // Maneja errores de llamada a la API
            console.error("Error al obtener las últimas ofertas:", error);
            return [];
        }
    }

}