import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JQueryStyleEventEmitter } from 'rxjs/internal/observable/fromEvent';
import { TodoModelDB } from 'src/app/model/todo.model';
import { TodoServiceService } from 'src/app/services/todo-service.service';



@Component({
  selector: 'app-todo-db-tab',
  templateUrl: './todo-db-tab.component.html',
  styleUrls: ['./todo-db-tab.component.css']
})
export class TodoDbTabComponent implements OnInit {
  todoList:any | null=null;
  currentPage: number = 0;
  size: number = 10;
  pages?:Array<number>;
  currentKeyword:string="";

  @Input() todoDB?:TodoModelDB;
  @Output() vvdbtabEventEmitter:EventEmitter<any>=new EventEmitter<any>();

  constructor(private todoService:TodoServiceService, private router:Router) { }
  
  ngOnInit(): void {
    this.onGetTodoListByPages();
  }

  onGetTodoListByPages(): void{
    // Display database when app running
    this.todoService.getTodoByPages(this.currentPage, this.size)
    .subscribe(data =>{
      this.todoList= data;
      this.pages = new Array<number>();
      this.pages.length = this.todoList.page.totalPages;
      console.log("Valeur de pages.length : " + this.pages.length)
    }, err =>{
      console.log("Error ! " + err);
    });

  }

  //Afficher les boutons permettant d'accéder aux différentes pages contenant les données
  onPageTodo(i:number):void{
    // Page courante
    this.currentPage = i;
    // Recherche les virtual visit en fonction du mot clé AIRCRAFTNAME
    this.ChercherTodoByTitle();
  }
  //Methode qui s'active quand on clique sur le bouton rechercher
  onChercher(form:any){
    this.currentPage = 0;
    //Mot clé courant entré dans le formulaire
    this.currentKeyword = form.keyword;
    this.ChercherTodoByTitle();
  }
  // Recherche un mot clé AircraftName dans la base de donnée
  ChercherTodoByTitle(){
    //Récupérer les données en fonction du mot clé entré
    this.todoService.getTodoByTitleByPages(this.currentPage, this.size, this.currentKeyword).subscribe(
      data =>{
        this.todoList = data;
        this.pages = new Array<number>();
        this.pages.length = this.todoList["page"].totalPages;
        console.log("Valeur de pages.length : " + this.pages.length)
      }, err =>{
        console.log(err);
      })
  }

  onDeleteTodo(v:TodoModelDB){
    let conf = confirm("Etes-vous sur de vouloir supprimer cette virtual visit ? ");
    if (conf){
      this.todoService.deleteTodo(v).subscribe(data =>{
          // Rechargement des données dans angular
          this.onGetTodoListByPages();
      }, err =>{
        console.log("Error ! Here the error occurs ==> " + err);
      });
    }
  }
  // Ces url correspondent à ceux des composants, configuré dans le fichier de routage des composants : app-routing
  onCreateNewtodo(){
    this.router.navigateByUrl("/newTodo");
  }

  onEditTodo(v:TodoModelDB){
    console.log("Valeur de v.todoId" + v.id);
    this.router.navigateByUrl("/editTodo/" + v.id);
  }

  onHome(){
    this.router.navigateByUrl("/home");
  }

}