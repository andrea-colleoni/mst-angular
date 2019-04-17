import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ModBRoutingModule } from './mod-b-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    ModBRoutingModule,
  ]
})
export class ModBModule { }
