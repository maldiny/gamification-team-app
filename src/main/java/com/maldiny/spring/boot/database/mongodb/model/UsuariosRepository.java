package com.maldiny.spring.boot.database.mongodb.model;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource(collectionResourceRel = "usuarios", path = "usuarios")
@CrossOrigin
public interface UsuariosRepository extends MongoRepository<Usuarios, String> {

    @RestResource(path="searchByNombre", rel="searchByNombre")
	List<Usuarios> findByNombre(@Param("nombre") String nombre);
    
}