import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {AdminPanelService} from '../../shared/services/admin-panel.service';

import {MatSort, MatSortModule} from '@angular/material/sort';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {adminPanelListURL} from '../../shared/DbLinks/UrlLinks';
import {AdminsInterface} from '../../shared/types/admin-panel-admins-interface';

@Component({
  selector: 'app-admin-list',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatTableModule,
    MatSortModule, MatPaginatorModule, CommonModule, FormsModule],
  templateUrl: './admin-list.component.html',
  standalone: true,
  styleUrl: './admin-list.component.scss'
})
export class AdminListComponent implements AfterViewInit{
  displayedColumns: string[] = ["id", "login", "password", "edit", "delete"];
  dataSource = new MatTableDataSource<AdminsInterface>();

  baseAdminListURL = adminPanelListURL;

  constructor(private adminPanelService: AdminPanelService) {}

  @ViewChild(MatSort) sort: any;
  @ViewChild(MatPaginator) paginator: any;

  admin:AdminsInterface = {
    id: 0,
    login: "",
    password: "",
    token: ""
  }

  admins:AdminsInterface[] = [];
  filteredAdmins:AdminsInterface[] = [];

  ngAfterViewInit() {
    this.adminPanelService.fetchAllData(this.baseAdminListURL).subscribe((data) => {
      this.admins = data;
      this.dataSource = new MatTableDataSource<AdminsInterface>(data);

      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, 100);
    })
  }

  searchAdmin(input: any) {
    this.filteredAdmins = this.admins.filter(item =>
      item.login.toLowerCase().includes(input.toLowerCase()) ||
      item.id.toString().includes(input)
    );

    this.dataSource = new MatTableDataSource<AdminsInterface>(this.filteredAdmins);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  PostPutAdmin(admin:AdminsInterface) {
    if (admin.id !== 0) {
      this.adminPanelService.updateData(admin, this.baseAdminListURL).subscribe({
        next: (data) => {
          console.log(`Admin updated Successfully!`);
          window.location.reload();
        },
        error: (err) => {
          console.log(err);
          window.location.reload();
        }
      })
    } else {
      this.adminPanelService.createData(admin, this.baseAdminListURL).subscribe({
        next: (data) => {
          console.log(`New Admin created Successfully!`);
          window.location.reload();
        },
        error: (err) => {
          console.log(err);
          window.location.reload();
        }
      })
    }
  }

  putAdminFormField(admin: AdminsInterface) {
    this.admin.id = admin.id;
    this.admin.login = admin.login;
    this.admin.password = admin.password;
  }

  deleteAdminFormField(id: Number) {
    const  isConfirmed = window.confirm("Are you sure you want to DELETE?");

    if (isConfirmed) {
      this.adminPanelService.deleteData(id, this.baseAdminListURL).subscribe((data) => {
        this.admins = this.admins.filter(item => item.id !== id);

        window.location.reload();
      });
    }
  }
}
