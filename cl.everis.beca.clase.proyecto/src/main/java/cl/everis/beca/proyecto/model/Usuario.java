package cl.everis.beca.proyecto.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Entity
@Table(name = "USUARIO")
public class Usuario {
	
	/**
	 * Generacion de atributos de la clase usuario.
	 */
	
	protected static final String USUARIO_SEQ = "usuario_seq";
	
	@Id 
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = USUARIO_SEQ)
	@SequenceGenerator(sequenceName = USUARIO_SEQ, allocationSize = 1, name = "USUARIO_SEQ")
	private Long id;
	
	@Column
	private String password;
	@Column
	private String nombre;
	@Column
	private String apellido;
	@Column
	private String correo;
	
	public Usuario() {
		
	}

}
