package cl.everis.beca.proyecto.interfaces;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import cl.everis.beca.proyecto.model.Libros;

public interface Ilibros extends JpaRepository<Libros, Long>{

	//@Transactional solo para guardar y actualizar y solo se utiliza en servicios.
	
	Optional<Libros> findByTitulo (String titulo);
	
}

