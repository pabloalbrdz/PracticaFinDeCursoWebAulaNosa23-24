import React from "react";

import "./LoginAlerta.css"

// Componente que mostrara el estado del inicio de sesion
// Visible: Estilo de ver/ocultar el propio elemento
// Estado: Estilo de login correcto/login erroneo
// Mensaje: Mensaje obtenido de la API
function LoginAlerta({visible, estado, mensaje}){
    return(
        <p className={`${visible} ${estado}`}>{mensaje}</p>
    );
}

export default LoginAlerta;