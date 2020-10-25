import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  user: User = {
    name: 'Matan Cris',
    coins: 100, 
    moves: []
  }

  getUser() {
    return this.user;
  }
}


