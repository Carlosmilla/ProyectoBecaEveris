package cl.everis.beca.proyecto.interfaces;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import cl.everis.beca.proyecto.model.Libros;

@Repository
public interface Ilibros extends JpaRepository<Libros, Long>{

	@Transactional
	List<Libros> findByTitulo (String titulo);
	
}
