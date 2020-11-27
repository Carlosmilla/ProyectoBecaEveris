package cl.everis.beca.proyecto.loginConfig;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cl.everis.beca.proyecto.interfaces.IUsuarios;
import cl.everis.beca.proyecto.interfaces.Ilogin;
import cl.everis.beca.proyecto.model.Login;
import cl.everis.beca.proyecto.model.Sesion;
import cl.everis.beca.proyecto.model.Usuario;



@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/proyecto")
public class LoginController {
	
	@Autowired
	private Ilogin ilogin;
	
	@Autowired
	private IUsuarios iusuario;

	@PostMapping(value = "/login", produces = "application/json")
	public Sesion login(@RequestBody Login login) {
		String correo = login.getCorreo();
		String password = login.getPassword();
		Usuario user = iusuario.findByCorreoAndPassword(correo,password);
		
		if(user != null) {
			Sesion sesion = new Sesion();
			
			sesion.setUser(user);		
			sesion.setToken("esto es una token");
			
			return sesion;			
		}
		
		return null;
	}
}
