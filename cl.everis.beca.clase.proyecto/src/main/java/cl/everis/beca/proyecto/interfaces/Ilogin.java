package cl.everis.beca.proyecto.interfaces;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import cl.everis.beca.proyecto.model.Usuario;

@Repository
public interface Ilogin extends JpaRepository<Usuario, Long>{
	
	@Transactional
	Usuario findByCorreoAndPassword(String correo, String password);
}
