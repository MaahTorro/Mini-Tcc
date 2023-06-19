import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrodoisPageRoutingModule } from './cadastrodois-routing.module';

import { CadastrodoisPage } from './cadastrodois.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrodoisPageRoutingModule
  ],
  declarations: [CadastrodoisPage]
})
export class CadastrodoisPageModule {}
