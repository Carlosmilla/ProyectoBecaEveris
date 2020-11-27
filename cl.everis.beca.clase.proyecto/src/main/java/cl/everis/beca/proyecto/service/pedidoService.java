package cl.everis.beca.proyecto.service;

import java.util.List;

import cl.everis.beca.proyecto.model.Pedidos;

public interface pedidoService {


	List<Pedidos> buscarPorIdUsuario(Long UsuarioId);
}
