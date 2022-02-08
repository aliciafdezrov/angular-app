import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CrudComponent } from './crud/crud.component';
import { ProfileComponent } from './profile/profile.component';
import {MenuComponent} from "./layout/menu/menu.component";
import {MaterialModule} from './material.module';
import {ToolbarComponent} from "./layout/toolbar/toolbar.component";
import {PublicMenuComponent} from "./layout/public-menu/public-menu.component";
import {FooterComponent} from "./layout/footer/footer.component";
import {GalleryModule} from "./gallery/gallery.module";
import {RotateComponent} from "./rotate/rotate.component";
import {RotateDirective} from "./directives/rotate.directive";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    DashboardComponent,
    CrudComponent,
    ProfileComponent,
    ToolbarComponent,
    PublicMenuComponent,
    FooterComponent,
    RotateComponent,
    RotateDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    GalleryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
