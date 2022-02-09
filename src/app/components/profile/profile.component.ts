import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../common/services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  getUserName() : string {
    return this.auth.getUsername();
  }
}
