import { Component,OnInit} from '@angular/core';
import{UserService} from './user.service';
@Component({
  selector: 'myapp',
  templateUrl: './users.component.html',
})
export class userComponent {

  users = [];
  constructor(private _userService:UserService){}
  ngOnInit(){
    this.users = this._userService.getUsers();
  }
}
