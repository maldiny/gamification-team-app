package com.maldiny.spring.boot.database.mongodb.model;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Usuarios {

    @Id
    private ObjectId id;
    
	private String nombre;
	private String apellidos;
	private String password;
	private String rol;
	private List<Tasks> tasks;
	private List<Alertas> alertas;
	private Auditoria auditoria;
	
	public Usuarios() {
		super();
	}

	public Usuarios(String nombre, String apellidos, String password, String rol, List<Tasks> tasks,
			List<Alertas> alertas, Auditoria auditoria) {
		super();
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.password = password;
		this.rol = rol;
		this.tasks = tasks;
		this.alertas = alertas;
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

	public String getApellidos() {
		return apellidos;
	}

	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRol() {
		return rol;
	}

	public void setRol(String rol) {
		this.rol = rol;
	}

	public List<Tasks> getTasks() {
		return tasks;
	}

	public void setTasks(List<Tasks> tasks) {
		this.tasks = tasks;
	}

	public List<Alertas> getAlertas() {
		return alertas;
	}

	public void setAlertas(List<Alertas> alertas) {
		this.alertas = alertas;
	}

	public Auditoria getAuditoria() {
		return auditoria;
	}

	public void setAuditoria(Auditoria auditoria) {
		this.auditoria = auditoria;
	}

	@Override
	public String toString() {
		return "Usuarios [id=" + id + ", nombre=" + nombre + ", apellidos=" + apellidos + ", password=" + password
				+ ", rol=" + rol + ", tasks=" + tasks + ", alertas=" + alertas + ", auditoria=" + auditoria + "]";
	}

	
	
}
