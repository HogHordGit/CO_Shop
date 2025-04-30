import { Routes } from '@angular/router';
import {HomeComponent} from './account/home/home.component';
import {AdminHomeComponent} from './admin-panel/admin-home/admin-home.component';
import {AdminListComponent} from './admin-panel/admin-list/admin-list.component';

export const routes: Routes = [
  {
    path: 'admin-panel',
    component: AdminHomeComponent,
    children: [
      { path: 'list', component: AdminListComponent }
    ]
  },
  { path: 'accounts/home', component: HomeComponent },
  { path: "accounts", redirectTo: "accounts/home", pathMatch: "full"},
  { path: "", redirectTo: "accounts/home", pathMatch: "full"}
];
