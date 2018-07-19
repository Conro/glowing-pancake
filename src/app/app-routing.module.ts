import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ResultsComponent} from "./results/results.component";
import {MemberFormComponent} from "./member-form/member-form.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/form', pathMatch: 'full'},
  {path: 'results', component: ResultsComponent},
  {path: 'form', component: MemberFormComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
