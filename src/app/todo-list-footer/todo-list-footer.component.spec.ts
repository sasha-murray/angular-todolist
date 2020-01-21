import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListFooterComponent } from './todo-list-footer.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TodoListFooterComponent', () => {
  let component: TodoListFooterComponent;
  let fixture: ComponentFixture<TodoListFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListFooterComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
