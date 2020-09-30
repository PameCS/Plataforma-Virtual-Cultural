<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

        <title>Plataforma Virtual Cultural</title>
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
<body>
    <h2 align="center" >Tabla de usuarios</h2>
    <table class="table table-sm">
        <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellidos</th>
                <th scope="col">Teléfono</th>
                <th scope="col">Email</th>
                <th scope="col">Acción</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td></td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>
                      <button type="button" class="btn btn-warning">Editar</button>
                      <button type="button" class="btn btn-danger">Eliminar</button>
                </td>
            </tr>
        </tbody>
    </table>
    <button type="button" onClick="location = 'addUser.jsp'" class="btn btn-success">Agregar usuario</button>
</body>
</html>
