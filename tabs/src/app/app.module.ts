import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeUiModule } from './prime-ui.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeUiModule,
  ],
  exports: [
    PrimeUiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
