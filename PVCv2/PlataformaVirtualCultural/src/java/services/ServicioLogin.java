package services;

import dao.GestorUsuarios;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class ServicioLogin extends HttpServlet {
     protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        response.setHeader("cache-control", "no-cache, no-store, must-revalidate");

        // Hay que verificar que la información del servidor
        // especifique la dirección correcta.
        GestorUsuarios gUsuarios = GestorUsuarios.obtenerInstancia();
        boolean usuarioValido = false;

        String usuario = request.getParameter("usuario");
        String password = request.getParameter("password");
        String rol = request.getParameter("rol");
        if (usuario != null && password != null) {
            usuarioValido = gUsuarios.verificarUsuario(
                    usuario, password, rol);
        }
        
        if (usuarioValido) {

            HttpSession sesion = request.getSession(true);
            sesion.setAttribute("usuario", usuario);

            sesion.setMaxInactiveInterval(60 * 3);

            if("0".equals(rol))
            response.sendRedirect("cliente.jsp");
            else
                if("1".equals(rol))
                    response.sendRedirect("cajero.jsp");

        } 
        
            else {

            // Aquí se puede redirigir la página a una diferente
            // dependiendo del tipo de error. Por ejemplo, se puede
            // utilizar una página para solicitar al usuario que
            // se registre en el sitio.
            //request.getRequestDispatcher("errorIngreso.jsp?error=2").forward(
            //        request, response);
            response.sendRedirect("errorIngreso.jsp?error=2");
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods.">
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        // No permite que los datos del usuario sean recibidos por
        // medio de GET.
        response.sendRedirect("errorIngreso.jsp?error=0");
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    public String getServletInfo() {
        return "Servicio de ingreso de usuarios";
    }// </editor-fold>
}
