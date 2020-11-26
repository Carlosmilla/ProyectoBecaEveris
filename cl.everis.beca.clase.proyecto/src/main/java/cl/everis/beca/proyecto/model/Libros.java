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

@Entity
@Data
@AllArgsConstructor
@Table(name = "LIBROS")
public class Libros {
	
	protected static final String LIBROS_SEQ = "libros_seq";

	/**
	 * Declaracion de atributos de la clase
	 */
	@Id 
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = LIBROS_SEQ)
    @SequenceGenerator(sequenceName = LIBROS_SEQ, allocationSize = 1, name = "LIBROS_SEQ")
	private Long id;
	@Column
	private String titulo;
	@Column
	private String autor;
	@Column
	private String fechaPublicacion;
	@Column
	private Integer existencias;
	@Column
	private String editorial;
}
