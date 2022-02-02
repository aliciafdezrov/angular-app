import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  isPrivateMenuVisible(): boolean {
    return this.auth.isLogged();
  }

  logout(): void {
    this.auth.logout();
  }

  getUserName() : string {
    return this.auth.getUsername();
  }
}
