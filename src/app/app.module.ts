import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './scenes/app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CrudComponent } from './components/crud/crud.component';
import { ProfileComponent } from './components/profile/profile.component';
import {MaterialModule} from './material.module';
import {RotateModule} from "./pods/rotate/rotate.module";
import {LoginModule} from "./pods/login/login.module";
import {ToolbarModule} from "./layout/toolbar/toolbar.module";
import {FooterModule} from "./layout/footer/footer.module";
import {GalleryModule} from "./pods/gallery/gallery.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DashboardComponent,
    CrudComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RotateModule,
    GalleryModule,
    LoginModule,
    ToolbarModule,
    FooterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
