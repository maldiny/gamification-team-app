package com.maldiny.spring.boot.database.mongodb.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class TaskTypes {

    @Id
    private ObjectId id;
    
    private String tipo;
	private Integer puntos;
	private String descripcion;
	private Auditoria auditoria;
	
	public TaskTypes() {
		super();
	}

	public TaskTypes(String tipo, Integer puntos, String descripcion, Auditoria auditoria) {
		super();
		this.tipo = tipo;
		this.puntos = puntos;
		this.descripcion = descripcion;
		this.auditoria = auditoria;
	}

	public ObjectId getId() {
		return id;
	}

	public void setId(ObjectId id) {
		this.id = id;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public Integer getPuntos() {
		return puntos;
	}

	public void setPuntos(Integer puntos) {
		this.puntos = puntos;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public Auditoria getAuditoria() {
		return auditoria;
	}

	public void setAuditoria(Auditoria auditoria) {
		this.auditoria = auditoria;
	}

	@Override
	public String toString() {
		return "TaskType [id=" + id + ", tipo=" + tipo + ", puntos=" + puntos + ", descripcion=" + descripcion
				+ ", auditoria=" + auditoria + "]";
	}

	
}
