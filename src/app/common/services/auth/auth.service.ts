import { Injectable } from '@angular/core';
import {UserEntity} from "../../model/userEntity";
import {StorageService} from "../storage/storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private static readonly authorizedEmail: string = "master8@lemoncode.net";
  private static readonly authorizedPassword: string = "12345678";
  private static readonly storageKey: string = 'user';

  constructor(private storageService: StorageService) {}

  private isUserAuthorized(user: UserEntity): boolean {
    return user.email === AuthService.authorizedEmail && user.password === AuthService.authorizedPassword;
  }

  login(user: UserEntity): boolean {
    const isUserAuthorized = this.isUserAuthorized(user);
    if (isUserAuthorized) {
      localStorage.setItem(AuthService.storageKey, user.email);
    }
    return isUserAuthorized;
   }

  logout(): void {
    this.storageService.remove(AuthService.storageKey);
  }

  isLogged(): boolean {
    return Boolean(this.storageService.find(AuthService.storageKey));
  }

  getUsername(): string {
    return this.storageService.find(AuthService.storageKey) ?? '';
  }
}
