import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Post } from '../../model/post';
import { PostsService } from '../../services/posts.service';
import { tap, map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.css']
})
export class PostsTableComponent implements OnInit {

  posts$ = new Subject<Post[]>();
  termSubject = new Subject<string>();

  cols: any[];

  constructor(
    private ps: PostsService,
  ) { }

  ngOnInit() {
    this.termSubject.pipe(
      debounceTime(500),
      distinctUntilChanged(),
    )
    .subscribe(str => this.fetchPosts(str));
    this.termSubject.next(''); // carica allì'inizio tutti i posts

    this.cols = [
      { field: 'title', header: 'Titolo' },
      { field: 'abstract', header: 'Abstract' },
      { field: 'body', header: 'Body' },
    ];
  }

  private fetchPosts(serachTerm: string) {
    this.ps.getPosts()
    .subscribe(psts => this.posts$.next(psts.filter(pt => (pt.body.indexOf(serachTerm) >= 0))));
  }

  serverFilter(serachTerm: string) {
    this.termSubject.next(serachTerm);
  }

}
