<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>
        <meta charset="UTF-8">
        <title>Sitio Oficial Banco NIOS</title>
        <link href="css/default.css" rel="stylesheet" type="text/css"/>
    </head>
    <body id='bodCli'>
        <div>
            <header>
                <img src="css/imagenes/logoNIOS4.png" alt=""/>
            </header>
        </div>
        <div id="wrapper">
            <section id="contents1">
                <table id="t1">
                    <thead>
                        <tr>    
                            <th><button type="submit" style="background: url(css/imagenes/fondoBoton.jpg)" class="butt-mesas" onclick="location = 'transferencia.jsp'">Transferencias</button></th>
                            <th><button type="submit" style="background: url(css/imagenes/fondoBoton.jpg)" id="b1" class="butt-mesas" onclick="location = 'consultar.jsp'">Mis movimientos</button></th>
                            <th><button type="submit" style="background: url(css/imagenes/fondoBoton.jpg)" class="butt-mesas" onclick="location = 'paginaPrincipal.jsp'">Cerrar Sesión</button></th>
                        </tr>
                    </thead>
                </table> 
            </section>          
          </div>
    </body>
</html>
