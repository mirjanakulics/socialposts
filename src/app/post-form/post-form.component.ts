import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {


  @Input() post: string[];
  @Output() onRemovePost = new EventEmitter<any>();
  @Output() onAddPost = new EventEmitter<any>();

  constructor() { }

  removePost(index: number): void {
    console.log(index);
    this.onRemovePost.emit(index);
  }

  addPost(form): void {
    this.onAddPost.emit(form.value.postToAdd);
  }

  ngOnInit() {
  }

}
