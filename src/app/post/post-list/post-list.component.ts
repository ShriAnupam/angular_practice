import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post.models';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  panelOpenState = false;

  // posts = [
  //   {title:'First Post', content:'This is the content of First Post'},
  //   {title:'Second Post', content:'This is the content of Second Post'},
  //   {title:'Third Post', content:'This is the content of Third Post'},
  // ]
  @Input() posts:Post[] = [];

}
