import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {AdminHomeComponent} from './admin-home/admin-home.component';
import {AdminListComponent} from './admin-list/admin-list.component';
import {AdminUsersComponent} from './admin-users/admin-users.component';
import {MatButton} from '@angular/material/button';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable
} from '@angular/material/table';
import {MatFormField, MatSuffix} from '@angular/material/form-field';
import {MatIcon} from '@angular/material/icon';
import {MatInput} from '@angular/material/input';
import {MatPaginator} from '@angular/material/paginator';
import {AdminClothesComponent} from './admin-clothes/admin-clothes.component';



@NgModule({
  declarations: [AdminHomeComponent, AdminListComponent, AdminUsersComponent, AdminClothesComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatButton,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatFormField,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatIcon,
    MatInput,
    MatRow,
    MatRowDef,
    MatSuffix,
    MatTable,
    MatPaginator
  ]
})
export class AdminPanelModule { }
