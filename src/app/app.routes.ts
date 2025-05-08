import { Routes } from '@angular/router';
import {AdminHomeComponent} from './admin-panel/admin-home/admin-home.component';
import {AdminListComponent} from './admin-panel/admin-list/admin-list.component';
import {AdminUsersComponent} from './admin-panel/admin-users/admin-users.component';
import {AdminClothesComponent} from './admin-panel/admin-clothes/admin-clothes.component';
import {AppComponent} from './app.component';

export const routes: Routes = [
  {
    path: 'admin-panel',
    component: AdminHomeComponent,
    children: [
      { path: 'admins', component: AdminListComponent }
    ]
  },
  {
    path: 'admin-panel',
    component: AdminHomeComponent,
    children: [
      { path: 'users', component: AdminUsersComponent }
    ]
  },
  {
    path: 'admin-panel',
    component: AdminHomeComponent,
    children: [
      { path: 'clothes', component: AdminClothesComponent }
    ]
  },
  { path: 'home', component: AppComponent },
  { path: "", redirectTo: "home", pathMatch: "full"}
];
