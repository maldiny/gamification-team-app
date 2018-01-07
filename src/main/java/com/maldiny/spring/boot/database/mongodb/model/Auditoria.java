package com.maldiny.spring.boot.database.mongodb.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Auditoria {

    @Id
    private ObjectId id;
    
	private Usuarios usuario;
	private String fecha;
	
	public Auditoria() {
		super();
	}

	public Auditoria(Usuarios usuario, String fecha) {
		super();
		this.usuario = usuario;
		this.fecha = fecha;
	}

	public ObjectId getId() {
		return id;
	}

	public void setId(ObjectId id) {
		this.id = id;
	}

	public Usuarios getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuarios usuario) {
		this.usuario = usuario;
	}

	public String getFecha() {
		return fecha;
	}

	public void setFecha(String fecha) {
		this.fecha = fecha;
	}

	@Override
	public String toString() {
		return "Auditoria [id=" + id + ", usuario=" + usuario + ", fecha=" + fecha + "]";
	}

	
}
