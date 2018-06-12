import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private _userService: UserService) { }

  ngOnInit() {
  }

  registration () {

 this._userService.register();
  }
}
