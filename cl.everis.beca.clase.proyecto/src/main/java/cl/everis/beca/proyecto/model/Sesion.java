package cl.everis.beca.proyecto.model;



public class Sesion {

    private Usuario user;
	
	private String token;
	
	public Usuario getUser() {
		return user;
	}

	public void setUser(Usuario user) {
		this.user = user;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

}
