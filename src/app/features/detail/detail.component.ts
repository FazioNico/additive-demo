import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { AdditiveService } from 'src/app/services/additive.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  item$: Observable<any>;
  itemPromise: any;

  constructor(
    private _api: AdditiveService
  ) { }

  ngOnInit(): void {
    this.item$ = this._api.getById('100');
    this.loadPromise()
  }

  async loadPromise() {
    this.itemPromise = await this._api.getById('100').pipe(first()).toPromise();
  }

}
