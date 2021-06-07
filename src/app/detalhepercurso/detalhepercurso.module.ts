import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhepercursoPageRoutingModule } from './detalhepercurso-routing.module';

import { DetalhepercursoPage } from './detalhepercurso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhepercursoPageRoutingModule
  ],
  declarations: [DetalhepercursoPage]
})
export class DetalhepercursoPageModule {}
