import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListHeaderComponent } from './todo-list-header.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TodoListHeaderComponent', () => {
  let component: TodoListHeaderComponent;
  let fixture: ComponentFixture<TodoListHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListHeaderComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
