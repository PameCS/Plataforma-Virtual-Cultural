<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE HTML>
<html>
    <head> 
        <meta charset="UTF-8" /> 
        <title>Plataforma Virtual Cultural</title>
        <link href="css/default.css" rel="stylesheet" type="text/css"/>
        <script language="javascript" type="text/javascript" src="js/scripts.js"></script>
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
                      action="RegisterServlet" method="POST"
                      onsubmit="return verifyRegister('nuevoUsuario');">
                    <table id="ini1">
                        <tr>
                            <td class="campo">
                                <input type="text" size="30"
                                       id="name" name="name" required="required" autocomplete="off" placeholder="Nombre" />
                            </td>
                        </tr>
                        <tr>
                            <td class="campo">
                                <input type="text" size="30"
                                       id="last" name="last" required="required" autocomplete="off" placeholder="Apellidos" />
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
                                       id="email" name="email" required="required" autocomplete="off" placeholder="Email" />
                            </td>
                        </tr>
                        <tr>
                            <td class="campo">
                                <input type="text" size="30"
                                       id="user" name="user" autocomplete="off" placeholder="ID" />
                            </td>
                        </tr>
                        <tr>
                            <td class="campo">
                                <input type="password" size="30"
                                       id="password" name="password" placeholder="Contraseña" />
                        </tr>
                        <td class="campo">
                            <select id="rol" name="rol" size="1">
                                <option value="0" style="color: aqua">Super Administrador</option>
                                <option value="1" style="color:aquamarine">Administrador</option>
                            </select>
                        </td>
                        </tr>
                        <tr>
                            <td class="controles" colspan="2">
                                <input type="image" src="css/imagenes/next.png" alt="Submit" width="100" height="25">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a href="login.jsp"><br>Ya tienes cuenta? <br> Iniciar sesión</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a href="homePage.jsp"><br>Página<br>Principal</a>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    </body>
</html>
