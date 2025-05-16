import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {adminPanelUsersURL} from '../../shared/DbLinks/UrlLinks';
import {AdminPanelService} from '../../shared/services/admin-panel.service';
import {UsersInterface} from '../../shared/types/admin-panel-users-interface';

@Component({
  selector: 'app-admin-users',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatTableModule,
    MatSortModule, MatPaginatorModule, CommonModule, FormsModule],
  templateUrl: './admin-users.component.html',
  standalone: true,
  styleUrl: './admin-users.component.scss'
})
export class AdminUsersComponent implements AfterViewInit{
  displayedColumns: string[] = ["id", "login", "password", "name", "balance", "edit", "delete"];
  dataSource = new MatTableDataSource<UsersInterface>();

  baseAdminListURL = adminPanelUsersURL;

  constructor(private adminPanelService: AdminPanelService) {}

  @ViewChild(MatSort) sort: any;
  @ViewChild(MatPaginator) paginator: any;

  user:UsersInterface = {
    id: 0,
    login: "",
    password: "",
    name: "",
    balance: 0
  }

  users:UsersInterface[] = [];
  filteredAdmins:UsersInterface[] = [];

  ngAfterViewInit() {
    this.adminPanelService.fetchAllData(this.baseAdminListURL).subscribe((data) => {
      this.users = data;
      this.dataSource = new MatTableDataSource<UsersInterface>(data);

      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, 100);
    })
  }

  searchUser(input: any) {
    this.filteredAdmins = this.users.filter(item =>
      item.login.toLowerCase().includes(input.toLowerCase()) ||
      item.name.toLowerCase().includes(input.toLowerCase()) ||
      item.balance.toString().includes(input) ||
      item.id.toString().includes(input)
    );

    this.dataSource = new MatTableDataSource<UsersInterface>(this.filteredAdmins);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  PostPutAdmin(user:UsersInterface) {
    if (user.id !== 0) {
      this.adminPanelService.updateData(user, this.baseAdminListURL).subscribe({
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
      this.adminPanelService.createData(user, this.baseAdminListURL).subscribe({
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

  putAdminFormField(user: UsersInterface) {
    this.user.id = user.id;
    this.user.login = user.login;
    this.user.password = user.password;
    this.user.name = user.name;
    this.user.balance = user.balance;
  }

  deleteAdminFormField(id: Number) {
    const  isConfirmed = window.confirm("Are you sure you want to DELETE?");

    if (isConfirmed) {
      this.adminPanelService.deleteData(id, this.baseAdminListURL).subscribe((data) => {
        this.users = this.users.filter(item => item.id !== id);

        window.location.reload();
      });
    }
  }
}
