import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TodoModelDB } from '../model/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor(private httpClient: HttpClient) { }

  public getTodo():Observable<TodoModelDB[]>{
    return this.httpClient.get<TodoModelDB[]>(environment.host + "/todos");
  }

  public getTodoByPages(page:number, size:number):Observable<TodoModelDB[]>{
    return this.httpClient.get<TodoModelDB[]>(environment.host + "/todos?page="+page+"&size="+size);
  }

  public getTodoByTitleByPages(page:number, size:number, mc:String):Observable<TodoModelDB[]>{
    return this.httpClient.get<TodoModelDB[]>(environment.host + "/todos/search/byTodoTitlePage?mc="+ mc +"&page="+page+"&size="+size);
  }

  public deleteTodo(TodoDB:TodoModelDB):Observable<void>{
    return this.httpClient.delete<void>(environment.host + "/todos/"+ TodoDB.id);
  }

  public createNewTodo(TodoDB:TodoModelDB):Observable<void>{
    return this.httpClient.post<void>(environment.host + "/todos/", TodoDB);
  }
  public updateTodo(TodoDB:TodoModelDB):Observable<TodoModelDB>{
    console.log("Valueur de todoId : " + TodoDB.id); 
    return this.httpClient.put<TodoModelDB>(environment.host+"/todos/" + TodoDB.id, TodoDB);
  }

  public getTodoById(todoId:number):Observable<TodoModelDB>{
    return this.httpClient.get<TodoModelDB>(environment.host+"/todos/" + todoId);
  }
}
