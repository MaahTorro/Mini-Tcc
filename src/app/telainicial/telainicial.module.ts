import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelainicialPageRoutingModule } from './telainicial-routing.module';

import { TelainicialPage } from './telainicial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelainicialPageRoutingModule
  ],
  declarations: [TelainicialPage]
})
export class TelainicialPageModule {}
