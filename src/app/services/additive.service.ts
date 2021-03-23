import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdditiveService {

  constructor(
    private _http: HttpClient
  ) { }

  getAll(): Observable<any[]> {
    return this._http.get<any[]>('http://localhost:3000/additives')
  }


  getById(id: string): Observable<any> {
    return this._http.get<any>(`http://localhost:3000/additives/${id}`);
  }

}
