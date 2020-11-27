package cl.everis.beca.proyecto.interfaces;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

import cl.everis.beca.proyecto.model.Pedidos;

public interface Ipedidos extends JpaRepository<Pedidos, Long> {
	
	@Transactional
	List<Pedidos> findByUsuarioId(Long usuarioId);

}
