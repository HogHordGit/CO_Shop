import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {AdminHomeComponent} from './admin-home/admin-home.component';
import {AdminListComponent} from './admin-list/admin-list.component';



@NgModule({
  declarations: [AdminHomeComponent, AdminListComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AdminPanelModule { }
