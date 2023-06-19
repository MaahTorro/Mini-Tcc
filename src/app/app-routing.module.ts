import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'cadastrodois',
    loadChildren: () => import('./cadastrodois/cadastrodois.module').then( m => m.CadastrodoisPageModule)
  },
  {
    path: 'cadastrotres',
    loadChildren: () => import('./cadastrotres/cadastrotres.module').then( m => m.CadastrotresPageModule)
  },
  {
    path: 'telainicial',
    loadChildren: () => import('./telainicial/telainicial.module').then( m => m.TelainicialPageModule)
  },
  {
    path: 'lembretes',
    loadChildren: () => import('./lembretes/lembretes.module').then( m => m.LembretesPageModule)
  },
  {
    path: 'estoque',
    loadChildren: () => import('./estoque/estoque.module').then( m => m.EstoquePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
