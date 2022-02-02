import { Injectable } from '@angular/core';
import {UserEntity} from "../model/userEntity";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(user: UserEntity): boolean {
    return user.email === "master8@lemoncode.net" && user.password === "12345678";
  }
  logout(): void {

  }

  isLogged(): boolean {
    return false;
  }

  getUsername(): string {
    return '';
  }
}
