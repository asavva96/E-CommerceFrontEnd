import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class FakeUsersDBService {
  private users: User[] = [
    {
      username: 'admin',
      password: 'admin',
      isAdministrator: true,
    },
  ];
  constructor() {}
  login(username: string, password: string): User | boolean {
    var userInDB = this.users.filter((user: User) => user.username == username);
    if (userInDB.length == 0) {
      return false;
    }
    if (userInDB[0].password != password) {
      return false;
    }
    return userInDB[0];
  }
}
