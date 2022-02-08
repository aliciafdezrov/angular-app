import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MaterialModule} from "../../material.module";
import {ToolbarComponent} from "./toolbar.component";
import {MenuComponent} from "./components/menu/menu.component";
import {PublicMenuComponent} from "./components/public-menu/public-menu.component";
import {AppRoutingModule} from "../../app-routing.module";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
  ],
  declarations: [
    MenuComponent,
    PublicMenuComponent,
    ToolbarComponent,
  ],
  exports: [
    ToolbarComponent
  ]
})
export class ToolbarModule { }
