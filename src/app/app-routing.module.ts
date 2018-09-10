import { Contact2Component } from './contact2/contact2.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full',
}, {
  path: 'home',
  component: HomeComponent,
  data: { title: 'Hooome' }
}, {
  path: 'about',
  component: AboutComponent,
  data: { title: 'Abooout' }
}, {
  path: 'contact',
  component: ContactComponent,
  data: { title: 'Cooontact' }
}, {
  path: 'contact2',
  component: Contact2Component,
  data: { title: 'Cooontact 2' }
}, {
  path: '**',
  component: PageNotFoundComponent,
  data: { title: 'Nooooo' }
}];

@NgModule({
  imports: [RouterModule.forRoot(
    routes, {
      enableTracing: true
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
