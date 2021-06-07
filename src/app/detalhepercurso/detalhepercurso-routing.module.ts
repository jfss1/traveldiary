import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhepercursoPage } from './detalhepercurso.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhepercursoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhepercursoPageRoutingModule {}
