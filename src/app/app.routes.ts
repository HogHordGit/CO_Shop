import { Routes } from '@angular/router';
import {AdminHomeComponent} from './admin-panel/admin-home/admin-home.component';
import {AdminListComponent} from './admin-panel/admin-list/admin-list.component';
import {AdminUsersComponent} from './admin-panel/admin-users/admin-users.component';
import {AdminClothesComponent} from './admin-panel/admin-clothes/admin-clothes.component';
import {SiteHomeComponent} from './main-site/site-home/site-home.component';
import {SiteContentComponent} from './main-site/site-content/site-content.component';
import {AdminLoginComponent} from './admin-panel/admin-login/admin-login.component';
import {AuthGuard} from './shared/guards/auth.guard';
import {SiteDetailComponent} from './main-site/site-detail/site-detail.component';

export const routes: Routes = [
  { path: "home", redirectTo: "home/main-site", pathMatch: "full"},
  { path: "", redirectTo: "home", pathMatch: "full"},
  {
    path: 'home',
    component: SiteHomeComponent,
    children: [
      { path: 'main-site', component: SiteContentComponent },
      { path: 'detail/:id', component: SiteDetailComponent }
    ]
  },
  { path: 'admin-panel/login', component: AdminLoginComponent },
  {
    path: 'admin-panel',
    component: AdminHomeComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: 'admins', component: AdminListComponent },
      { path: 'users', component: AdminUsersComponent },
      { path: 'clothes', component: AdminClothesComponent },
      { path: '', redirectTo: 'admins', pathMatch: 'full' }, // /admin-panel -> /admin-panel/admins
    ]
  },
];
