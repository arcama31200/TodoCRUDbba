package com.bba.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

import com.bba.todo.entities.Todo;
import com.bba.todo.repository.TodoRepository;

@SpringBootApplication
public class TodoApplication implements CommandLineRunner{
    
    @Autowired
    private TodoRepository todoRepo;
    
    //Rendre accessible l'Id :
    @Autowired
    private RepositoryRestConfiguration restConfiguration;
    
    
    public static void main(String[] args) throws Exception {

        
        SpringApplication.run(TodoApplication.class, args);
        
    }

    @Override
    public void run(String... args) throws Exception {
        restConfiguration.exposeIdsFor(Todo.class);
        // TODO Auto-generated method stub
        
        
        //Add new row
        todoRepo.save(new Todo(null, "thryje", "dferg", "gfgfdeq", 4)); 
       
        todoRepo.findAll().forEach(p ->{
            System.out.println(p.toString());
        });
    }
}