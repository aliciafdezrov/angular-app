import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {LoginComponent} from "./pods/login/login.component";
import {CrudComponent} from "./components/crud/crud.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {RotateComponent} from "./pods/rotate/rotate.component";
import {GalleryComponent} from "./pods/gallery/gallery.component";

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
    component: GalleryComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'rotate',
    component: RotateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
