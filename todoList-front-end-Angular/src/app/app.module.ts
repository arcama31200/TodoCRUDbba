import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewTodoComponent } from './components/new-todo/new-todo.component';
import { UpdateTodoComponent } from './components/update-todo/update-todo.component';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoNavBarComponent } from './components/todo-list-display/todo-nav-bar/todo-nav-bar.component';
import { TodoDbTabComponent } from './components/todo-list-display/todo-db-tab/todo-db-tab.component';
import { TodoListDisplayComponent } from './components/todo-list-display/todo-list-display.component';

@NgModule({
  declarations: [
    AppComponent,
    NewTodoComponent,
    TodoNavBarComponent,
    TodoDbTabComponent,
    UpdateTodoComponent,
    TodoListDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
