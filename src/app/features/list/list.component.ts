import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IAdditive } from 'src/app/interfaces/additive';
import { AdditiveService } from 'src/app/services/additive.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  items$: Observable<IAdditive[]>;

  constructor(
    private _api: AdditiveService
  ) { }

  ngOnInit(): void {
    this.items$ = this._api.getAll();
  }

}
