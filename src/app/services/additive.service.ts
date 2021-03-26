import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAdditive } from '../interfaces/additive';
import { catchError, map } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AdditiveService {

  url = {
    backend: 'http://localhost:3000/additives',
    assets: './assets/db.json'
  }

  constructor(
    private _http: HttpClient,
    private _alert: AlertController
  ) { }

  getAll(): Observable<IAdditive[]> {
    return this._http.get(this.url.assets).pipe(
      map((response: {additives: IAdditive[]}) => response.additives)
    );
  }


  getById(id: string): Observable<IAdditive> {
    return this._http.get(this.url.assets).pipe(
      map((response: {additives: IAdditive[]}) => {
        // console.log('--->', response.additives.find(a => a.id === id));
        return response.additives.find(a => a.id === id);
      }),
      catchError(async (err) => {
        const ionAlert = await this._alert.create({
          header: 'Erreur',
          message: err?.statusText || 'Une ereur est survenue...',
          buttons: [
            {text: 'ok'}
          ]
        });
        await ionAlert.present();
        const data = await ionAlert.onDidDismiss();
        throw err;
      })
    );
  }

}
