import { Routes } from '@angular/router';
import {HomeComponent} from './account/home/home.component';
import {AdminHomeComponent} from './admin-panel/admin-home/admin-home.component';
import {AdminListComponent} from './admin-panel/admin-list/admin-list.component';
import {AdminUsersComponent} from './admin-panel/admin-users/admin-users.component';

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
  { path: 'accounts/home', component: HomeComponent },
  { path: "accounts", redirectTo: "accounts/home", pathMatch: "full"},
  { path: "", redirectTo: "accounts/home", pathMatch: "full"}
];
