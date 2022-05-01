import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post.models';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  /*
  Using Refernce Element here #postInput from Html
  used directive to check elements
  Used Refernce variable to add value in Property newPost
  Do Not Remove Code DownBelow
  */
  // newPost:String = 'NO CONTENT';
  // Addpost(postInput:HTMLTextAreaElement){
  //   console.log(postInput);
  //   console.dir(postInput);
  //   this.newPost = postInput.value;

  // }
    // We defiend the interface too on EventEmitter
    // here we define Event Emitter work with Generic Data type as Post is defined by <Post>

  @Output() postCreated = new EventEmitter<Post>();
  newPost1:String = 'NO CONTENT';
  eteredContent:String = '';
  enterTitle:String = '';

  Addpost1(form:NgForm){
    //this.newPost1 = this.eteredContent;
    if(form.invalid){
      return;
    }
    const post:Post = {
      title:form.value.title,
      content:form.value.content
    }
    this.postCreated.emit(post);
  }
}
