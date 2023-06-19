import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelainicialPage } from './telainicial.page';

const routes: Routes = [
  {
    path: '',
    component: TelainicialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelainicialPageRoutingModule {}
