import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { IonicModule } from '@ionic/angular';
import { LevelPipe } from 'src/app/pipes/level/level.pipe';


@NgModule({
  declarations: [
    DetailComponent,
    LevelPipe
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    IonicModule
  ]
})
export class DetailModule { }
