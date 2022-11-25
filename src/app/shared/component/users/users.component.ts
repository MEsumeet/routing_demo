import { Component, OnInit } from '@angular/core';
import { Iuser } from '../../model/model';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users: Iuser[] = [];
  public selectedUser:number = 1;
  constructor(private userList: UsersService) { }

  ngOnInit(): void {
    this.users = this.userList.getUsersData();
  }

}
