import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminPanelService {

  constructor(private _httpClient: HttpClient) { }

  fetchAllData(url: String):Observable<any> {
    return this._httpClient.get<any>(`${url}`);
  }

  createData(data:any, url:String) {
    return this._httpClient.post<any>(`${url}`, data);
  }

  updateData(data:any, url: String) {
    return this._httpClient.put<any>(`${url}/${data.id}`, data);
  }

  deleteData(id: Number, url: String) {
    return this._httpClient.delete<any>(`${url}/${id}`);
  }
}
