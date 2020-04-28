import {Component, Input, OnInit} from '@angular/core';
import {TodoModel} from '../../../model/todo-model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['../../../app.component.css']
})
export class TodoComponent implements OnInit {
  @Input()
  todo: TodoModel;

  constructor() {
  }

  ngOnInit(): void {
  }

}
