import { NgModule } from '@angular/core';
import {AdminHomeComponent} from './admin-home/admin-home.component';
import {AdminListComponent} from './admin-list/admin-list.component';
import {AdminUsersComponent} from './admin-users/admin-users.component';
import {AdminClothesComponent} from './admin-clothes/admin-clothes.component';



@NgModule({
  declarations: [AdminHomeComponent, AdminListComponent, AdminUsersComponent, AdminClothesComponent],
    imports: [

    ],
    exports: [

    ]
})
export class AdminPanelModule { }
