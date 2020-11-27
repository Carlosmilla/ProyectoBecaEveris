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
@Table(name = "PEDIDOS")
public class Pedidos {
	
    protected static final String PEDIDO_SEQ = "pedido_seq";
	
	
	/**
	 * Declaracion de atributos de la clase Pedidos.
	 */

    @Id 
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = PEDIDO_SEQ)
    @SequenceGenerator(sequenceName = PEDIDO_SEQ, allocationSize = 1, name = "PEDIDO_SEQ")
	private Long id;
    
    @Column
	private String fechaSolicitud;
    
    @Column
	private String fechaDevolucion;
    
    @Column
	private String penalizacion;
    
    @Column
    private Long LibroId;
    
    @Column
    private Long usuarioId;
    
    public Pedidos() {}
}
