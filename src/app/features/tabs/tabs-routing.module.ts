import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs.component';
import { AngularFireAuthGuard, canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedUser = () => redirectUnauthorizedTo(['tabs/search']);

const routes: Routes = [
  {path: '', component: TabsComponent, children: [
    {
      path: 'list',
      loadChildren: () => import('../list/list.module')
                          .then(m => m.ListModule)
    },
    {
      path: 'search',
      loadChildren: () => import('../search/search.module')
                          .then(m => m.SearchModule)
    },
    {
      path: 'detail',
      loadChildren: () => import('../detail/detail.module')
                          .then(m => m.DetailModule)
    },
    {
      path: 'profil',
      ...canActivate(redirectUnauthorizedUser),
      // canActivate: [AngularFireAuthGuard],
      loadChildren: () => import('../user-profil/user-profil.module')
                          .then(m => m.UserProfilModule)
    },
    {
      path: '',
      redirectTo: 'list',
      pathMatch: 'full'
    }
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule { }
