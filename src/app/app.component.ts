import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService) {
    this.form = formBuilder.group({
      id: '',
      title: ['', Validators.required],
      body: ['', Validators.required],
      type: ['', Validators.required],
      status: ''
    });
    dataService.getState().subscribe(value => console.log('usersList ', value));
  }

  navigate() {
    // changes url to localhost/users/:id
    this.router.navigate(['users', this.form.value.id], {relativeTo: this.activatedRoute});
  }
}
