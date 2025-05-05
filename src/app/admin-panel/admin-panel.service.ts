import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AdminsInterface} from './admin-panel-interface';

@Injectable({
  providedIn: 'root'
})
export class AdminPanelService {

  constructor(private _httpClient: HttpClient) { }

  fetchAllAdmins(url: String):Observable<any> {
    return this._httpClient.get<any>(`${url}`);
  }

  createAdmin(data:any, url:String) {
    return this._httpClient.post<any>(`${url}`, data);
  }

  updateAdmin(data:any, url: String) {
    return this._httpClient.put<any>(`${url}/${data.id}`, data);
  }

  deleteAdmin(id: Number, url: String) {
    return this._httpClient.delete<any>(`${url}/${id}`);
  }
}
