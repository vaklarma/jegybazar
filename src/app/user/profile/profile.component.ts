import {Component, OnInit} from '@angular/core';
import {UserModel} from '../../shared/user-model';
import {UserService} from '../../shared/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: UserModel;
userService: UserService;
  constructor(private _userService: UserService) {
  }

  ngOnInit() {

   // this.user = this._userService.getUserById(2);
    this.user = this._userService.getCurrentUser();
    console.log('Filter user vizsgálat: ', this.user);

  }

}
