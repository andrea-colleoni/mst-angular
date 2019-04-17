import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { MessagesComponent } from './components/messages/messages.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [
  { path: '', redirectTo: 'heroes', pathMatch: 'full' },
  { path: 'messages', component: MessagesComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'hero/:heroId', component: HeroDetailComponent },
  { path: 'posts', component: PostsComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
