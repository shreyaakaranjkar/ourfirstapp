import { Component, OnInit } from '@angular/core';
import { posts } from 'src/app/const/posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit{
  postsArr : Array<any> =[]
  ngOnInit(): void {
this.postsArr = posts;

console.log(this.postsArr);

  }

}
