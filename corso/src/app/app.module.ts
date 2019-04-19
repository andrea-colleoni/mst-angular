import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { NgModule } from '@angular/core';
import { PrimeUiModule } from './prime-ui.module';
import { PostsTableComponent } from './components/posts-table/posts-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    PostsComponent,
    PostsTableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    PrimeUiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
