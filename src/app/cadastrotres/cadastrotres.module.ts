import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrotresPageRoutingModule } from './cadastrotres-routing.module';

import { CadastrotresPage } from './cadastrotres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrotresPageRoutingModule
  ],
  declarations: [CadastrotresPage]
})
export class CadastrotresPageModule {}
