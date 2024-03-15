import { UsuarioModel } from "../model/UsuarioModel";
import LoginAlerta from "../component/LoginAlerta";

// Clase donde almacenareos los metodos del controlador relacionados al Usuario
export class UsuarioController{

    static async loginUsuarioModel(nombreInput, contrasenaInput, setEstadoLogin){
        // Acudir a la llamada a la API desde el modelo
        let response = await UsuarioModel.loginUsuarioModel(nombreInput, contrasenaInput);
        if (response.errores.length == 0){
            // En caso de no haber errores (array de errores vacio), crear sesion y modificar alerta con estilo de login correcto
            sessionStorage.setItem("usuario", JSON.stringify(response.usuario));
            setEstadoLogin(<LoginAlerta visible={"login-alerta-visible"} estado={"login-alerta-correcto"} mensaje={"Inicio de sesion con exito"}></LoginAlerta>);
        }else{
            // En caso de que el login es incorrecto, modificar alerta con estilo de login incorrecto
            setEstadoLogin(<LoginAlerta visible={"login-alerta-visible"} estado={"login-alerta-erroneo"} mensaje={response.errores}></LoginAlerta>);
        }
    }

}