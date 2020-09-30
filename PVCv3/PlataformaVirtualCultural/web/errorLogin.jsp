<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="UTF-8" />
     <title>Plataforma Virtual Cultural</title>
        <link href="css/default.css" rel="stylesheet" type="text/css"/>
        <script src="js/scripts.js" type="text/javascript"></script>
    </head>
    <body>
        <div id="wrapper">
            <img id='im2' src="css/imagenes/error.png" alt=""/>
            <div id="contents3">
                <h2>
                    <span class="especial">Error de ingreso</span>
                </h2>
                <p>
                    <strong>No ha iniciado la sesión.</strong><br />
                    Esto puede deberse a que la sesión ha expirado
                    o que los datos
                    de ingreso son incorrectos.
                </p>
                <p>
                    <span style="color: red;">
                        <%
                            int codError = 0;
                            String mensaje = "(Error sin determinar)";
                            try {
                                codError = Integer.parseInt(request.getParameter("error"));
                            } catch (Exception e) {
                            }
                            switch (codError) {
                                case 1:
                                    mensaje = "La sesión ha expirado.";
                                    break;
                                case 2:
                                    mensaje = "El nombre de usuario o la clave son incorrectos.";
                                    break;
                                default:
                                    ;
                            }
                            out.println(mensaje);
                        %>
                    </span>
                </p>
                <p>
                <form action="login.jsp" class="back" id="bc1">
                    <input type="image" src="css/imagenes/back.png" alt="Submit" width="100" height="100">
                    <a href="paginaPrincipal.jsp"><br>Página Principal</a>
                </form>
                </p>
            </div>
        </div>
    </body>
</html>