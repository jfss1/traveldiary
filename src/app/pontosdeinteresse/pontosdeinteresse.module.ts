import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PontosdeinteressePageRoutingModule } from './pontosdeinteresse-routing.module';

import { PontosdeinteressePage } from './pontosdeinteresse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PontosdeinteressePageRoutingModule
  ],
  declarations: [PontosdeinteressePage]
})
export class PontosdeinteressePageModule {}
