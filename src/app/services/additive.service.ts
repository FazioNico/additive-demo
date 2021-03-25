import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAdditive } from '../interfaces/additive';
import { catchError } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AdditiveService {

  constructor(
    private _http: HttpClient,
    private _alert: AlertController
  ) { }

  getAll(): Observable<IAdditive[]> {
    return this._http.get<IAdditive[]>('http://localhost:3000/additives')
  }


  getById(id: string): Observable<IAdditive> {
    return this._http.get<IAdditive>(`http://localhost:3000/additives/${id}`).pipe(
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
