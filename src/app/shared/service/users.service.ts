import { Injectable } from '@angular/core';
import { Iuser } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usersArr: Iuser[] = [
    {
      userid: 1,
      username: "One"
    },
    {
      userid: 2,
      username: "Two"
    },
    {
      userid: 3,
      username: "Three"
    },
    {
      userid: 4,
      username: "Four"
    }
  ]

  constructor() { }

  public getUsersData(): Iuser[] {
    return this.usersArr
  }

  public getUser(id: number): Iuser | undefined {
    return this.usersArr.find(user => user.userid === id)
  }
}
