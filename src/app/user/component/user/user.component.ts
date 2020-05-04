import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {UserModel} from '../../../model/user-model';
import {DataService} from '../../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: UserModel;
  usersList: UserModel[];

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private dataService: DataService) {
    this.activatedRoute.params.subscribe(value => {
      // console.log('params - ', value);
      this.userService.getUserById(value.id).subscribe(
        value1 => {
          console.log(value1);
          this.user = value1;
          this.dataService.setState(this.user);
          this.usersList = this.dataService.loadedUsersList;
        }
      );
    });
  }

  ngOnInit(): void {
  }

}
