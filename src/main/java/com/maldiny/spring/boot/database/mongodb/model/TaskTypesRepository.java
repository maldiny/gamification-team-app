package com.maldiny.spring.boot.database.mongodb.model;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource(collectionResourceRel = "tasktypes", path = "tasktypes")
@CrossOrigin
public interface TaskTypesRepository extends MongoRepository<TaskTypes, String> {

}