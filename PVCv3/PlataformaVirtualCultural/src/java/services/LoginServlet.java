package services;

import dao.UserServlet;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class LoginServlet extends HttpServlet {
     protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        response.setHeader("cache-control", "no-cache, no-store, must-revalidate");

        UserServlet gUsers = UserServlet.getInstance();
        boolean validUser = false;

        String user = request.getParameter("user");
        String password = request.getParameter("password");
        String role = request.getParameter("role");
        if (user != null && password != null) {
            validUser = gUsers.verifyUser(
                    user, password, role);
        }
        
        if (validUser) {

            HttpSession sesion = request.getSession(true);
            sesion.setAttribute("user", user);

            sesion.setMaxInactiveInterval(60 * 3);

            if("0".equals(role))
            response.sendRedirect("superAdminPage.jsp");
            else
                if("1".equals(role))
                    response.sendRedirect("administratorPage.jsp");
        } 
            else {

            response.sendRedirect("errorLogin.jsp?error=2");
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
        return "User Login Servlet";
    }
}
