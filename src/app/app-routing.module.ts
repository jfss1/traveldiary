import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'percursos',
    loadChildren: () => import('./percursos/percursos.module').then( m => m.PercursosPageModule)
  },
  {
    path: 'criarpercursos',
    loadChildren: () => import('./criarpercursos/criarpercursos.module').then( m => m.CriarpercursosPageModule)
  },
  {
    path: 'pontosdeinteresse',
    loadChildren: () => import('./pontosdeinteresse/pontosdeinteresse.module').then( m => m.PontosdeinteressePageModule)
  },
  {
    path: 'detalhepercurso',
    loadChildren: () => import('./detalhepercurso/detalhepercurso.module').then( m => m.DetalhepercursoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
