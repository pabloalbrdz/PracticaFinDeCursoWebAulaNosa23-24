// Importar libreria
import CryptoJS from "crypto-js";

// Clase para el encriptado de AES
export class AESEncriptado{

    // Clave
    static clave = CryptoJS.enc.Utf8.parse('4rbgenERAdfeku ... afw ff4fa1121');
    // Vector de inicializacion
    static iv = CryptoJS.enc.Base64.parse('123asd1q');

    // Metodo encriptador a AES
    static encriptador(texto) {
        // Configuracion: Texto a encriptar, clave, vector de inicializacion y modo
        var encrypt = CryptoJS.AES.encrypt(texto, this.clave, {
            iv: this.iv,
            mode: CryptoJS.mode.CTR
        });
        // Devolver texto encriptado
        return encrypt.toString();
    }

}

// Clase para el hasheo con SHA256
export class SHA256Hasheo{

    // Metodo hasheador a SHA256
    static hasheador(texto){
        // Hashear texto (por defecto en UTF-8)
        var hasheada = CryptoJS.SHA256(texto).toString();
        // Devolver texto hasheado
        return hasheada;
    }

}