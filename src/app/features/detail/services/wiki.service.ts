import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class WikiService {

  constructor(
    private _http: HttpClient
  ) { }


  getById(id: string): Observable<any> {
    return this._http.get<any>(`https://fr.wikipedia.org/api/rest_v1/page/summary/E${id}`).pipe();
  }

}
