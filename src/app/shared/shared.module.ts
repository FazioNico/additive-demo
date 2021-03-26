import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PIPES } from './pipes';
import { COMPONENTS } from './components';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    ...PIPES,
    ...COMPONENTS
  ],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [
    ...PIPES,
    ...COMPONENTS
  ]
})
export class SharedModule { }
