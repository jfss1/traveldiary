import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarpercursosPage } from './criarpercursos.page';

const routes: Routes = [
  {
    path: '',
    component: CriarpercursosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriarpercursosPageRoutingModule {}
