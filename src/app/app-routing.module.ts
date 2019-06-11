import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Form1Component } from "../app/Forms-components/form1/form1.component";
import { DashboardComponent } from "../app/dashboard/dashboard.component";

import {Nuevo2Component} from "../app/Forms-components/nuevo2/nuevo2.component"

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "home", component: Form1Component },
  { path: "nuevo2", component: Nuevo2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
