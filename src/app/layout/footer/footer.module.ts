import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MaterialModule} from "../../material.module";
import {FooterComponent} from "./footer.component";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
  ],
  declarations: [
    FooterComponent
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
