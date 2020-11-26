package cl.everis.beca.proyecto.model;

import lombok.Data;

@Data
public class Sesion {

    private Usuario user;
	
	private String token;

}
