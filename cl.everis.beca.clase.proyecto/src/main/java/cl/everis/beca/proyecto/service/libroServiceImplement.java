package cl.everis.beca.proyecto.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cl.everis.beca.proyecto.interfaces.Ilibros;
import cl.everis.beca.proyecto.model.Libros;

@Service
public class libroServiceImplement implements libroService {

	@Autowired
	private Ilibros libroData;
	

	@Override
	public Optional<Libros> buscarPorId(Long id) {
		return libroData.findById(id);
	}

}
