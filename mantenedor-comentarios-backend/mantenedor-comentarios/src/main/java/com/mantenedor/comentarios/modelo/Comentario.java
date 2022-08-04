package com.mantenedor.comentarios.modelo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "comentarios")
public class Comentario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "email", length = 60, nullable = false, unique = true)
	private String email;

	@Column(name = "region", length = 60, nullable = false)
	private String region;

	@Column(name = "comentario", length = 1000, nullable = false)
	private String comentario;

	public Comentario() {

	}

	public Comentario(Long id, String email, String region, String comentario) {
		super();
		this.id = id;
		this.email = email;
		this.region = region;
		this.comentario = comentario;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getRegion() {
		return region;
	}

	public void setRegion(String region) {
		this.region = region;
	}

	public String getComentario() {
		return comentario;
	}

	public void setComentario(String comentario) {
		this.comentario = comentario;
	}

}
