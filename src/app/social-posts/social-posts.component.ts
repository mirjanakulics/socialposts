import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  post = [];

  constructor() { }

  onSubmit(post: string): void {
    console.log(post);
    this.post.push(post);
  }

  onRemove(index: number): void
 {
   console.log(index);
   this.post.splice(index, 1);
 }

  ngOnInit() {
  }

}
