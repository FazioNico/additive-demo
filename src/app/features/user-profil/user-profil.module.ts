import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfilRoutingModule } from './user-profil-routing.module';
import { UserProfilPageComponent } from './user-profil-page.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [UserProfilPageComponent],
  imports: [
    CommonModule,
    UserProfilRoutingModule,
    IonicModule
  ]
})
export class UserProfilModule { }
