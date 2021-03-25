import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { IAdditive } from 'src/app/interfaces/additive';
import { AdditiveService } from 'src/app/services/additive.service';
import { WikiService } from './services/wiki.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  item$: Observable<IAdditive>;
  itemDesc$: Observable<any>;
  itemPromise: IAdditive;

  constructor(
    private _api: AdditiveService,
    private _route: ActivatedRoute,
    private _wiki: WikiService
  ) { }

  ngOnInit(): void {
    const {id = null} = this._route.snapshot.params;
    console.log('----->', id);
    this.item$ = this._api.getById(id);
    this.itemDesc$ = this._wiki.getById(id);
    this.loadPromise(id);
  }

  async loadPromise(id) {
    this.itemPromise = await this._api.getById(id).pipe(first()).toPromise();
  }

}
