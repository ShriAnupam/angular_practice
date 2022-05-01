import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post.models';
import { PostsService } from '../posts.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {


  // Here we define the Dependency Injection of postService to this Component Construcor
  // And also use public keyword so ypscript add a property to this class directly without definig it like argument = this.property
  // Example this.postsService(property)= postsService(argument)
  constructor(public postsService:PostsService) { }

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
