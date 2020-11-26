package cl.everis.beca.proyecto.interfaces;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import cl.everis.beca.proyecto.model.Usuario;

@Repository
public interface IUsuarios extends JpaRepository<Usuario, Long>{

}
