<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />   
     <title>Plataforma Virtual Cultural</title>
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

        
                <img id='im1' src="css/imagenes/inises.png" alt=""/>
                <form class="formLogin" name="log"  method="POST" action="LoginServlet">
                    <table id="ini1">
                        <tr>
                            <td class="campo">
                                <input type="text" size="30" required="required"
                                       id="user" name="user" autocomplete="off" placeholder="Usuario"/>
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
                                <select id="role" name="role" size="1">
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
                    </table>
                </form>      
                <form action="registrarse.jsp" class="regis" id="r1">
                    <input type="image" src="css/imagenes/register.png" alt="Submit" width="100" height="35">
                    <a href="homePage.jsp"><br>Página<br>Principal</a>
                </form>
            </div>
        </div>
    </body>
</html>