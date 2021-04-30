import {​​ NgModule }​​ from '@angular/core';
import {​​ Routes, RouterModule }​​ from '@angular/router';
import { ActualizarComponent } from './todo/pages/actualizar/actualizar.component';

import {​​ ListaPageComponent }​​ from './todo/pages/lista-page/lista-page.component';
const routes: Routes = [
{​​path: 'lista', component: ListaPageComponent}​​,
{ path: 'actualizar/:id', component: ActualizarComponent },
{​​path: '**', pathMatch: 'full', redirectTo: 'lista'}​​
];
@NgModule({​​
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
}​​)
export class AppRoutingModule {​​ }​​