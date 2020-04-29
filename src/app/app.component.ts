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
      type: ['', Validators.required],
      status: ''
    });
  }

  addTodo() {
    this.singleTodo = {...this.form.value};
    this.singleTodo.id = this.todoArray.length;
    this.todoArray.push(this.singleTodo);
    this.form.reset();
  }

  loadList() {
    const loadList = JSON.parse(localStorage.getItem('todosList'));
    if (!loadList) {
      return alert('Nothing to load');
    } else {
      this.todoArray = [...loadList];
      console.log(this.todoArray);
    }
  }

  saveList() {
    if (this.todoArray.length === 0) {
      alert('Nothing to save');
    } else {
      localStorage.setItem('todosList', JSON.stringify(this.todoArray));
    }
  }

  clearStorage() {
    localStorage.clear();
  }
}
