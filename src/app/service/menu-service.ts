import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MenuItem } from '../model/menu';
import { BeachMenuResponse } from '../model/beach-menu-response';
import { BeachMenu } from '../model/beach-menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  isLoading = false;
  hasError = false;

  //private baseBeachURL = "http://localhost:8080/api/menu";
  private baseURL = 'https://menu-go-be-beach-test.up.railway.app/api/menu';
  private baseBeachURL = 'https://menu-go-be-beach-test.up.railway.app/api/menu';

  constructor(private httpClient: HttpClient) { }

  getMenuList(lang: string): Observable<MenuItem[]> {
    const url = `${this.baseURL}/restaurant?lang=${lang}`;
    return this.httpClient.get<MenuItem[]>(url);
  }

  getBeachMenuList(lang: string): Observable<BeachMenuResponse[]> {
    const url = `${this.baseBeachURL}/beach?lang=${lang}`;
    return this.httpClient.get<BeachMenuResponse[]>(url);
  }

  create(menu: Partial<BeachMenu>) {
    return this.httpClient.post<BeachMenu>(`${this.baseBeachURL}/create`, menu);
  }

  delete(id: number) {
    return this.httpClient.delete<void>(`${this.baseBeachURL}/${id}`);
  }

  getById(id: number) {
  return this.httpClient.get<BeachMenu>(`${this.baseBeachURL}/${id}`);
 }

  edit(id: number, menu: Partial<BeachMenu>) {
    return this.httpClient.put<Observable<BeachMenu>>(`${this.baseBeachURL}/${id}`,menu);
  }
}
