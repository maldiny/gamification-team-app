package com.maldiny.spring.boot.database.mongodb.model;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.bson.types.ObjectId;
import com.maldiny.spring.boot.database.mongodb.model.Roles;
import java.util.List;

@RepositoryRestResource(collectionResourceRel = "roles", path = "roles")
@CrossOrigin
public interface RolesRepository extends MongoRepository<Roles, String> {

	List<Roles> findById(ObjectId id);

}