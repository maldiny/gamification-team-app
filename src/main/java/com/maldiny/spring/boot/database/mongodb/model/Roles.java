package com.maldiny.spring.boot.database.mongodb.model;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Roles {

    @Id
    private ObjectId id;
    
	private String nombre;
	private String descripcion;
	private String caracteristicas;
	private List<TaskTypes> tiposTareas; // Tareas que este rol puede gestionar
	private Auditoria auditoria;
	
	public Roles() {
		super();
	}

	public Roles(String nombre, String descripcion, String caracteristicas, List<TaskTypes> tiposTareas,
			Auditoria auditoria) {
		super();
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.caracteristicas = caracteristicas;
		this.tiposTareas = tiposTareas;
		this.auditoria = auditoria;
	}

	
	public ObjectId getId() {
		return id;
	}

	public void setId(ObjectId id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public String getCaracteristicas() {
		return caracteristicas;
	}

	public void setCaracteristicas(String caracteristicas) {
		this.caracteristicas = caracteristicas;
	}

	public List<TaskTypes> getTiposTareas() {
		return tiposTareas;
	}

	public void setTiposTareas(List<TaskTypes> tiposTareas) {
		this.tiposTareas = tiposTareas;
	}

	public Auditoria getAuditoria() {
		return auditoria;
	}

	public void setAuditoria(Auditoria auditoria) {
		this.auditoria = auditoria;
	}

	@Override
	public String toString() {
		return "Roles [Id=" + id + ", nombre=" + nombre + ", descripcion=" + descripcion + ", caracteristicas="
				+ caracteristicas + ", tiposTareas=" + tiposTareas + ", auditoria=" + auditoria + "]";
	}

	
}
