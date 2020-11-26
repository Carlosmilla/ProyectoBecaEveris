package cl.everis.beca.proyecto.interfaces;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import cl.everis.beca.proyecto.model.Pedidos;

@Repository
public interface Ipedidos extends JpaRepository<Pedidos, Long> {
	
	
}
