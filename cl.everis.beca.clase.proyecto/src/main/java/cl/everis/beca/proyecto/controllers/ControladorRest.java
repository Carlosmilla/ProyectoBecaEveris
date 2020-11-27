package cl.everis.beca.proyecto.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import cl.everis.beca.proyecto.interfaces.IUsuarios;
import cl.everis.beca.proyecto.interfaces.Ilibros;
import cl.everis.beca.proyecto.interfaces.Ipedidos;
import cl.everis.beca.proyecto.model.Libros;
import cl.everis.beca.proyecto.model.Pedidos;
import cl.everis.beca.proyecto.model.Usuario;
import cl.everis.beca.proyecto.service.libroServiceImplement;
import cl.everis.beca.proyecto.service.pedidoServiceImplement;

@RestController
@RequestMapping("/proyecto")
@CrossOrigin(origins = "*")
public class ControladorRest {
	
	
	@Autowired
	private Ilibros librosData;
	
	@Autowired
	private Ipedidos pedidosData;
	
	@Autowired
	private IUsuarios usuarioData;
	
	@Autowired
	private pedidoServiceImplement pedidoService;
	
	@Autowired
	private libroServiceImplement libroService;
	/**
	 * Metodo de obtener todos los libros.
	 * @return
	 */
	@GetMapping(value = "/verLibros", produces = "application/json")
	public ResponseEntity<List<Libros>> verLibros() {
		return new ResponseEntity<List<Libros>>(librosData.findAll(), HttpStatus.OK); // uso de metodo findAll en lista
	}

	/**
	 * Metodo para buscar Libro.
	 * @param titulo
	 * @return
	 */
	@GetMapping(value = "/buscarLibroPorTitulo", produces = "application/json")
	public ResponseEntity<List<Libros>> buscarPorTitulo(@RequestParam String titulo){
		return new ResponseEntity<List<Libros>>(librosData.findByTitulo(titulo), HttpStatus.OK);
	}
	
	@GetMapping(value = "/buscarLibroPorId", produces = "application/json")
	public ResponseEntity<Optional<Libros>> buscarLibroPorId(@RequestParam Long id){
		return new ResponseEntity<Optional<Libros>>(libroService.buscarPorId(id), HttpStatus.OK);
	}
	
	/**
	 * Metodo para ingresar un pedido.
	 * @param fechaSolicitud
	 * @param fechaDevolucion
	 * @param penalizacion
	 * @param LibroId
	 * @param UsuarioId
	 * @return
	 */
	@PostMapping(value = "/agregarPedido", produces = "application/json")
	public ResponseEntity<Pedidos> agregarPedido(@RequestBody Pedidos pedido){
		return new ResponseEntity<Pedidos>(pedidosData.save(pedido), HttpStatus.OK);
	}
	
	/**
	 * Buscar pedidos de libro por el atributo usuarioId.
	 * @param UsuarioId
	 * @return
	 */
	/**@GetMapping(value = "/buscarPedidos", produces = "application/json")
	public ResponseEntity<List<Pedidos>> buscarPedidoPorIdUsuario(@RequestParam Long UsuarioId, @RequestParam Long LibroId) {
		return new ResponseEntity<List<Pedidos>>(pedidosData.findByLibroidAndUsuarioId(LibroId, UsuarioId), HttpStatus.OK);
	}**/
	

	@GetMapping(value = "/buscarPedidoPorId", produces = "application/json")
	public ResponseEntity<Optional<Pedidos>> buscarPedidoPorId(@RequestParam Long id){
		return new ResponseEntity<Optional<Pedidos>>(pedidosData.findById(id), HttpStatus.OK);
	}
	
	@GetMapping(value = "/buscarPedidosByUserId", produces = "application/json")
	public ResponseEntity<List<Pedidos>> buscarPorIdUsuario(@RequestParam Long Usuarioid){
		return new ResponseEntity<List<Pedidos>>(pedidoService.buscarPorIdUsuario(Usuarioid), HttpStatus.OK);
	}
	
	
	
	/**
	 * Eliminar el pedido por Id.
	 * @param id
	 * @return
	 */
	@DeleteMapping(value = "eliminarPedidoById", produces = "application/json")
	public ResponseEntity<Object> deletePedidoById(@RequestParam Long id){
		pedidosData.deleteById(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	/**
	 * Editar la contraseña del usuario.
	 * @param id
	 * @param user
	 * @return
	 */
	@PutMapping(value = "editarUsuario", produces = "application/json")
	public ResponseEntity<Usuario> updateUsuario(@RequestParam Long id, Usuario user){
		Usuario userr = usuarioData.getOne(id);
		userr.setPassword(user.getPassword());
		return new ResponseEntity<Usuario>(usuarioData.save(userr), HttpStatus.OK);
	}
	
	
	
	
	
}
