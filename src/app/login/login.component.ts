import { Component, OnInit } from '@angular/core';
import {ValidationErrors} from '@angular/forms';
import {AuthService} from "../services/auth.service";
import {UserEntity} from "../model/userEntity";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user: UserEntity;

  constructor(private authService: AuthService, private router: Router) {
    this.user = {
      email: '',
      password: '',
    }
  }

  ngOnInit(): void {
  }

  getEmailErrorMessage(emailErrors: ValidationErrors | null): string {
    if(!emailErrors) return '';

    if (emailErrors["required"]) {
      return 'You must enter a value';
    }

    if (emailErrors["pattern"]) {
      return "Incorrect email. Try: master8@lemoncode.net"
    }

    return 'Not a valid email';
  }

  getPasswordErrorMessage(passwordErrors: ValidationErrors | null): string {
    if(!passwordErrors) return '';

    if (passwordErrors["required"]) {
      return 'You must enter a value';
    }

    if (passwordErrors["minlength"]) {
      return 'Your password cannot have less than 8 characters';
    }

    if (passwordErrors["pattern"]) {
      return 'Your password only can container numbers';
    }

    return 'Not a valid password';
  }

  login() {
    const isValidAuthentication = this.authService.login(this.user);

    if(isValidAuthentication) {
      this.router.navigate(['/dashboard']);
    }
  }
}
