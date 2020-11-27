package cl.everis.beca.proyecto.interfaces;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import cl.everis.beca.proyecto.model.Pedidos;

public interface Ipedidos extends JpaRepository<Pedidos, Long> {

}
