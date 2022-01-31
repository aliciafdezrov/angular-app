import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {LoginComponent} from "./login/login.component";
import {CrudComponent} from "./crud/crud.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'crud',
    component: CrudComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
