import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../../../common/services/auth/auth.service";
import {UserEntity} from "../../../../common/model/userEntity";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
