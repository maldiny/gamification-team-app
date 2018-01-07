package com.maldiny.spring.boot.database.mongodb.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Alertas {

    @Id
    private ObjectId id;
    
	private String usuario;
	private String mensaje;
	private Auditoria auditoria;
	
	public Alertas() {
		super();
	}

	public Alertas(String usuario, String mensaje, Auditoria auditoria) {
		super();
		this.usuario = usuario;
		this.mensaje = mensaje;
		this.auditoria = auditoria;
	}

	public ObjectId getId() {
		return id;
	}

	public void setId(ObjectId id) {
		this.id = id;
	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public String getMensaje() {
		return mensaje;
	}

	public void setMensaje(String mensaje) {
		this.mensaje = mensaje;
	}

	public Auditoria getAuditoria() {
		return auditoria;
	}

	public void setAuditoria(Auditoria auditoria) {
		this.auditoria = auditoria;
	}

	@Override
	public String toString() {
		return "Alertas [id=" + id + ", usuario=" + usuario + ", mensaje=" + mensaje + ", auditoria=" + auditoria + "]";
	}

	
}
