import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAdditive } from '../interfaces/additive';

@Injectable({
  providedIn: 'root'
})
export class AdditiveService {

  constructor(
    private _http: HttpClient
  ) { }

  getAll(): Observable<IAdditive[]> {
    return this._http.get<IAdditive[]>('http://localhost:3000/additives')
  }


  getById(id: string): Observable<IAdditive> {
    return this._http.get<IAdditive>(`http://localhost:3000/additives/${id}`);
  }

}
