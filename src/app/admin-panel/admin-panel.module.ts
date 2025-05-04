import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {AdminHomeComponent} from './admin-home/admin-home.component';
import {AdminListComponent} from './admin-list/admin-list.component';
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
import {MatFormField, MatSuffix} from '@angular/material/form-field.d-BJpDa0PI';
import {MatIcon} from '@angular/material/icon-module.d-BeibE7j0';
import {MatInput} from '@angular/material/input';
import {MatPaginator} from '@angular/material/paginator.d-BpWCCOIR';



@NgModule({
  declarations: [AdminHomeComponent, AdminListComponent],
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
