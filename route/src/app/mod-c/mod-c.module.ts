import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ModCRoutingModule } from './mod-c-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ModCRoutingModule,
  ]
})
export class ModCModule { }
