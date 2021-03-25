import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IAdditive } from 'src/app/interfaces/additive';
import { AdditiveService } from 'src/app/services/additive.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  max = 10;
  min = 0;
  items$: Observable<IAdditive[]>;

  constructor(
    private _api: AdditiveService
  ) { }

  ngOnInit(): void {
    this.items$ = this._api.getAll();
  }

  async loadData($event) {
    this.max = this.max + 10;
    $event.target.complete();
  }

}
