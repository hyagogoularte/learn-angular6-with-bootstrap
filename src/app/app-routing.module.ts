import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AppCustomPreloader } from './app-routing-loader';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Segundo o style guide é interessante separar a aplicação em módulos,
// aqui eu implemento o preloadingStrategy em cada módulo (escolhendo
// se quero o preload ou não só setando pra true ou false)

// Home/About/PageNotFound como component ou módulo (dependendo da necessidade)
// Footer/Header/Layout são o core da aplicação

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'contacts',
    loadChildren: './modules/contact/contact.module#ContactModule',
    data: { preload: true }
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: AppCustomPreloader })
  ],
  exports: [RouterModule],
  providers: [AppCustomPreloader]
})
export class AppRoutingModule { }
