import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../common/services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  isPrivateMenuVisible(): boolean {
    return this.auth.isLogged();
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  getUserName() : string {
    return this.auth.getUsername();
  }
}
