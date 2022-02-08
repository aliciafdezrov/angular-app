import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../../common/services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
    });
  }

  ngOnInit(): void {
  }

  getEmailErrorMessage(): string {
    if (this.loginForm.get("email")?.hasError("required")) {
      return 'You must enter a value';
    }

    if (this.loginForm.get("email")?.hasError("pattern")) {
      return "Incorrect email. Try: master8@lemoncode.net"
    }

    return 'Not a valid email';
  }

  getPasswordErrorMessage(): string {
    if (this.loginForm.get('password')?.hasError("required")) {
      return 'You must enter a value';
    }

    if (this.loginForm.get('password')?.hasError("minlength")) {
      return 'Your password cannot have less than 8 characters';
    }

    if (this.loginForm.get('password')?.hasError("pattern")) {
      return 'Your password only can container numbers';
    }

    return 'Not a valid password';
  }

  login() {
    const isValidAuthentication = this.authService.login(this.loginForm.value);

    if(isValidAuthentication) {
      this.router.navigate(['/dashboard']);
    }
  }
}
