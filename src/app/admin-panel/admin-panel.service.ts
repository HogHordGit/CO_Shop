import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AdminsInterface} from './admin-panel-interface';

@Injectable({
  providedIn: 'root'
})
export class AdminPanelService {

  constructor(private _httpClient: HttpClient) { }

  baseURL = "/api/v1/admins";

  fetchAllAdmins():Observable<AdminsInterface[]> {
    return this._httpClient.get<AdminsInterface[]>(`${this.baseURL}`);
  }

  createAdmin(data:AdminsInterface) {
    return this._httpClient.post<AdminsInterface>(`${this.baseURL}`, data);
  }
}
