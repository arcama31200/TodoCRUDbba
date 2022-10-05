package com.bba.todo.entities;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Todo implements Serializable {
    private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private String title;
	private String authorName;
	private String description;
	private double quantity;
	@OneToMany(mappedBy="todo")
	private List<Author>author;
	
	
	public Todo() {
		super();
	}


    public Todo(Long id, String title, String authorName, String description, double quantity) {
        super();
        this.id = id;
        this.title = title;
        this.authorName = authorName;
        this.description = description;
        this.quantity = quantity;
        this.author = author;
    }


    public Long getId() {
        return id;
    }


    public void setId(Long id) {
        this.id = id;
    }


    public String getTitle() {
        return title;
    }


    public void setTitle(String title) {
        this.title = title;
    }


    public String getAuthorName() {
        return authorName;
    }


    public void setAuthorName(String authorName) {
        this.authorName = authorName;
    }


    public String getDescription() {
        return description;
    }


    public void setDescription(String description) {
        this.description = description;
    }


    public double getQuantity() {
        return quantity;
    }


    public void setQuantity(double quantity) {
        this.quantity = quantity;
    }


    public List<Author> getAuthor() {
        return author;
    }


    public void setAuthor(List<Author> author) {
        this.author = author;
    }
	
	
	
}
