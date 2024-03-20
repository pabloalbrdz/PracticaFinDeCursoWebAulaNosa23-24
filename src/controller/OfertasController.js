import { OfertasModel } from "../model/OfertasModel";

// Clase donde almacenareos los metodos del controlador relacionados al Usuario
export class OfertasController{

    static async obtenerUltimasOfertas() {
        try {
            // Llama al método del modelo para obtener todas las ofertas
            const todasLasOfertas = await OfertasModel.obtenerTodasLasOfertas();
            // Devuelve las últimas 4 ofertas (o menos si hay menos disponibles)
            return todasLasOfertas.slice(-4);
        } catch (error) {
            // Maneja errores al obtener las ofertas
            console.error("Error al obtener las últimas ofertas:", error);
            return [];
        }
    }

}