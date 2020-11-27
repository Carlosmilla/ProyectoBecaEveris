package cl.everis.beca.proyecto.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cl.everis.beca.proyecto.interfaces.Ipedidos;
import cl.everis.beca.proyecto.model.Pedidos;

@Service
public class pedidoServiceImplement implements pedidoService{

	@Autowired
	private Ipedidos pedidoData;
	
	@SuppressWarnings("unchecked")
	@Override
	public List<Pedidos> buscarPorIdUsuario(Long UsuarioId) {
		return (List<Pedidos>) pedidoData.getOne(UsuarioId);
	}

	/*@Override
	public List<Pedidos> findByUsuarioIdInAndLibroId(List<String> UsuarioId, List<String> LibroId) {
		// TODO Auto-generated method stub
		return (List<Pedidos>) findByUsuarioIdInAndLibroId(UsuarioId, LibroId);
	}*/

}
