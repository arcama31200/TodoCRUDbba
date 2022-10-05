import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NewTodoComponent } from './components/new-todo/new-todo.component';
import { HomeComponent } from './components/todo-list-display/home/home.component';
import { TodoDbTabComponent } from './components/todo-list-display/todo-db-tab/todo-db-tab.component';
import { TodoListDisplayComponent } from './components/todo-list-display/todo-list-display.component';
import { UpdateTodoComponent } from './components/update-todo/update-todo.component';

const routes: Routes = [
  {path : "", component:AppComponent},
  {path : "home", component:HomeComponent},
  {path : "todoListDB", component:TodoDbTabComponent},
  {path:"newTodo", component:NewTodoComponent},
  {path:"editTodo/:id", component:UpdateTodoComponent},
  {path:"todoListDisplay", component:TodoListDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
