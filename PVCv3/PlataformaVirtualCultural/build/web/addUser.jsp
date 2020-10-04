<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE HTML>
<html>
    <head> 
        <meta charset="UTF-8" /> 
        <title>Plataforma Virtual Cultural</title>
        <link href="css/default.css" rel="stylesheet" type="text/css"/>
        <script language="javascript" type="text/javascript" src="js/scripts.js"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
 <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Centro Cultural</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Inicio <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Usuarios</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Aulas</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Eventos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Cursos</a>
                </li>
            </ul>
        </div>
    </nav>  
    </head>
    <style>
        select {
            width: 50%;
            height: 35px;

            margin-left: 7%;
            margin-bottom: 5%;
        }
        select:focus {
            min-width: 50%;
            width: 30%;
        }    
    </style>
    <body id="body2">
        <div id="wrapper">
            <div id="contents">
                <img id='im1' src="css/imagenes/reg.png" alt=""/>
                <form class="formLogin" name="nuevoUsuario" id="nuevoUsuario"
                      action="ServicioRegistro" method="POST"
                      onsubmit="return verificarRegistro('nuevoUsuario');">
                    <table id="ini1">
                        <tr>
                            <td class="campo">
                                <input type="text" size="30"
                                       id="nom" name="nom" required="required" autocomplete="off" placeholder="Nombre" />
                            </td>
                        </tr>
                        <tr>
                            <td class="campo">
                                <input type="text" size="30"
                                       id="ape" name="ape" required="required" autocomplete="off" placeholder="Apellidos" />
                            </td>
                        </tr>
                        <tr>
                            <td class="campo">
                                <input type="text" size="30"
                                       id="tel" name="tel" required="required" autocomplete="off" placeholder="Teléfono" />
                            </td>
                        </tr>
                        <tr>
                            <td class="campo">
                                <input type="text" size="30"
                                       id="usua" name="usua" autocomplete="off" placeholder="Nombre de usuario" />
                            </td>
                        </tr>
                        <tr>
                            <td class="campo">
                                <input type="password" size="30"
                                       id="pass" name="pass" placeholder="Contraseña" />
                        </tr>
                        <td class="campo">
                            <select id="rol" name="rol" size="1">
                                <option value="0" style="color: aqua">Super administrador</option>
                                <option value="1" style="color:aquamarine">Administrador</option>
                            </select>
                        </td>
                        </tr>
                        <tr>
                            <td class="controles" colspan="2">
                                <button type="button" class="btn btn-success">Aceptar</button>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    </body>
</html>
