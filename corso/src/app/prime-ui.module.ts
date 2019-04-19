import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  imports: [
    ButtonModule,
    TableModule,
    InputTextModule,
  ],
  exports: [
    ButtonModule,
    TableModule,
    InputTextModule,
  ]
})
export class PrimeUiModule { }
