import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

import { Routes as RoutesConfigured } from 'routes';

const routes: Routes = [
  { path: '', redirectTo: '/' + RoutesConfigured.Dashboard, pathMatch: 'full' },
  { path: RoutesConfigured.Dashboard, component: DashboardComponent },
  { path: RoutesConfigured.Detail + '/:id', component: HeroDetailComponent },
  { path: RoutesConfigured.Heroes, component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class Brand2RoutingModule {}
