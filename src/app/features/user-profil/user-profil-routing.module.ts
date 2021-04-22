import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfilPageComponent } from './user-profil-page.component';

const routes: Routes = [
  {
    path: '',
    component: UserProfilPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfilRoutingModule { }
