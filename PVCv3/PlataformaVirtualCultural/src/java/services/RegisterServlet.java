package services;

import model.User;
import dao.UserServlet;
import java.io.IOException;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import model.Administrator;
import dao.AdministratorServlet;

@WebServlet
public class RegisterServlet extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        response.setHeader("cache-control", "no-cache, no-store, must-revalidate");
        UserServlet gUser = UserServlet.getInstance();
        AdministratorServlet gAdmin = AdministratorServlet.getInstance();

        String id_Usuario = request.getParameter("user");
        String password = request.getParameter("password");

        String rol = request.getParameter("role");
        int ro = Integer.parseInt(rol);

        String lastName = request.getParameter("last");
        String name = request.getParameter("name");
        String telephone = request.getParameter("tel");
        int tel = Integer.parseInt(telephone);
        String email = request.getParameter("email");

        boolean registerUser = false;
        boolean registerAdmin = false;

        if (id_Usuario != null && password != null && rol != null) {
            User u = new User(id_Usuario, password, ro);
            registerUser = gUser.registerUser(u);
            if (rol.equals("0")) {
                Administrator c = new Administrator(id_Usuario, id_Usuario, lastName, name, tel, email);
                registerAdmin = gAdmin.registerAdmin(c);
            }
            if (rol.equals("1")) {
                Administrator c = new Administrator(id_Usuario, id_Usuario, lastName, name, tel, email);
                registerAdmin = gAdmin.registerAdmin(c);
            }
            response.sendRedirect("login.jsp");
        } else {
            RequestDispatcher rd = request.getRequestDispatcher("errorLogin.jsp");
            rd.forward(request, response);
        }

    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.sendRedirect("errorLogin.jsp?error=0");
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    public String getServletInfo() {
        return "Register User";
    }
}
