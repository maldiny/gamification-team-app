package com.maldiny.spring.boot.database.mongodb.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Tasks {

    @Id
    private ObjectId id;
    
    private String tipo;
    private String descripcion;
    private Integer puntos;
	private String reporter;
	private String asignado;
	private String estado;
	private Auditoria auditoria;
	
	public Tasks() {
		super();
	}

	public Tasks(String tipo, String descripcion, Integer puntos, String reporter, String asignado,
			String estado, Auditoria auditoria) {
		super();
		this.tipo = tipo;
		this.descripcion = descripcion;
		this.puntos = puntos;
		this.reporter = reporter;
		this.asignado = asignado;
		this.estado = estado;
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

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public Integer getPuntos() {
		return puntos;
	}

	public void setPuntos(Integer puntos) {
		this.puntos = puntos;
	}

	public String getReporter() {
		return reporter;
	}

	public void setReporter(String reporter) {
		this.reporter = reporter;
	}

	public String getAsignado() {
		return asignado;
	}

	public void setAsignado(String asignado) {
		this.asignado = asignado;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public Auditoria getAuditoria() {
		return auditoria;
	}

	public void setAuditoria(Auditoria auditoria) {
		this.auditoria = auditoria;
	}

	@Override
	public String toString() {
		return "Tasks [id=" + id + ", tipo=" + tipo + ", descripcion=" + descripcion + ", puntos=" + puntos
				+ ", reporter=" + reporter + ", asignado=" + asignado + ", estado=" + estado + ", auditoria="
				+ auditoria + "]";
	}

}
