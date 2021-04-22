import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsRoutingModule } from './tabs-routing.module';
import { TabsComponent } from './tabs.component';
import { IonicModule } from '@ionic/angular';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard'

@NgModule({
  declarations: [TabsComponent],
  imports: [
    CommonModule,
    TabsRoutingModule,
    IonicModule,
    AngularFireAuthGuardModule
  ]
})
export class TabsModule { }
