package com.bba.todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bba.todo.entities.Author;

public interface AuthorRepository extends JpaRepository<Author, Long> {

}
