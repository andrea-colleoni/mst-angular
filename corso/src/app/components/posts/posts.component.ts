import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Observable } from 'rxjs';
import { Post } from '../../model/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Observable<Post[]>;
  // posts: Post[];
  constructor(
    private ps: PostsService,
  ) { }

  ngOnInit() {
    this.fetchPosts();
  }

  fetchPosts() {
    this.posts = this.ps.getPosts();
    // this.ps.getPosts().subscribe(p => {
    //   this.posts = p.map(pp => Object.assign(new Post(), pp));
    // });
  }

}
