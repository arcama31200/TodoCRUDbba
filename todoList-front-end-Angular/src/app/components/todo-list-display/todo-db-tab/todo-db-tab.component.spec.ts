import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDbTabComponent } from './todo-db-tab.component';

describe('TodoDbTabComponent', () => {
  let component: TodoDbTabComponent;
  let fixture: ComponentFixture<TodoDbTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoDbTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoDbTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
