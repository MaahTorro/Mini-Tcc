import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrotresPage } from './cadastrotres.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrotresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrotresPageRoutingModule {}
