package com.maldiny.spring.boot.database.mongodb.model;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource(collectionResourceRel = "tasks", path = "tasks")
@CrossOrigin
public interface TasksRepository extends MongoRepository<Tasks, String> {

}