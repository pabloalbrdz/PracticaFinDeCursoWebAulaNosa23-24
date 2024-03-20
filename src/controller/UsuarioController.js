import { UsuarioModel } from "../model/UsuarioModel";
import LoginAlerta from "../component/LoginAlerta";
import { AESEncriptado, SHA256Hasheo } from "../settings/encrypmethods";

// Clase donde almacenareos los metodos del controlador relacionados al Usuario
export class UsuarioController{

    // Metodo para realizar el login de usuario
    static async loginUsuarioModel(emailInput, contrasenaInput, setEstadoLogin){
        // Acudir a la llamada a la API desde el modelo, encriptando el email y hasheando la contrasena
        let response = await UsuarioModel.loginUsuarioModel(AESEncriptado.encriptador(emailInput), SHA256Hasheo.hasheador(contrasenaInput));
        if (response.errores != undefined && response.errores.length == 0){
            // En caso de no haber errores (array de errores vacio), crear sesion y modificar alerta con estilo de login correcto
            sessionStorage.setItem("usuario", JSON.stringify(response.usuario));
            setEstadoLogin(<LoginAlerta visible={"login-alerta-visible"} estado={"login-alerta-correcto"} mensaje={"Inicio de sesion con exito"}></LoginAlerta>);
            // Recarga la página 
            window.location.reload();
        }else{
            if (response.errorapi != undefined){
                // En caso de que no se pueda conectar a la API, modificar alerta con estilo de login incorrecto y mostrar error de no conexion
                setEstadoLogin(<LoginAlerta visible={"login-alerta-visible"} estado={"login-alerta-erroneo"} mensaje={response.errorapi}></LoginAlerta>);
            }else{
                // En caso de que el login es incorrecto, modificar alerta con estilo de login incorrecto y mostrar mensaje de correo o contraseña erroneos
                setEstadoLogin(<LoginAlerta visible={"login-alerta-visible"} estado={"login-alerta-erroneo"} mensaje={"Error: Correo o contraseña erroneos"}></LoginAlerta>);
            }
        }
    }


    // Metodo para cerrar la sesion de usuario
    static cerrarSesionUsuario(){
        // Eliminar sesion, eso implica que al no tener sesion, la pagina en el estado inicial, apareceria el menu de login
        sessionStorage.removeItem("usuario");
        // Recargar la página 
        window.location.reload();
    }


}