import { ApiSettings } from "../settings/apisettings";

// Clase que contendra las llamadas a los Endpoints relacionados con el usuario
export class OfertasModel{

    static async obtenerUltimasOfertas() {
        try {
            // Realiza una llamada a la API para obtener todas las ofertas
            const response = await fetch(`${ApiSettings.serverurl}/api/ofertas`, 
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": `${ApiSettings.serverurl}`
                },
            });
            // Parsea la respuesta como JSON
            const ofertas = await response.json();
            return ofertas;
        } catch (error) {
            // Maneja errores de llamada a la API
            return [];
        }
    }

}