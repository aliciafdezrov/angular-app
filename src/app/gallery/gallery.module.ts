import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {PhotosListComponent} from "./photos-list/photos-list.component";
import {PhotoDetailComponent} from "./photo-detail/photo-detail.component";
import {GalleryComponent} from "./gallery.component";
import {SlicePipe} from "../pipes/slice.pipe";
import {MaterialModule} from "../material.module";
import {RotateDirective} from "../directives/rotate.directive";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
  ],
  declarations: [
    PhotosListComponent,
    PhotoDetailComponent,
    GalleryComponent,
    SlicePipe,
    RotateDirective,
  ],
  exports: [
    GalleryComponent
  ]
})
export class GalleryModule { }
