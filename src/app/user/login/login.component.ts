import {Component, OnInit} from '@angular/core';
import {UserService} from '../../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public error: string;

  constructor(private _userService: UserService) {
  }

  ngOnInit() {

  }

  login(email: string, password: string) {

    if (!this._userService.login(email, password)) {
      this.error = 'Hiba a belépéskor !';
      console.log('error msg: ', this.error);
    }


  }
  cleanError() {
    delete(this.error);
    console.log('error msg: ', this.error);
  }
}
