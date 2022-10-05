package com.bba.todo.entities;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Author implements Serializable {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private String authorName;
	@ManyToOne
	private Todo todo;
	
	public Author() {
		super();
	}
	public Author(Long id, String authorName, Todo todo) {
		super();
		this.id = id;
		this.authorName = authorName;
		this.todo = todo;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getAuthorName() {
		return authorName;
	}
	public void setAuthorName(String authorName) {
		this.authorName = authorName;
	}
	public Todo getTodo() {
		return todo;
	}
	public void setTodo(Todo todo) {
		this.todo = todo;
	}
	@Override
	public String toString() {
		return "Author [id=" + id + ", authorName=" + authorName + ", todo=" + todo + "]";
	}
	
	
}
