package com.bba.todo.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.bba.todo.entities.Todo;


@CrossOrigin("*")
@RepositoryRestResource
public interface TodoRepository extends JpaRepository<Todo, Long> {
	@RestResource(path="/byTodoTitle")
	public List<Todo> findByTitleContains(@Param("mc") String byTotoTitle);
	
	@RestResource(path="/byTodoTitlePage")
	public Page<Todo> findByTitleContains(@Param("mc") String byTodoTitle, Pageable pageable);

}