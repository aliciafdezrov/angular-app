import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from "../../material.module";
import {RotateComponent} from "./rotate.component";
import {RotateDirective} from "./directives/rotate.directive";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [
    RotateDirective,
    RotateComponent,
  ],
  exports: [
    RotateComponent
  ]
})
export class RotateModule { }
