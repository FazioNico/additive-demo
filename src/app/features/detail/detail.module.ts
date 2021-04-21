import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { WikiService } from './services/wiki.service';
import { FavService } from './services/fav.service';


@NgModule({
  declarations: [
    DetailComponent
  ],
  providers: [
    WikiService,
    FavService
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    IonicModule,
    SharedModule
  ]
})
export class DetailModule { }
