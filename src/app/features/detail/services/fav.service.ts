import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { IAdditive } from '../../../interfaces/additive';

@Injectable()
export class FavService {

  private _fav$: BehaviorSubject<Partial<IAdditive & {key: string}>[]> = new BehaviorSubject([]);
  favs$ = this._fav$.asObservable();

  constructor(
    private _firestore: AngularFirestore
  ) {
    console.log('[INFO] init FavService...');
    this._firestore
      .collection<IAdditive & {key: string}>('fav-additive')
      .stateChanges(['added'])
      .pipe(
        map(actions => actions.map(a => {
          const key = a.payload.doc.id;
          const data = a.payload.doc.data();
          return {key, ...data};
        }))
      )
      .subscribe(
        res => {
          const currentState = this._fav$.value.filter(
            additive => !res.find(newA => newA.id === additive.id)
          );
          const newState = [
            ...currentState,
            ...res
          ];
          this._fav$.next(newState);
        }
      );
    this._firestore
      .collection<IAdditive & {key: string}>('fav-additive')
      .stateChanges(['removed'])
      .pipe(
        map(actions => actions.map(a => {
          const key = a.payload.doc.id;
          const data = a.payload.doc.data();
          return {key, ...data};
        }))
      )
      .subscribe(
        res => {
          const currentState = this._fav$.value.filter(
            additive => !res.find(newA => newA.id === additive.id)
          );
          const newState = [
            ...currentState
          ];
          this._fav$.next(newState);
        }
      );
  }

  isFav$(id: string): Observable<boolean> {
    return this._fav$.pipe(
      map(favs => favs.find(fav => fav.id === id)),
      map(Boolean)
    );
  }

  async add(fav: {id: string}): Promise<void> {
    await this._firestore.collection('fav-additive').add(fav);
  }

  async remove(id: string): Promise<void> {
    const fav = await this._fav$.pipe(
      first(),
      map(favs => favs.find(fav => fav.id === id))
    ).toPromise();
    const key = fav.key;
    await this._firestore.collection('fav-additive').doc(key).delete();
  }
}
