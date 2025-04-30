import {AfterViewInit, Component} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { AccountInterface } from '../account-interface';
import {AccountService} from '../account.service';

@Component({
  selector: 'app-home',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatTableModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit{
  displayedColumns: string[] = ['id', 'name', 'login', 'password', 'balance'];
  dataSource = new MatTableDataSource<AccountInterface>();

  balance:any = undefined;
  constructor(private accountService: AccountService) {}

  account:AccountInterface = {
    name: "",
    login: "",
    password: "",
    balance: this.balance,
    id: 0
  }

  accounts:AccountInterface[] = [];

  ngAfterViewInit() {
    this.accountService.fetchAllAccounts().subscribe((data) => {
      this.accounts = data;
      this.dataSource = new MatTableDataSource<AccountInterface>(data);
    })
  }
}
