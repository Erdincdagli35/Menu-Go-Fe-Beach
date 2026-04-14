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

  private baseBeachURL = "http://localhost:8080/api/menu";
  private baseURL = 'https://menu-go-be-production.up.railway.app/api/menu';
  //private baseBeachURL = 'https://menu-go-be-beach-production.up.railway.app/api/menu/beach';

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
}