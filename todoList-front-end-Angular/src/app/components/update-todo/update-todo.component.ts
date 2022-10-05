import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoServiceService } from 'src/app/services/todo-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-Todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent implements OnInit {
  
  public TodoFormGroup?:FormGroup;
  todoId:any;
  constructor(private TodoService: TodoServiceService, private activatedRoute:ActivatedRoute, private formBuilder:FormBuilder, private router:Router) {
    this.todoId = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    
    this.TodoService.getTodoById(this.todoId).subscribe(Todo =>{
      this.TodoFormGroup = this.formBuilder.group({
        todoId:[Todo.id],
        authorName:[Todo.authorName, Validators.required],
        quantity:[Todo.quantity, Validators.required],
        title:[Todo.title, Validators.required],
        description:[Todo.description, Validators.required],
        todoType:[Todo.todoType, Validators.required]
      });
    });
  }

  onUpdateTodo(){
    this.TodoService.updateTodo(this.TodoFormGroup?.value).subscribe(data =>{
      alert("Success virtual visit updated !");

    }, err =>{
      console.log("Error ! Here the detail of the error : ==> " + err);
    }, ()=>{
      //Ensuite retour à la base de donnée de la virtual visit de façon synchrone grâce à ce callback
      this.router.navigateByUrl("/todoListDB");
    });
  }

  onBackToTodoDB(){
    this.router.navigateByUrl("/todoListDB");
  }
}
