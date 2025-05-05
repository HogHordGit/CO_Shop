import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AdminsInterface} from './admin-panel-interface';

@Injectable({
  providedIn: 'root'
})
export class AdminPanelService {

  constructor(private _httpClient: HttpClient) { }

  fetchAllAdmins(url: String):Observable<AdminsInterface[]> {
    return this._httpClient.get<AdminsInterface[]>(`${url}`);
  }

  createAdmin(data:AdminsInterface, url:String) {
    return this._httpClient.post<AdminsInterface>(`${url}`, data);
  }

  updateAdmin(data:AdminsInterface, url: String) {
    return this._httpClient.put<AdminsInterface>(`${url}/${data.id}`, data);
  }

  deleteAdmin(id: Number, url: String) {
    return this._httpClient.delete<AdminsInterface>(`${url}/${id}`);
  }
}
