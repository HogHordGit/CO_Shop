import {AfterViewInit, Component} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {AdminPanelService} from '../admin-panel.service';
import {AdminsInterface} from '../admin-panel-interface';

@Component({
  selector: 'app-admin-list',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatTableModule],
  templateUrl: './admin-list.component.html',
  styleUrl: './admin-list.component.scss'
})
export class AdminListComponent implements AfterViewInit{
  displayedColumns: string[] = ["id", "login", "password"];
  dataSource = new MatTableDataSource<AdminsInterface>();

  constructor(private adminPanelService: AdminPanelService) {}

  admin:AdminsInterface = {
    id: 0,
    login: "",
    password: ""
  }

  admins:AdminsInterface[] = [];

  ngAfterViewInit() {
    this.adminPanelService.fetchAllAdmins().subscribe((data) => {
      this.admins = data;
      this.dataSource = new MatTableDataSource<AdminsInterface>(data);
    })
  }
}
