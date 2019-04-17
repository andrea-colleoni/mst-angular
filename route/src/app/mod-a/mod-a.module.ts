import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ModARoutingModule } from './mod-a-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    ModARoutingModule,
  ]
})
export class ModAModule { }
