import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarpercursosPageRoutingModule } from './criarpercursos-routing.module';

import { CriarpercursosPage } from './criarpercursos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarpercursosPageRoutingModule
  ],
  declarations: [CriarpercursosPage]
})
export class CriarpercursosPageModule {}
