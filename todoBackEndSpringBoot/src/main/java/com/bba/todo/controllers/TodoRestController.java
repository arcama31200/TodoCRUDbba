package com.bba.todo.controllers;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bba.todo.entities.Todo;
import com.bba.todo.repository.TodoRepository;
@RestController
@CrossOrigin("*")
public class TodoRestController {
	@Autowired
	private TodoRepository todoRepository;
	
	// List of all virtual visit
	@GetMapping(value="/todoList")
	public List<Todo> listTodo() throws IOException{
		return todoRepository.findAll();
	}
	
	// Find one Todo by this Id
	@GetMapping(value="/todoList/{id}")
	public Todo listTodoById(@PathVariable(name="id") Long id){
		return todoRepository.findById(id).get();
	}
	
	// Update of one Todo
	@PutMapping(value="/todoList/{id}", produces=MediaType.APPLICATION_JSON_VALUE)
	public Todo updateTodoById(@PathVariable(name="id") Long id, @RequestBody Todo todo) {
		return todoRepository.save(todo);
	}
	
	// Add new Todo
	@PostMapping(value="/todoList", produces=MediaType.APPLICATION_JSON_VALUE)
	public Todo postTodo(Todo todo) {
		return todoRepository.save(todo);
	}
	
	//Delete Todo
	@DeleteMapping(value="/todoList/{id}", produces=MediaType.APPLICATION_JSON_VALUE)
	public void deleteTodoById(@PathVariable(name="id") Long id) {
		todoRepository.deleteById(id);
	}
}
