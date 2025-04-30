import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AccountInterface} from './account-interface';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private _httpClient: HttpClient) { }

  baseUrl:String = "/api/v1/accounts";

  fetchAllAccounts():Observable<AccountInterface[]> {
    return this._httpClient.get<AccountInterface[]>(`${this.baseUrl}`);
  }
}
