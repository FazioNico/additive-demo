import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { WikiService } from './services/wiki.service';


@NgModule({
  declarations: [
    DetailComponent
  ],
  providers: [
    WikiService
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    IonicModule,
    SharedModule
  ]
})
export class DetailModule { }
