import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoServiceService } from 'src/app/services/todo-service.service';
@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {

  // Le point d'interrogation veut dire qu'on est pas obligé de spécifier une valeur par défaut

  formGroup?:FormGroup;

  //date: Date = new Date(2019,1,2);

  constructor(private fb:FormBuilder, private TodoService: TodoServiceService, private router:Router) { }


  ngOnInit(): void {
    this.formGroup =this.fb.group({
      id:[null, Validators.required],
      authorName:["", Validators.required],
      quantity:[0, Validators.required],
      title:["", Validators.required],
      description:["", Validators.required],
      todoType:["", Validators.required]
    });
  }

  onSaveTodo(){
    this.TodoService.createNewTodo(this.formGroup?.value)
    .subscribe((data) =>{
      if(this.formGroup?.value.id === undefined){
        this.formGroup!.value.id =1;
      }else{
        this.formGroup!.value.id +=1;
      }
      
      alert("Success Saving product" + this.formGroup?.value.id);
    
    }, err =>{
      console.log("Error when creating new Todo. Here the error details : ==> " + JSON.stringify(err))
    }, ()=>{
      //Ensuite retour à la base de donnée de la Todo de façon synchrone grâce à ce callback
      this.router.navigateByUrl("/todoListDB");
    });
  }

  onBackToTodoDB(){
    this.router.navigateByUrl("/todoListDB");
  }
}
