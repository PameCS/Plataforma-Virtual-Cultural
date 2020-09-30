<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />   
        <title>Sitio Oficial Banco NIOS</title>
        <link href="css/default.css" rel="stylesheet" type="text/css"/>
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

                <%--
                Un formulario de ingreso sólo debe enviar
                datos por medio de POST, nunca usando GET.
                --%>
                <img id='im1' src="css/imagenes/inises.png" alt=""/>
                <form class="formLogin" name="log"  method="POST" action="ServicioLogin">
                    <table id="ini1">
                        <tr>
                            <td class="campo">
                                <input type="text" size="30" required="required"
                                       id="usuario" name="usuario" autocomplete="off" placeholder="Usuario"/>
                            </td>
                        </tr>
                        <tr>
                            <td class="campo">
                                <input type="password" size="30" required="required"
                                       id="password" name="password" autocomplete="off" placeholder="Contraseña"/>
                            </td>
                        </tr>
                        <tr>
                            <td class="campo">
                                <select id="rol" name="rol" size="1">
                                    <option value="0" style="color: aqua">Cliente</option>
                                    <option value="1" style="color:aquamarine">Cajero</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td class="controles" colspan="2">
                                <input type="image" src="css/imagenes/next.png" alt="Submit" width="100" height="25">
                            </td>
                        </tr>
                    </table>
                </form>      
                <form action="registrarse.jsp" class="regis" id="r1">
                    <input type="image" src="css/imagenes/register.png" alt="Submit" width="100" height="35">
                    <a href="paginaPrincipal.jsp"><br>Página<br>Principal</a>
                </form>
            </div>
        </div>
    </body>
</html>