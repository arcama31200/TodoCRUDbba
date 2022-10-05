import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoNavBarComponent } from './todo-nav-bar.component';

describe('TodoNavBarComponent', () => {
  let component: TodoNavBarComponent;
  let fixture: ComponentFixture<TodoNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
