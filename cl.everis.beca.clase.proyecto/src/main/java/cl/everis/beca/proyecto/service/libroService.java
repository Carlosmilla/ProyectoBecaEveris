package cl.everis.beca.proyecto.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import cl.everis.beca.proyecto.model.Libros;

public interface libroService {


	@Transactional
	Optional<Libros> buscarPorId(Long id);
}
