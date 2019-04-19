import { NgModule } from '@angular/core';
import {TabViewModule} from 'primeng/tabview';

@NgModule({
  imports: [
    TabViewModule,
  ],
  exports: [
    TabViewModule,
  ]
})
export class PrimeUiModule { }
