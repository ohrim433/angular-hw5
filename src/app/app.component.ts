import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TodoModel} from './model/todo-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todoArray: TodoModel[] = [];
  singleTodo: TodoModel;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      id: '',
      title: ['', Validators.required],
      body: ['', Validators.required],
      type: ['', Validators.required]
    });
  }

  addTodo() {
    this.singleTodo = {...this.form.value};
    this.singleTodo.id = this.todoArray.length;
    this.todoArray.push(this.singleTodo);
  }
}
