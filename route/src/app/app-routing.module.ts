import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'moda', loadChildren: './mod-a/mod-a.module#ModAModule'},
  {path: 'modb', loadChildren: './mod-b/mod-b.module#ModBModule'},
  {path: 'modc', loadChildren: './mod-c/mod-c.module#ModCModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
