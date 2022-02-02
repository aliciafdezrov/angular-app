import { Injectable } from '@angular/core';
import {UserEntity} from "../model/userEntity";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private static readonly authorizedEmail: string = "master8@lemoncode.net";
  private static readonly authorizedPassword: string = "12345678";
  private user: UserEntity;

  constructor() {
    this.user = {
      email: '',
      password: ''
    }
  }

  private isUserAuthorized(user: UserEntity): boolean {
    return user.email === AuthService.authorizedEmail && user.password === AuthService.authorizedPassword;
  }

  login(user: UserEntity): boolean {
    this.user = user;
    return this.isUserAuthorized(user)
   }

  logout(): void {
    this.user = {
      email: '',
      password: '',
    };
  }

  isLogged(): boolean {
    return this.isUserAuthorized(this.user);
  }

  getUsername(): string {
    return this.user.email;
  }
}
