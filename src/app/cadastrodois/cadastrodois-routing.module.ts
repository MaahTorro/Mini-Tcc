import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrodoisPage } from './cadastrodois.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrodoisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrodoisPageRoutingModule {}
